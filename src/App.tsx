import React from 'react';
import { CssBaseline } from '@mui/material';
import AppRoutes from './Route';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div id='App' >
        <NavBar/>
          <CssBaseline />
          <Container>
          <AppRoutes />
          </Container>
    </div>
  );

}

export default App;