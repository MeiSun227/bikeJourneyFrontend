import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';

const NavBar = () => {
    return (
        <React.Fragment>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <PetsIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Bike App
                    </Typography>
                    <Button color="inherit" component={Link} to="/stations">
                        Stations
                    </Button>
                    <Button color="inherit" component={Link} to="/journeys">
                        Journeys
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default NavBar