import React, { useEffect } from 'react';
import { useGlobalContext } from '../CustomHooks/useGlobalContext/useGlobalContext';
import axiosInstance from '../utils/axiosConfig';
import styled from 'styled-components';
import Photo1 from '../assets/photo_5999151787694733785_w.jpg';

const Home = () => {
    const { showAlert } = useGlobalContext();

    useEffect(() => {
        const wakeUpServer = async () => {
            try {
                const response = await axiosInstance.get('');
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
                <IntroDiv>
                    <Title>
                        Hola, soy <strong>Javier</strong>
                    </Title>
                    <Subtitle>
                        Desarrollador Web <strong>Full-Stack</strong>
                    </Subtitle>
                </IntroDiv>
                <div>
                    <Bio>
                        Mi experiencia en tecnología audiovisual y mi intensiva
                        formación en un Bootcamp de desarrollo me han dotado de
                        una perspectiva única para crear soluciones web
                        innovadoras.
                    </Bio>
                    <Bio>
                        Soy un apasionado por la intersección entre{' '}
                        <strong>tecnología</strong> y{' '}
                        <strong>creatividad.</strong>
                    </Bio>
                </div>
            </div>
        </HomeContainer>
    );
};

export default Home;

const IntroDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HomeContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10vw;
    padding: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1vh;
    }
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
    margin-top: 10vh;
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
    background-position: center;
    border: 8px solid;

    @media (max-width: 768px) {
        width: 300px;
        height: 300px;
    }
`;
