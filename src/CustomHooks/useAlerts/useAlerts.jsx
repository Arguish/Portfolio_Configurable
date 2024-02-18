import { useState, useCallback } from 'react';

const useAlert = () => {
    const [alert, setAlert] = useState(null);

    const showAlert = useCallback((message, type = 'info') => {
        setAlert({ message, type });

        // Ocultar la alerta después de 3 segundos
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    }, []);

    return { alert, showAlert };
};

export default useAlert;
