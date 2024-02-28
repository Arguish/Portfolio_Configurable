import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdminSubheader = () => {
    return (
        <SubheaderContainer>
            <StyledLink to="/dashboard/tech-management">
                Gestionar Tecnologías
            </StyledLink>
            <StyledLink to="/dashboard/project-management">
                Gestionar Proyectos
            </StyledLink>
            <StyledLink to="/dashboard/blog-management">
                Gestionar Blog
            </StyledLink>
        </SubheaderContainer>
    );
};

export default AdminSubheader;

const SubheaderContainer = styled.div`
    background-color: #f0f0f0;
    padding: 10px 20px;
    display: flex;
    gap: 20px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
        color: #007bff;
    }
`;
