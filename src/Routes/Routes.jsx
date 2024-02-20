import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import AboutMe from '../pages/AboutMe.jsx';
import Projects from '../pages/Projects.jsx';
import Contact from '../pages/Contact.jsx';
import Dashboard from '../pages/Dashboard.jsx'; // Asegúrate de que la ruta es correcta
import NotFoundPage from '../pages/NotFoundPage.jsx'; // Asegúrate de que la ruta es correcta
import ProtectedRoute from '../CustomHooks/ProtectedRoute/ProtectedRoute.jsx';

import TechManagement from '../pages/admin/TechManagement.jsx'; // Asegúrate de que la ruta es correcta
import ProjectManagement from '../pages/admin/ProjectManagement.jsx'; // Asegúrate de que la ruta es correcta

const Directory = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<TechManagement />} /> // Ruta por
                    defecto del dashboard
                    <Route
                        path="tech-management"
                        element={<TechManagement />}
                    />
                    <Route
                        path="project-management"
                        element={<ProjectManagement />}
                    />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default Directory;
