import React from 'react';
import styled from 'styled-components';
import TechLogo from '../Components/TechLogo/TechLogo';
import photo from '../assets/P7290063.png';

// Opcional: Definir estilos con styled-components
const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const SectionTitle = styled.h2`
    margin: 20px 0;
`;

const ProfileImage = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin: 20px 0;
    background-image: url(${photo});
    background-size: cover;
    background-position: 50%;
    border: 8px solid var(--text-color);
`;

const Bio = styled.p`
    text-align: center;
    max-width: 800px;
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
`;

const Skill = styled.div`
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

// Lista de habilidades para demostrar
const skills = [
    { name: 'HTML', domain: 'html.com' },
    { name: 'CSS', domain: 'css-tricks.com' },
    { name: 'JavaScript', domain: 'javascript.com' },
    { name: 'React', domain: 'reactjs.org' },
    { name: 'Node.js', domain: 'nodejs.org' },
    { name: 'Git', domain: 'git-scm.com' },
];
const AboutMe = () => {
    return (
        <AboutContainer>
            <SectionTitle>Sobre Mí</SectionTitle>
            <ProfileImage />
            <Bio>
                Aquí puedes escribir un párrafo detallado sobre ti, tu
                experiencia, educación, y cualquier otra cosa que quieras
                compartir sobre tu viaje profesional. Esta es tu oportunidad de
                contar tu historia y mostrar qué te hace único como
                desarrollador/a.
            </Bio>
            <SectionTitle>Habilidades</SectionTitle>
            <SkillsContainer>
                <TechLogo technologies={skills} size="100px" />
                <TechLogo technologies={skills} size="100px" />
                <TechLogo technologies={skills} size="100px" />
                <TechLogo technologies={skills} size="100px" />
            </SkillsContainer>
        </AboutContainer>
    );
};

export default AboutMe;
