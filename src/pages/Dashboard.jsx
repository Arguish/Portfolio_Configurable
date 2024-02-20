import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSubheader from '../Components/AdminSubheader/AdminSubHeader';
import styled from 'styled-components';

const DashboardContainer = styled.div`
    padding: 20px;
`;

const Dashboard = () => {
    return (
        <DashboardContainer>
            <AdminSubheader />
            <Outlet />
        </DashboardContainer>
    );
};

export default Dashboard;
