import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    position: fixed;
    font-size: 24px;
    cursor: pointer;
    border: none;
    background: transparent;
    width: 60px; /* Ancho fijo */
    height: 60px; /* Alto fijo */
    display: flex;
    justify-content: center;
    align-items: center;
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
                setIsDisabled(false);
                localStorage.setItem('allowedAccess', 'true');
                navigate('/login');
            }, 1000);
            setClickCount(0);
        } else if (clickCount > 0) {
            timer = setTimeout(() => {
                setClickCount(0);
            }, 2000);
        }

        return () => clearTimeout(timer);
    }, [clickCount, navigate]);

    const handleClick = () => {
        if (!isDisabled) {
            setClickCount((prev) => prev + 1);
            if (clickCount < 9) {
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
