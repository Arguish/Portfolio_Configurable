import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoImage = styled(motion.img)`
    width: ${({ size }) => size || '50px'};
    height: ${({ size }) => size || '50px'};
    border-radius: 50%; /* Hace que la imagen sea un círculo */
    object-fit: cover;
`;

const TechLogo = ({ technologies, size }) => {
    const [currentTechIndex, setCurrentTechIndex] = useState(() =>
        Math.floor(Math.random() * technologies.length)
    );

    useEffect(() => {
        // Actualiza la tecnología después de un intervalo aleatorio
        const updateTechnology = () => {
            setCurrentTechIndex(
                Math.floor(Math.random() * technologies.length)
            );
        };

        // Calcula un tiempo aleatorio entre 2 y 4 segundos (2000 a 4000 milisegundos)
        const getRandomTime = () => 3000 + (Math.random() * 2000 - 1000);

        // Establece el primer intervalo
        let interval = setInterval(() => {
            updateTechnology();
            clearInterval(interval);
            // Establece el siguiente intervalo con un nuevo tiempo aleatorio
            interval = setInterval(updateTechnology, getRandomTime());
        }, getRandomTime());

        return () => clearInterval(interval);
    }, [technologies.length]); // Solo depende de la longitud del arreglo technologies

    const currentTech = technologies[currentTechIndex];

    return (
        <LogoImage
            key={currentTech.domain}
            src={`https://logo.clearbit.com/${currentTech.domain}`}
            alt={`Logo de ${currentTech.name}`}
            size={size}
            animate={{ rotateZ: 360 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            initial={{ rotateZ: 0 }}
        />
    );
};

export default TechLogo;
