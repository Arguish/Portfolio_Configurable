import React, { useState, useEffect } from 'react';
import Directory from './Routes/Routes.jsx';
import Header from './Components/Header/Header.jsx';
import styled from 'styled-components';
import Alert from './Components/Alert/Alert.jsx';
import { useGlobalContext } from './CustomHooks/useGlobalContext/useGlobalContext.jsx';

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

    const { alert } = useGlobalContext();

    return (
        <>
            <Header theme={theme} toggleTheme={toggleTheme} />
            {alert.visible && (
                <Alert message={alert.message} type={alert.type} />
            )}

            <MainContainer>
                <Directory />
            </MainContainer>
        </>
    );
}

export default App;
