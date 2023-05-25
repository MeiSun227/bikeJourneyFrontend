import React from 'react';
import { Routes, Route } from 'react-router-dom'
import JourneyTable from './components/JourneyTabel.tsx/JourneyTable';
import StationDetail from './components/StationDetail/StationDetail';
import StationTable from './components/StationTable.tsx/StationTable';
import LandingPage from './page/LandingPage';

const AppRoutes = () =>
(
    <Routes>
        <Route path="/journeys" element={< JourneyTable />} />
        <Route path="/stations" element={< StationTable />} />
        <Route path="/station/:stationId" element={<StationDetail />} />
        <Route path="/" element={< LandingPage/>} />
    </Routes>
)

export default AppRoutes;