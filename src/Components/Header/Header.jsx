import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RotatingWords from '../RotatingWords/RotatingWords';
import { useNavigate } from 'react-router-dom';
import ThemeButton from '../ThemeButton/ThemeButton';
import lightBorder from './photo_5947258360736891134_x.jpg';
import darkBorder from './photo_5947258360736891136_x.jpg';
import headerBackground from './16.jpg'; // Agrega la ruta a la imagen de fondo

const handleBorder = (props) =>
    props.theme === 'dark' ? darkBorder : lightBorder;

// Componentes estilizados
const HeaderBorder = styled.div`
    border: 8px solid transparent;
    border-style: solid;
    border-width: 20px;
    /* Utiliza la sintaxis correcta para border-image */
    border-image-source: url(${handleBorder(props)});
    border-image-slice: 40 fill;
    border-image-repeat: repeat;
    border-image-width: 20px;
    border-image-outset: 0;
    background-image: url(${headerBackground});
    background-blend-mode: multiply;
    background-color: var(--background-color);
    border-radius: 20px;
`;
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    background-color: var(--background-color);
    background-image: url(${headerBackground});
    background-blend-mode: multiply;
    color: var(--text-color);

    // Establece un borde sólido para ver el efecto del borde mientras se ajusta border-image
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
    color: var(--accent-color); // Ajusta el color del texto según tu diseño
    font-weight: bold;

    &:hover {
        color: darken(var(--accent-color), 10%); // Color al pasar el mouse
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
        <HeaderBorder theme={theme}>
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
        </HeaderBorder>
    );
};

export default Header;
