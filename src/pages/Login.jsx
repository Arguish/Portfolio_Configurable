import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilos del formulario
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Verifica si el acceso está permitido
        const allowedAccess = localStorage.getItem('allowedAccess');
        if (allowedAccess !== 'true') {
            navigate('/'); // Redirige a la página de inicio si el acceso no está permitido
        } else {
            setTimeout(() => localStorage.removeItem('allowedAccess'), 3000);
        }
    }, [navigate]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt with:', username, password);
        // Aquí iría la lógica de autenticación
        // Por simplicidad, redirigimos a la página principal
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
