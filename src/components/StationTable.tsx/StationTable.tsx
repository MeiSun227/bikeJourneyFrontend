import * as React from 'react';
import { DataGrid, GridColDef, GridEventListener, GridToolbar } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import { getStations } from '../../services/stationServices';
import { Alert, Box, Stack } from '@mui/material';
import { Station } from '../../type';
import { Link } from 'react-router-dom';

const columnsName: GridColDef[] = [
    {
        field: 'name', headerName: 'Station Name', type: 'string', width: 180, renderCell: (params) => (
            <Link to={`/station/${params.row.id}`}>{params.value}</Link>)
    },
    { field: 'address', headerName: 'Address', type: 'string', width: 200 },
    {
        field: 'city', headerName: 'City', type: 'string', width: 120,
        valueGetter: ({ row }) => {
            return row.city === " " ? 'Helsinki' : row.city
        },
    },
    { field: 'operator', headerName: 'Operator', type: 'string', width: 120 },
    { field: 'capacities', headerName: 'Capacities', type: 'number', width: 100 },
]

const StationTable = () => {
    const result = useQuery('station', getStations)
    const [message, setMessage] = React.useState('');

    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        setMessage(`station "${params.row.name}" clicked`);
    };

    if (result.isLoading) {
        return <div>loading data...</div>
    }
    const stations = result.data as Station[]

    return (
        < >
            <Box component="table" mt={3} pt={2}>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <DataGrid columns={columnsName} onRowClick={handleRowClick} rows={stations} slots={{ toolbar: GridToolbar }} />
                    {message && <Alert severity="info">{message}</Alert>}
                </Stack>
            </Box>
        </>
    )
}

export default StationTable