import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos para el subheader
const SubheaderContainer = styled.div`
    background-color: #f0f0f0; // Color de fondo del subheader
    padding: 10px 20px; // Padding para darle espacio al contenido
    display: flex; // Usamos flexbox para alinear los elementos
    gap: 20px; // Espacio entre los elementos
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #333; // Color del texto
    font-weight: bold;

    &:hover {
        color: #007bff; // Color al pasar el mouse
    }
`;

const AdminSubheader = () => {
    return (
        <SubheaderContainer>
            <StyledLink to="/dashboard/tech-management">
                Gestionar Tecnologías
            </StyledLink>
            <StyledLink to="/dashboard/project-management">
                Gestionar Proyectos
            </StyledLink>
            {/* Añade más enlaces según necesites */}
        </SubheaderContainer>
    );
};

export default AdminSubheader;
