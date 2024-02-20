import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Alert = ({ message, type, onDismiss }) => {
    return (
        <AlertContainer
            type={type}
            variants={alertVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onDismiss}
        >
            {message}
        </AlertContainer>
    );
};

export default Alert;

const AlertContainer = styled(motion.div)`
    position: fixed;
    top: 110px;
    right: 20px;
    padding: 10px 20px;
    color: white;
    background-color: ${({ type }) =>
        type === 'error' ? '#ff3860' : '#209cee'};
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const alertVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.5 } },
};
