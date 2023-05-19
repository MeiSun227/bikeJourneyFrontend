import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';


const NavBar = () => {
    return (
        <React.Fragment>
            <AppBar position="sticky" >
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    </IconButton>
                    <Button color="inherit" component={Link} to="/"   aria-label='home'>
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/stations">
                        Station
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