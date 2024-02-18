import React, { useState, useEffect } from 'react';
import Directory from './Routes/Routes.jsx';
import Header from './Components/Header/Header.jsx';
import styled from 'styled-components';

const MainContainer = styled.div`
    background-color: transparent;
`;

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <MainContainer>
                <Directory />
            </MainContainer>
        </>
    );
}

export default App;
