import React, { useEffect } from 'react';
import { useGlobalContext } from '../CustomHooks/useGlobalContext/useGlobalContext';
import axios from 'axios';
import styled from 'styled-components';
import Photo1 from '../assets/photo_5999151787694733785_w.jpg';

const HomeContainer = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
    padding: 20px;
`;

const Title = styled.h1`
    margin: 0;
    padding: 10px;
`;

const Subtitle = styled.h2`
    margin: 10px 0;
`;

const Bio = styled.p`
    margin: 10px 0;
    padding: 10px;
    max-width: 600px;
    text-align: center;
    background-color: var(--background-color);
    border: 4px solid var(--text-color);
    border-radius: 5px;
`;

const Image = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 100%;
    margin: 20px 0;
    background-image: url(${Photo1});
    background-size: cover;
    background-position: 50%;
    border: 8px solid;
`;

const Home = () => {
    const { showAlert } = useGlobalContext();

    useEffect(() => {
        const wakeUpServer = async () => {
            try {
                const response = await axios.get('https://mads.onrender.com/');
                showAlert(response.data, 'info');
            } catch (error) {
                showAlert('???', 'error');

                console.error('Error al despertar el servidor:', error);
            }
        };

        wakeUpServer();
    }, []);

    return (
        <HomeContainer>
            <Image src={Photo1} alt="Tu foto" />
            <div>
                <Title>
                    Hola, soy <strong>Javier</strong>
                </Title>
                <Subtitle>
                    Desarrollador Web <strong>Full-Stack</strong>
                </Subtitle>
                <Bio>
                    Breve biografía o presentación personal. Habla sobre tu
                    experiencia, lo que te apasiona del desarrollo web, y
                    cualquier otro detalle que consideres relevante para quienes
                    visitan tu portfolio.
                </Bio>
            </div>
        </HomeContainer>
    );
};

export default Home;
