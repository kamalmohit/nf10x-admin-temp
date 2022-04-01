import React from 'react';
import { Outlet } from 'react-router-dom';

import DashboardHeader from 'components/DashboardHeader/DashboardHeader';
const HomeView = () => {
    return (
        <React.Fragment>
            <DashboardHeader />
            <Outlet />
        </React.Fragment>
    )
}

export default HomeView;