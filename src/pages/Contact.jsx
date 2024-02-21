import React, { useState } from 'react';
import styled from 'styled-components';
import axiosInstance from '../utils/axiosConfig';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        text: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post(
                '/contact/send',
                formData
            );
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            console.error('Error al enviar el formulario:', error.response);
        }
    };

    return (
        <ContactContainer>
            <SectionTitle>Contacto</SectionTitle>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu Nombre"
                    required
                />
                <Input
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Tu Teléfono"
                    required
                />
                <Input
                    type="email"
                    name="mail"
                    value={formData.mail}
                    onChange={handleChange}
                    placeholder="Tu Correo Electrónico"
                    required
                />
                <TextArea
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    placeholder="Tu Mensaje"
                    required
                />
                <Button type="submit">Enviar Mensaje</Button>
            </Form>
            <ContactInfo>
                <p>Email: jhergon8@gmail.com</p>
            </ContactInfo>
        </ContactContainer>
    );
};

export default Contact;
const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const SectionTitle = styled.h2`
    margin: 20px 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
`;

const Input = styled.input`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    height: 100px;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: var(--primary-color);
    color: var(--text-color);
    cursor: pointer;

    &:hover {
        background-color: var(--secondary-color);
    }
`;

const ContactInfo = styled.div`
    margin-top: 20px;
`;
