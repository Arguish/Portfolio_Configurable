import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TechLogo = ({ technologies, size }) => {
    const [currentTechIndex, setCurrentTechIndex] = useState(() =>
        Math.floor(Math.random() * technologies.length)
    );

    useEffect(() => {
        const updateTechnology = () => {
            setCurrentTechIndex(
                Math.floor(Math.random() * technologies.length)
            );
        };
        const getRandomTime = () => 5000 + (Math.random() * 2000 - 1000);
        let interval = setInterval(() => {
            updateTechnology();
            clearInterval(interval);
            interval = setInterval(updateTechnology, getRandomTime());
        }, getRandomTime());

        return () => clearInterval(interval);
    }, [technologies.length]);

    const currentTech = technologies[currentTechIndex];

    function buildImageUrl(domainOrUrl) {
        const clearbitBaseUrl = 'https://logo.clearbit.com/';
        if (domainOrUrl.startsWith('http')) {
            return domainOrUrl;
        } else {
            return `${clearbitBaseUrl}${domainOrUrl}`;
        }
    }

    const imageUrl = buildImageUrl(currentTech.domain);

    return (
        <LogoImage
            key={currentTech.domain}
            src={imageUrl}
            alt={`Logo de ${currentTech.name}`}
            size={size}
            animate={{ rotateZ: 360 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            initial={{ rotateZ: 0 }}
        />
    );
};

export default TechLogo;

const LogoImage = styled(motion.img)`
    width: ${({ size }) => size || '50px'};
    height: ${({ size }) => size || '50px'};
    border-radius: 50%;
    object-fit: cover;
`;
