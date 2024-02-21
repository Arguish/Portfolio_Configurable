import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    updateProject,
    deleteProject,
    createProject,
} from '../../services/projectService';

import TechEdit from './TechEdit';
import TechnologiesContainer from './TechnologiesContainer';

const defaultProject = {
    title: '',
    description: '',
    imageUrl: '',
    technologies: [],
};

const ProjectCardEdit = ({ project, closeModal }) => {
    const [teches, setTeches] = useState(project ? project.technologies : []);

    const [localProyect, setlocalProyect] = useState(project || defaultProject);
    const [edit, setedit] = useState(false);
    const [isNew, setisNew] = useState(!project ? true : false);

    const handleUpdate = async () => {
        try {
            await updateProject(localProyect._id, { ...localProyect });
            console.log('todo ok');
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };
    const handleCreate = async () => {
        try {
            console.log({ ...localProyect });
            await createProject({ ...localProyect });
            console.log('todo ok');
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('¿Estás seguro de querer eliminar este proyecto?')) {
            try {
                await deleteProject(localProyect._id);
                console.log('Borrado');
            } catch (error) {
                console.error('Error deleting project:', error);
            }
        }
    };
    return (
        <CardContainer>
            <Input
                type="text"
                value={localProyect.title}
                onChange={(e) =>
                    setlocalProyect({ ...localProyect, title: e.target.value })
                }
                placeholder="Título"
            />
            <TextArea
                value={localProyect.description}
                onChange={(e) =>
                    setlocalProyect({
                        ...localProyect,
                        description: e.target.value,
                    })
                }
                placeholder="Descripción"
            />
            <Input
                type="text"
                value={localProyect.imageUrl}
                onChange={(e) =>
                    setlocalProyect({
                        ...localProyect,
                        imageUrl: e.target.value,
                    })
                }
                placeholder="URL de la Imagen"
            />
            <TechnologiesContainer
                proyect={localProyect}
                updateProjectCallback={setlocalProyect}
            />

            {!isNew ? (
                <>
                    <Button
                        onClick={() => {
                            handleUpdate();
                            closeModal(false);
                        }}
                    >
                        Actualizar
                    </Button>
                    <Button
                        onClick={() => {
                            handleDelete();
                            closeModal(false);
                        }}
                    >
                        Borrar
                    </Button>
                </>
            ) : (
                <Button
                    onClick={() => {
                        handleCreate();
                        closeModal(false);
                    }}
                >
                    Crear
                </Button>
            )}
            <Button
                onClick={() => {
                    closeModal(false);
                }}
            >
                Cancelar
            </Button>
        </CardContainer>
    );
};

export default ProjectCardEdit;

const CardContainer = styled.div`
    background-color: #fff;
    width: 40vw;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: auto;
    margin-top: 10vh;
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
