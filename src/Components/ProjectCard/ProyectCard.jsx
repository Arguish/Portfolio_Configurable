import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx'; // Asume que tienes un componente Modal
import Chip from './Chip.jsx'; // Asume que tienes un componente Chip para tecnologías

const Card = styled.div`
    height: 300px;
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
    cursor: pointer;
`;

const ProjectTitle = styled.h3``;

const ProjectDescription = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TechChipsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
`;

const ProjectCard = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const technologies = project.technologies || [];
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <>
            <Card onClick={toggleModal}>
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '4px',
                    }}
                />
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechChipsContainer>
                    {project.technologies.map((tech) => (
                        <Chip
                            key={tech.name}
                            text={tech.name}
                            color={tech.color}
                        /> // Asume que Chip acepta props text y color
                    ))}
                </TechChipsContainer>
            </Card>
            {isModalOpen && <Modal project={project} onClose={toggleModal} />}
        </>
    );
};

export default ProjectCard;
