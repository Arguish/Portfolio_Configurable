import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const Landing = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            <Home></Home>
            <hr />
            <Projects></Projects>
            <hr />
            <AboutMe></AboutMe>
            <hr />
            <Contact></Contact>
            {isMobile && (
                <Extra>
                    <hr />
                    <p>¿Quieres saber en que ando metido?</p>
                    <Button
                        onClick={() => {
                            navigate('/blog');
                        }}
                    >
                        Visita el Blog!
                    </Button>
                </Extra>
            )}
        </>
    );
};

export default Landing;

const Extra = styled.div`
    text-align: center;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: var(--primary-color);
    color: var(--const-white);
    cursor: pointer;

    &:hover {
        background-color: var(--secondary-color);
    }
`;
