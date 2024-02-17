import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Importa los componentes de cada página
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import AboutMe from '../pages/AboutMe.jsx';
import Projects from '../pages/Projects.jsx';
import Contact from '../pages/Contact.jsx';

const Directory = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} /> // Página de inicio
                <Route path="/login" element={<Login />} /> // Página de inicio
                <Route path="/about" element={<AboutMe />} /> // Página sobre mí
                <Route path="/projects" element={<Projects />} /> // Página de
                proyectos
                <Route path="/contact" element={<Contact />} /> // Página de
                contacto
            </Routes>
        </>
    );
};

export default Directory;
