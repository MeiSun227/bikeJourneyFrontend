import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DashboardPage from './page/DashboardPage';
import AppRoutes from './Route';

const App = () => {

  return (

    <div className="App">
      <NavBar />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppRoutes />
      </Box>
    </div>
  );

}

export default App;