import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axiosInstance from '../utils/axiosConfig';
import { useGlobalContext } from '../CustomHooks/useGlobalContext/useGlobalContext';

const LoginPage = () => {
    const navigate = useNavigate();

    const { showAlert } = useGlobalContext();

    useEffect(() => {
        const allowedAccess = localStorage.getItem('allowedAccess');
        if (allowedAccess !== 'true') {
            navigate('/');
        } else {
            setTimeout(() => localStorage.removeItem('allowedAccess'), 3000);
        }
    }, [navigate]);

    const [mail, setmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = {
            mail,
            password,
        };

        try {
            const response = await axiosInstance.post('user/login', loginData);
            showAlert(String(response.data.message), 'info');
            console.log('Respuesta del servidor:', response.data);

            localStorage.setItem('authToken', response.data.token);

            navigate('/dashboard');
        } catch (error) {
            showAlert(error.response.data, 'error');
            console.log(error);
        }
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <Input
                    type="mail"
                    placeholder="E@mail"
                    value={mail}
                    onChange={(e) => setmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Login</Button>
            </Form>
        </FormContainer>
    );
};

export default LoginPage;
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background-color: transparent;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: transparent;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: var(--border-color);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: var(--accent-color);
    }
`;
