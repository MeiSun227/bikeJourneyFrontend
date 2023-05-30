import { Container, CssBaseline, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import * as React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getByStationID } from '../../services/stationServices';
import BikeMap from '../Maps/BikeMap';

const StationDetail = () => {
    const { stationId } = useParams()
    const station = useQuery(['station', stationId], () => getByStationID(Number(stationId as string)));
   
    if (station.isLoading) {
        return <p>loading</p>
    }

    const lat = +station.data.y
    const lng = +station.data.x
    const { name, address, city, capacity, count, departureCount, returnCount } = station.data

    return (
        <div>
            <Container>
                <Typography variant='h4' align='center'>{name}</Typography>
                <TableContainer >
                    <Table size="small" sx={{border:0.4, padding:2}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Information</TableCell>
                                <TableCell>Details</TableCell>
                                <CssBaseline />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><Typography color="text.secondary"> Station name </Typography> </TableCell>
                                <TableCell><Typography color="text.secondary">{name}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography color="text.secondary"> Address {city}</Typography></TableCell>
                                <TableCell><Typography color="text.secondary">{address}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography color="text.secondary"> City </Typography></TableCell>
                                <TableCell><Typography color="text.secondary">{city}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography color="text.secondary"> Capacity </Typography></TableCell>
                                <TableCell><Typography color="text.secondary"> {capacity}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography color="text.secondary"> Depatured Count:</Typography></TableCell>
                                <TableCell><Typography color="text.secondary">{departureCount}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography color="text.secondary">Returned Count:</Typography></TableCell>
                                <TableCell><Typography color="text.secondary">{returnCount}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography color="text.secondary">Count:</Typography></TableCell>
                                <TableCell><Typography color="text.secondary">{count}</Typography></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <div>
                    <BikeMap x={lng} y={lat} />
                </div>
            </Container>
        </div>
    )
}
export default StationDetail;