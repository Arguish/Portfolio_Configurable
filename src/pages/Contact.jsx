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
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 100px;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: blue;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: darkblue;
    }
`;

const ContactInfo = styled.div`
    margin-top: 20px;
`;

// Componente funcional Contact
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
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
        // Aquí iría la lógica para enviar los datos del formulario, por ejemplo, con Axios
        console.log(formData); // Solo para propósitos de demostración
        // axios.post('TU_ENDPOINT_DE_API', formData);
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
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu Correo Electrónico"
                    required
                />
                <TextArea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tu Mensaje"
                    required
                />
                <Button type="submit">Enviar Mensaje</Button>
            </Form>
            <ContactInfo>
                {/* Aquí puedes añadir tu email, teléfono, o enlaces a redes sociales */}
                <p>Email: tuemail@ejemplo.com</p>
                <p>Teléfono: +123456789</p>
                {/* Añade aquí tus enlaces a redes sociales si lo deseas */}
            </ContactInfo>
        </ContactContainer>
    );
};

export default Contact;
