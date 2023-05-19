import * as React from 'react';
import { Container, Grid } from '@mui/material';
import StationTable from '../../components/StationTable.tsx/StationTable';



const StationPage = () => {
    return (
        <Container>
        <Grid container spacing={2}>
            
            <Grid item xs={8}>
                 <StationTable />
            </Grid>

        </Grid>
        </Container>
    )

}

export default StationPage