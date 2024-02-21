import React from 'react';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const Landing = () => {
    return (
        <>
            <Home></Home>
            <hr />
            <Projects></Projects>
            <hr />
            <AboutMe></AboutMe>
            <hr />
            <Contact></Contact>
        </>
    );
};

export default Landing;
