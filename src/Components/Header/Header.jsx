import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RotatingWords from '../RotatingWords/RotatingWords';
import { useNavigate } from 'react-router-dom';
import ThemeButton from '../ThemeButton/ThemeButton';

// Componentes estilizados
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: var(
        --background-color
    ); // Asegúrate de que esta variable está definida y tiene un valor.
    color: var(
        --text-color
    ); // Asegúrate de que esta variable está definida y tiene un valor.

    // Establece un borde sólido para ver el efecto del borde mientras se ajusta border-image
    border: 8px solid;

    // Ajusta el borde para usar el SVG
    // Ajusta si necesitas esquinas redondeadas.
`;

const Logo = styled.h1`
    margin: 0;
    font-size: 24px;
    cursor: pointer;
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

// Asume que Header recibe props theme y toggleTheme
const Header = ({ theme, toggleTheme }) => {
    const navigate = useNavigate();

    // Función para manejar el clic en el logo
    const handleClick = () => {
        navigate('/'); // Cambia a la ruta de inicio
    };
    return (
        <HeaderContainer>
            <Logo onClick={handleClick}>
                While (true):
                <RotatingWords />
            </Logo>
            <div>
                <Nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Me</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <ThemeButton theme={theme} toggleTheme={toggleTheme} />
                </Nav>
            </div>
        </HeaderContainer>
    );
};

export default Header;
