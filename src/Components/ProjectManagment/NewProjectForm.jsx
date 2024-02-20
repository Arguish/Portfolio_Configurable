import React, { useState } from 'react';
import styled from 'styled-components';
import { createProject } from '../../services/projectService';

const NewProjectForm = ({ setIsModalOpen }) => {
    const [newProject, setNewProject] = useState({
        title: '',
        description: '',
        imageUrl: '',
        technologies: [],
    });

    const handleAddNewProject = async (e) => {
        e.preventDefault();
        try {
            const addedProject = await createProject(newProject);
            setProjects([...projects, addedProject]);
            setNewProject({
                title: '',
                description: '',
                imageUrl: '',
                technologies: [],
            });
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };
    return (
        <form onSubmit={handleAddNewProject}>
            <CardContainer>
                <Input
                    type="text"
                    value={newProject.title}
                    onChange={(e) =>
                        setNewProject({ ...newProject, title: e.target.value })
                    }
                    placeholder="Título"
                />
                <TextArea
                    value={newProject.description}
                    onChange={(e) =>
                        setNewProject({
                            ...newProject,
                            description: e.target.value,
                        })
                    }
                    placeholder="Descripción"
                />
                <Input
                    type="text"
                    value={newProject.imageUrl}
                    onChange={(e) =>
                        setNewProject({
                            ...newProject,
                            imageUrl: e.target.value,
                        })
                    }
                    placeholder="URL de la Imagen"
                />
                <Button type="submit">Añadir Nuevo Proyecto</Button>
            </CardContainer>
        </form>
    );
};

export default NewProjectForm;

const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
`;

const Button = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
