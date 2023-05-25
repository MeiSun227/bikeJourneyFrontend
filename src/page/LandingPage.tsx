import React, { useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import animationData from '../assets/bikeAnimate.json';


const LandingPage = () => {
    const bikeRef = useRef<LottieRefCurrentProps>(null)

    return (
        <React.Fragment>
            <Container>
                <CssBaseline />
                <Grid container spacing={3} wrap="wrap">
                    <Grid item xs >
                        <Box sx={{ width: '100%', maxWidth: 500 }}>
                            <Typography variant="h4" mt={3} p={5}> Welcome to HSL Bike App </Typography>
                            <Typography variant="body2" p={2} gutterBottom >
                                This app provides access to all HSL Bike stations,
                                including journey records, in the cities of Espoo and Helsinki from 2019 to 2021.
                                You can search for a station or journey based on what you are looking for.
                            </Typography>
                            <Typography variant="body2" p={2} gutterBottom>To build the application, Material UI is used as the UI library,
                                and Modern Web Development Tools are used as the development tools.
                            </Typography>
                            <Stack sx={{ p: 3 }}>
                                <Link to="/stations">
                                    <Button variant="contained" color="success">Begain your journey</Button>
                                </Link>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={6} mt={4}>
                        <Box component="div" sx={{ bgcolor: '#add8e6', borderRadius: 50, height: 400, width: 400 }}>
                            <Lottie onComplete={() => {
                                bikeRef.current?.setSpeed(0)
                                bikeRef.current?.play()
                            }} lottieRef={bikeRef} animationData={animationData} height={400}
                                width={400} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default LandingPage