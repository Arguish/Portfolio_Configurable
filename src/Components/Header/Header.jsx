import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RotatingWords from '../RotatingWords/RotatingWords';
import { useNavigate } from 'react-router-dom';
import ThemeButton from '../ThemeButton/ThemeButton';
import headerBackground from '../../assets/textura.jpg';

const Header = ({ theme, toggleTheme }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };
    return (
        <HeaderBorder theme={theme}>
            <HeaderContainer>
                <Logo onClick={handleClick}>
                    <strong>
                        While (true):
                        <RotatingWords />
                    </strong>
                </Logo>
                <div>
                    <Nav>
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

const HeaderBorder = styled.div`
    border: 4px solid;
    border-style: solid;
    background-image: url(${headerBackground});
    background-size: cover;
    background-repeat: repeat;
    background-blend-mode: multiply;
    background-color: var(--background-color);
    border-radius: 10px;
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
`;

const Logo = styled.h1`
    margin: 0;
    font-size: 24px;
    cursor: pointer;
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: var(--accent-color);
    font-weight: bold;

    &:hover {
        color: darken(var(--accent-color), 10%);
    }
`;
