import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../../Components/ProjectManagment/ProjectCard';
import NewProjectForm from '../../Components/ProjectManagment/NewProjectForm';
import Modal from '../../Components/ProjectManagment/Modal';
import {
    createProject,
    fetchProjects,
    updateProject,
    deleteProject,
} from '../../services/projectService';

const ProjectManagement = () => {
    const [projects, setProjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        async function loadProjects() {
            try {
                const fetchedProjects = await fetchProjects();
                setProjects(fetchedProjects);
            } catch (error) {
                console.error('Error loading projects:', error);
            }
        }
        loadProjects();
    }, []);

    const handleProjectChange = (projectId, field, value) => {
        setProjects(
            projects.map((project) =>
                project._id === projectId
                    ? { ...project, [field]: value }
                    : project
            )
        );
    };

    return (
        <>
            {projects.map((project) => (
                <ProjectCard
                    key={project._id}
                    project={project}
                    handleProjectChange={handleProjectChange}
                />
            ))}
            <NewProjectForm setIsModalOpen={setIsModalOpen} />
        </>
    );
};

export default ProjectManagement;

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
