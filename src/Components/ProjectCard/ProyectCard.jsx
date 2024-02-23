import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import Chip from './Chip.jsx';

const ProjectCard = ({ project, modal = true }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const technologies = project ? project.technologies : [];
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
                    {technologies.map((tech) => (
                        <Chip
                            key={tech.name}
                            text={tech.name}
                            color={tech.color}
                        />
                    ))}
                </TechChipsContainer>
            </Card>
            {modal && isModalOpen && (
                <Modal project={project} onClose={toggleModal} />
            )}
        </>
    );
};

export default ProjectCard;
const Card = styled.div`
    background-color: var(--background-color);
    text-align: center;
    width: 200px;
    border: 1px solid var(--border-color);
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
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
`;
