import React from 'react';
import styled from 'styled-components';

// Componente estilizado para la imagen
const LogoImage = styled.img`
    width: ${({ size }) =>
        size ||
        '50px'}; // Usa el prop size para el tamaño, con un valor por defecto
    height: ${({ size }) =>
        size ||
        '50px'}; // Mismo valor para altura y anchura para mantener la proporción
`;

const TechLogo = ({ text, size }) => {
    // Construir la URL del logo utilizando el texto proporcionado
    const logoUrl = `https://logo.clearbit.com/${text}`;

    return <LogoImage src={logoUrl} alt={`Logo de ${text}`} size={size} />;
};

export default TechLogo;
