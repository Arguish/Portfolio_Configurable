import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RotatingWords from '../RotatingWords/RotatingWords';
import { useNavigate } from 'react-router-dom';

const Header = ({ theme, toggleTheme }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };
    return (
        <>
            <HeaderBorder theme={theme}>
                <HeaderContainer>
                    <Logo onClick={handleClick}>
                        <strong>
                            <RotatingWords />
                        </strong>
                    </Logo>
                    <div>
                        <Nav>
                            <NavLink to="/blog">Blog</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </Nav>
                    </div>
                </HeaderContainer>
            </HeaderBorder>
        </>
    );
};

export default Header;

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
    border-radius: 20px;
    background-color: var(--background-color);
    color: var(--text-color);

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 10px;
    }
`;

const Logo = styled.h1`
    margin: 0;
    font-size: 24px;
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: var(--link-color);
    font-weight: bold;

    &:hover {
        color: darken(var(--link-color), 10%);
    }
`;
