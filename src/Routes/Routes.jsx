import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import AboutMe from '../pages/AboutMe.jsx';
import Projects from '../pages/Projects.jsx';
import Contact from '../pages/Contact.jsx';

const Directory = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                proyectos
                <Route path="/contact" element={<Contact />} />
                contacto
            </Routes>
        </>
    );
};

export default Directory;
