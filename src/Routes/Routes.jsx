import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from '../pages/Landing.jsx';

import Login from '../pages/Login.jsx';
import Blog from '../pages/Blog.jsx';
import ArticlePage from '../pages/ArticlePage.jsx';
import Contact from '../pages/Contact.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import ProtectedRoute from '../CustomHooks/ProtectedRoute/ProtectedRoute.jsx';

import TechManagement from '../pages/admin/TechManagement.jsx';
import ProjectManagement from '../pages/admin/ProjectManagement.jsx';
import BlogManagement from '../pages/admin/BlogManagement.jsx';

const Directory = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/article/:id" element={<ArticlePage />} />
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
                    <Route index element={<BlogManagement />} />
                    <Route
                        path="tech-management"
                        element={<TechManagement />}
                    />
                    <Route
                        path="blog-management"
                        element={<BlogManagement />}
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
