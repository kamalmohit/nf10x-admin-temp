import React from 'react';
import { Outlet } from 'react-router-dom';

import DashboardHeader from 'components/DashboardHeader/DashboardHeader';
const HomeView = () => {
    return (
        <main className="min-h-screen">
            <DashboardHeader />
            <Outlet />
        </main>
    )
}

export default HomeView;