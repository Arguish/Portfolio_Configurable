import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const allowedAccess = localStorage.getItem('allowedAccess');
        if (allowedAccess !== 'true') {
            navigate('/');
        } else {
            setTimeout(() => localStorage.removeItem('allowedAccess'), 3000);
        }
    }, [navigate]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt with:', username, password);

        navigate('/');
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
