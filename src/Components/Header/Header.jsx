import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RotatingWords from '../RotatingWords/RotatingWords';

// Componentes estilizados
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0; // Ajusta el color de fondo según tu diseño
`;

const Logo = styled.h1`
    margin: 0;
    font-size: 24px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px; // Espacio entre los enlaces
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #333; // Ajusta el color del texto según tu diseño
    font-weight: bold;

    &:hover {
        color: #007bff; // Color al pasar el mouse
    }
`;

const ThemeButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
`;

// Asume que Header recibe props theme y toggleTheme
const Header = ({ theme, toggleTheme }) => {
    return (
        <HeaderContainer>
            <Logo>
                While (true):
                <RotatingWords />
            </Logo>
            <div>
                <Nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Me</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </Nav>
                <ThemeButton onClick={toggleTheme}>
                    {theme === 'dark' ? '🌕' : '🌑'}
                </ThemeButton>
            </div>
        </HeaderContainer>
    );
};

export default Header;
