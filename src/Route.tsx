import React from 'react';
import { Routes, Route } from 'react-router-dom'
import JourneyTable from './components/JourneyTabel.tsx/JourneyTablev2';
import StationDetail from './components/StationDetail/StationDetail';
import DashboardPage from './page/DashboardPage';
import StationPage from './page/StationPage/StationPage';


const AppRoutes = () =>


(
    <Routes>
        <Route path="/" element={< DashboardPage />} />
        <Route path="/journeys" element={< JourneyTable />} />
        <Route path="/stations" element={< StationPage />} />
        <Route path="/station/:stationId" element={<StationDetail />} />

    </Routes>
)

export default AppRoutes;