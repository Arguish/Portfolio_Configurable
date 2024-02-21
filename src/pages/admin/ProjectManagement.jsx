import React, { useEffect, useState } from 'react';
import ProjectCardEdit from '../../Components/ProjectManagment/ProjectCardEdit';
import ProjectCard from '../../Components/ProjectCard/ProyectCard';
import { fetchProjects } from '../../services/projectService';

const ProjectManagement = () => {
    const [projects, setProjects] = useState([]);
    const [selected, setselected] = useState({});
    const [modal, setmodal] = useState(false);

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

    return (
        <>
            {modal && (
                <ProjectCardEdit project={selected} closeModal={setmodal} />
            )}
            {projects.map((project, index) => (
                <div
                    key={index}
                    onClick={() => {
                        setmodal(!modal);
                        setselected(project);
                    }}
                >
                    <ProjectCard key={index} project={project} modal={false} />
                </div>
            ))}
            <button
                onClick={() => {
                    setmodal(!modal);
                    setselected(null);
                }}
            >
                Nuevo
            </button>
        </>
    );
};

export default ProjectManagement;
