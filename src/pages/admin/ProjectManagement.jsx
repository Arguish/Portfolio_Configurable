import React, { useEffect, useState } from 'react';
import ProjectCard from '../../Components/ProjectManagment/ProjectCard';
import NewProjectForm from '../../Components/ProjectManagment/NewProjectForm';
import { fetchProjects } from '../../services/projectService';

const ProjectManagement = () => {
    const [projects, setProjects] = useState([]);

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
            <NewProjectForm />
        </>
    );
};

export default ProjectManagement;
