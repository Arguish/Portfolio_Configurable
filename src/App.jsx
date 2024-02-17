import React, { useState, useEffect } from 'react';
import Directory from './Routes/Routes.jsx';
import Header from './Components/Header/Header.jsx';

function App() {
    const [theme, setTheme] = useState('light'); // Inicializa el tema como 'light'

    // Función para cambiar entre 'light' y 'dark'
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.setAttribute('data-theme', newTheme); // Actualiza el atributo en <body>
    };

    // Aplica el tema al cargar el componente
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <>
            <Header theme={theme} toggleTheme={toggleTheme} />

            <Directory />
        </>
    );
}

export default App;
