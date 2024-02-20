import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSubheader from '../Components/AdminSubheader/AdminSubHeader'; // Asegúrate de que la ruta de importación sea correcta
import styled from 'styled-components';

// Opcional: Estilos para el contenedor del dashboard
const DashboardContainer = styled.div`
    padding: 20px;
`;

const Dashboard = () => {
    return (
        <DashboardContainer>
            <AdminSubheader />
            <Outlet />{' '}
            {/* Aquí se renderizarán los componentes de las subrutas */}
        </DashboardContainer>
    );
};

export default Dashboard;
