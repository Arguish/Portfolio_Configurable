import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
`;

const Modal = ({ project, onClose }) => {
    return (
        <ModalBackdrop onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <button onClick={onClose}>Cerrar</button>
            </ModalContent>
        </ModalBackdrop>
    );
};

export default Modal;
