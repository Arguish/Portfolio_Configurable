import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RotatingWords from '../RotatingWords/RotatingWords';
import { useNavigate } from 'react-router-dom';
import ThemeButton from '../ThemeButton/ThemeButton';

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
                        <RotatingWords />
                    </strong>
                </Logo>
                <div>
                    <Nav>
                        <NavLink to="/contact">Contact</NavLink>
                    </Nav>
                </div>
            </HeaderContainer>
            <ThemeButtonContainer>
                <ThemeButton theme={theme} toggleTheme={toggleTheme} />
            </ThemeButtonContainer>
        </HeaderBorder>
    );
};

export default Header;

const ThemeButtonContainer = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
`;

const HeaderBorder = styled.div`
    border: 4px solid;
    border-style: solid;
    background-color: var(--background-color);
    border-radius: 10px;
`;
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-right: 70px;
    border-radius: 20px;
    background-color: var(--background-color);
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
    color: var(--link-color);
    font-weight: bold;

    &:hover {
        color: darken(var(--link-color), 10%);
    }
`;
