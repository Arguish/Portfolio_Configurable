import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from '../pages/Landing.jsx';

import Login from '../pages/Login.jsx';
import Contact from '../pages/Contact.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import ProtectedRoute from '../CustomHooks/ProtectedRoute/ProtectedRoute.jsx';

import TechManagement from '../pages/admin/TechManagement.jsx';
import ProjectManagement from '../pages/admin/ProjectManagement.jsx';

const Directory = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<TechManagement />} />
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
