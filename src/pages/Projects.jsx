import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from '../Components/ProjectCard/ProyectCard';
import { fetchProjects } from '../services/projectService.js';

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

// Suponiendo que tienes una lista de proyectos para mostrar
const defaultProjects = [
    {
        id: 1,
        title: 'Proyecto Magento-DinoSol',
        description:
            'Durante este proyecto, me centré en identificar y solucionar problemas en la plataforma Magento 2 customizada por Dinosol, así como en crear funcionalidades personalizadas para satisfacer las necesidades específicas del Grupo Dinosol. Esto incluyó la implementación de nuevas características, la optimización del rendimiento y la mejora de la experiencia del usuario. Trabajé en estrecha colaboración con el equipo del Grupo Dinosol para entender sus requisitos y garantizar que las soluciones proporcionadas cumplieran con sus expectativas y estándares de calidad.',
        imageUrl:
            'https://sf.ezoiccdn.com/ezoimgfmt/www.vectorlogo.es/wp-content/uploads/2017/03/logo-vector-grupo-dinosol.jpg?ezimgfmt=rs:630x320/rscb1/ngcb1/notWebP',
        technologies: [{ name: 'Magento', color: 'Orange' }],
    },
    // Añade más proyectos según sea necesario
];

const Projects = () => {
    const [projects, setProjects] = useState(defaultProjects);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchProjects(); // Cambia esto por tu llamada a la API real
                setProjects(data); // Suponiendo que la API devuelve una lista de proyectos
            } catch (error) {
                console.error('Error al cargar proyectos:', error);
                // No es necesario cambiar el estado, ya usamos los proyectos por defecto
            }
        };

        loadProjects();
    }, []);
    return (
        <ProjectsContainer>
            <SectionTitle>Mis Proyectos</SectionTitle>
            <CardsContainer>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </CardsContainer>
        </ProjectsContainer>
    );
};

export default Projects;
