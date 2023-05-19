import { Box } from '@mui/material';
import * as React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getByStationID } from '../../services/stationServices';

const StationDetail = () => {
    const { stationId } = useParams()
    const station = useQuery(['station', stationId], () => getByStationID(Number(stationId as string)));

  
    if (station.isLoading) {
        return <p>loading</p>
    } 
    const { name, address, city, capacity, count, departureCount, returnCount } = station.data

    return (
        <div>
            <Box>
                <p>Station Name: {name}</p>
                <p>Station Adress: {address}</p>
                <p>City: {city}</p>
                <p>Capacity: {capacity}</p>
                <p>Depature Count:{departureCount}</p>
                <p>Return Count:{returnCount}</p>
                <p>Count: {count}</p>
            </Box>
        </div>
    )
}
export default StationDetail;