import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    font-size: 24px;
    cursor: pointer;
    border: none;
    background: transparent;
`;

const ThemeButton = ({ toggleTheme, theme }) => {
    const [clickCount, setClickCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (clickCount === 10) {
            setIsDisabled(true);
            setTimeout(() => {
                setIsDisabled(false); // Reactiva el botón después de 1 segundo
                localStorage.setItem('allowedAccess', 'true'); // Establece una bandera en el almacenamiento local
                navigate('/login'); // Redirige a la página de login
            }, 1000);
            setClickCount(0); // Restablece el contador de clics
        } else if (clickCount > 0) {
            timer = setTimeout(() => {
                setClickCount(0); // Restablece el contador de clics si no se alcanzan los 10 clics en 2 segundos
            }, 2000);
        }

        return () => clearTimeout(timer);
    }, [clickCount, navigate]);

    const handleClick = () => {
        if (!isDisabled) {
            setClickCount((prev) => prev + 1);
            if (clickCount < 9) {
                // Asegura que toggleTheme solo se llama en los primeros 9 clics
                toggleTheme();
            }
        }
    };

    return (
        <Button onClick={handleClick} disabled={isDisabled}>
            {clickCount === 10 ? '🚀' : theme === 'dark' ? '🌕' : '🌑'}
        </Button>
    );
};

export default ThemeButton;
