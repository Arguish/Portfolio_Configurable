import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Asumiendo que enviarás el formulario mediante Axios

// Opcional: Definir estilos con styled-components
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
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid var(--text-color);
    border-radius: 4px;
    height: 100px;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: var(--accent-color);
    color: var(--text-color);
    cursor: pointer;

    &:hover {
        background-color: var(--cream);
    }
`;

const ContactInfo = styled.div`
    margin-top: 20px;
`;

// Componente funcional Contact
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
            const response = await axios.post(
                'https://mads.onrender.com/contact/send',
                formData
            );
            console.log('Respuesta del servidor:', response.data);
            // Aquí puedes manejar la respuesta, como limpiar el formulario o mostrar un mensaje de éxito.
        } catch (error) {
            console.error('Error al enviar el formulario:', error.response);
            // Manejar errores aquí, como mostrar un mensaje de error.
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
                {/* Aquí puedes añadir tu email, teléfono, o enlaces a redes sociales */}
                <p>Email: jhergon8@gmail.com</p>
                {/* Añade aquí tus enlaces a redes sociales si lo deseas */}
            </ContactInfo>
        </ContactContainer>
    );
};

export default Contact;
