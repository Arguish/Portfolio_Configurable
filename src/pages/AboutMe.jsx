import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchTechnologies } from '../services/techService';
import TechLogo from '../Components/TechLogo/TechLogo';
import photo from '../assets/P7290063.png';

const AboutMe = () => {
    const [skills, setSkills] = useState(skillsDefault);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const loadTechnologies = async () => {
            try {
                const data = await fetchTechnologies();
                setSkills(data);
            } catch (error) {
                console.error('Error al cargar tecnologías:', error);
            }
        };

        loadTechnologies();

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect;
    return (
        <AboutContainer>
            <Skill>
                <SkillsContainer>
                    <TechLogo
                        class="tech-logo"
                        technologies={skills}
                        size="100px"
                    />
                    {!isMobile && (
                        <TechLogo technologies={skills} size="100px" />
                    )}
                    {!isMobile && (
                        <TechLogo technologies={skills} size="100px" />
                    )}
                    <TechLogo
                        class="tech-logo"
                        technologies={skills}
                        size="100px"
                    />
                </SkillsContainer>
                <SkillsContainer>
                    <ProfileImage />
                </SkillsContainer>
                <SkillsContainer>
                    <TechLogo
                        class="tech-logo"
                        technologies={skills}
                        size="100px"
                    />
                    {!isMobile && (
                        <TechLogo technologies={skills} size="100px" />
                    )}
                    {!isMobile && (
                        <TechLogo technologies={skills} size="100px" />
                    )}
                    <TechLogo
                        class="tech-logo"
                        technologies={skills}
                        size="100px"
                    />
                </SkillsContainer>
            </Skill>
            <Bio>
                Disfruto enfrentando desafíos, aprendiendo nuevas tecnologías y
                trabajando en proyectos que requieren tanto pensamiento crítico
                como creatividad.
            </Bio>
            <Bio>
                Estoy constantemente buscando expandir mi conocimiento, como lo
                demuestran mis certificaciones, así como mi dedicación al
                aprendizaje autodidacta.
            </Bio>
        </AboutContainer>
    );
};

export default AboutMe;
const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
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

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;

    @media (max-width: 768px) {
        &:nth-child(1),
        &:nth-child(3) {
            .tech-logo:nth-child(n + 3) {
                display: none;
            }
        }
    }
`;

const Skill = styled.div`
    display: flex;
    padding: 10px;
    margin: 10px;
    border-radius: 4px;
`;

const Bio = styled.p`
    margin: 10px 0;
    padding: 10px;
    max-width: 600px;
    text-align: center;
    background-color: var(--background-color);
    border: 4px solid var(--border-color);
    border-radius: 5px;
`;

const skillsDefault = [
    { name: 'mySql', domain: 'mySql.com' },
    { name: 'CSS', domain: 'css-tricks.com' },
    { name: 'JavaScript', domain: 'javascript.com' },
    { name: 'React', domain: 'reactjs.org' },
    { name: 'Node.js', domain: 'nodejs.org' },
    { name: 'Git', domain: 'git-scm.com' },
];
