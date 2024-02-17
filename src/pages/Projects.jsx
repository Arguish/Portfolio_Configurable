import React from 'react';
import styled from 'styled-components';

// Opcional: Definir estilos con styled-components
const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const SectionTitle = styled.h2`
    margin: 20px 0;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px; // Espacio entre tarjetas para un diseño responsive
`;

const ProjectCard = styled.div`
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const ProjectInfo = styled.div`
    padding: 15px;
`;

const ProjectTitle = styled.h3``;

const ProjectDescription = styled.p`
    font-size: 0.9rem;
`;

// Suponiendo que tienes una lista de proyectos para mostrar
const projects = [
    {
        id: 1,
        title: 'Proyecto 1',
        description: 'Descripción breve del proyecto 1.',
        imageUrl: 'url-de-la-imagen-del-proyecto',
        // Añade enlaces a demo/repo si es necesario
    },
    // Añade más proyectos según sea necesario
];

const Projects = () => {
    return (
        <ProjectsContainer>
            <SectionTitle>Mis Proyectos</SectionTitle>
            <CardsContainer>
                {projects.map(({ id, title, description, imageUrl }) => (
                    <ProjectCard key={id}>
                        <ProjectImage
                            src={imageUrl}
                            alt={`Imagen del ${title}`}
                        />
                        <ProjectInfo>
                            <ProjectTitle>{title}</ProjectTitle>
                            <ProjectDescription>
                                {description}
                            </ProjectDescription>
                            {/* Añadir aquí enlaces a demos o repositorios */}
                        </ProjectInfo>
                    </ProjectCard>
                ))}
            </CardsContainer>
        </ProjectsContainer>
    );
};

export default Projects;
