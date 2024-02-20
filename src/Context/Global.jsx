import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [alert, setAlert] = useState({
        message: '',
        type: '',
        visible: false,
    });

    const showAlert = (message, type) => {
        setAlert({ message, type, visible: true });

        setTimeout(() => {
            setAlert({ message: '', type: '', visible: false });
        }, 3000);
    };

    return (
        <GlobalContext.Provider value={{ alert, showAlert }}>
            {children}
        </GlobalContext.Provider>
    );
};
