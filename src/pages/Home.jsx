import React from 'react';
// Importa styled-components si decides usarlo para los estilos
import styled from 'styled-components';

// Opcional: Definir estilos con styled-components
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    max-width: 600px;
    text-align: center;
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    margin: 20px 0;
`;

// Componente funcional Home
const Home = () => {
    return (
        <HomeContainer>
            <Image src="tu-foto-aqui.jpg" alt="Tu foto" />
            <Title>Hola, soy [Tu Nombre]</Title>
            <Subtitle>Desarrollador/a [Tu Especialidad]</Subtitle>
            <Bio>
                Breve biografía o presentación personal. Habla sobre tu
                experiencia, lo que te apasiona del desarrollo web, y cualquier
                otro detalle que consideres relevante para quienes visitan tu
                portfolio.
            </Bio>
            {/* Aquí puedes añadir más componentes o elementos, como botones que enlacen a otras secciones */}
        </HomeContainer>
    );
};

export default Home;
