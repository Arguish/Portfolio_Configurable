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
        title: 'Proyecto Magento-DinoSol',
        description:
            'Durante este proyecto, me centré en identificar y solucionar problemas en la plataforma Magento 2 customizada por Dinosol, así como en crear funcionalidades personalizadas para satisfacer las necesidades específicas del Grupo Dinosol. Esto incluyó la implementación de nuevas características, la optimización del rendimiento y la mejora de la experiencia del usuario. Trabajé en estrecha colaboración con el equipo del Grupo Dinosol para entender sus requisitos y garantizar que las soluciones proporcionadas cumplieran con sus expectativas y estándares de calidad.',
        imageUrl:
            'https://sf.ezoiccdn.com/ezoimgfmt/www.vectorlogo.es/wp-content/uploads/2017/03/logo-vector-grupo-dinosol.jpg?ezimgfmt=rs:630x320/rscb1/ngcb1/notWebP',
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
