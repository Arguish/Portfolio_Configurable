import React, { useState } from 'react';
import styled from 'styled-components';
import { updateProject, deleteProject } from '../../services/projectService';

const ProjectCard = ({ project, handleProjectChange }) => {
    const [teches, setTeches] = useState(project.technologies || []);
    const [newTech, setNewTech] = useState(''); // Estado para el nuevo nombre de la tecnología
    const [newColor, setNewColor] = useState('');
    const [edit, setedit] = useState(false);

    const handleUpdate = async () => {
        try {
            await updateProject(project._id, { ...project });
            console.log('todo ok');
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('¿Estás seguro de querer eliminar este proyecto?')) {
            try {
                await deleteProject(project._id);
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
                value={project.title}
                onChange={(e) =>
                    handleProjectChange(project._id, 'title', e.target.value)
                }
                placeholder="Título"
            />
            <TextArea
                value={project.description}
                onChange={(e) =>
                    handleProjectChange(
                        project._id,
                        'description',
                        e.target.value
                    )
                }
                placeholder="Descripción"
            />
            <Input
                type="text"
                value={project.imageUrl}
                onChange={(e) =>
                    handleProjectChange(project._id, 'imageUrl', e.target.value)
                }
                placeholder="URL de la Imagen"
            />
            <TechnologiesContainer>
                {teches.map((teche, index) => (
                    <TechChip key={index}>
                        {!edit ? (
                            teche.name
                        ) : (
                            <Button
                                onClick={async () => {
                                    await teches.splice(index, 1);
                                    setTeches(teches);
                                }}
                            >
                                {teche.name}❌
                            </Button>
                        )}
                    </TechChip>
                ))}
                <div>
                    {!edit ? (
                        <Button
                            onClick={() => {
                                setedit(true);
                            }}
                        >
                            🆕
                        </Button>
                    ) : (
                        <>
                            <Input
                                type="text"
                                value={newTech}
                                onChange={(e) => {
                                    setNewTech(e.target.value);
                                }}
                                placeholder="NewTech"
                            />
                            <Input
                                type="color"
                                value={newColor}
                                onChange={(e) => {
                                    setNewColor(e.target.value);
                                }}
                            />
                            <Button
                                onClick={() => {
                                    const updatedTeches = [
                                        ...teches,
                                        { name: newTech, color: newColor },
                                    ];
                                    setTeches(updatedTeches);
                                }}
                            >
                                ✔️
                            </Button>
                        </>
                    )}
                </div>
            </TechnologiesContainer>
            {edit ? (
                <Button
                    onClick={() => {
                        setedit(false);
                        handleProjectChange(
                            project._id,
                            'technologies',
                            teches
                        );
                    }}
                >
                    Terminar
                </Button>
            ) : (
                <>
                    <Button onClick={handleUpdate}>Actualizar</Button>
                    <Button onClick={handleDelete}>Borrar</Button>
                </>
            )}
        </CardContainer>
    );
};

export default ProjectCard;

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

const TechnologiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 10px;
`;

const TechChip = styled.div`
    background-color: #eee;
    border-radius: 4px;
    padding: 5px 10px;
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
