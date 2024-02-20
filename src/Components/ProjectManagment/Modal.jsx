import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const Modal = ({ isOpen, children, onClose }) =>
    isOpen ? (
        <Overlay onClick={onClose}>
            <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
        </Overlay>
    ) : null;

export default Modal;
