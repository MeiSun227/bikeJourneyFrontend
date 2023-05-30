import * as React from 'react';
import { useQuery } from 'react-query';
import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TextField } from "@mui/material"
import Grid from '@mui/material/Grid';
import { HeadCell, Station } from '../../type';
import { getStations } from '../../services/stationServices';
import StationModal from '../StationModal/StationModal';

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        disablePadding: true,
        label: 'Station Name',
    },
    {
        id: 'address',
        disablePadding: false,
        label: 'Address',
    },
    {
        id: 'city',
        disablePadding: false,
        label: 'City',
    },
    {
        id: 'operator',
        disablePadding: false,
        label: 'Operator',
    },
    {
        id: 'capacities',
        disablePadding: false,
        label: 'Capacities',
    }
];

const StationTable = () => {
    const [search, setSearch] = React.useState(" ");
    const result = useQuery(['stations', search], () => getStations(search), {

        refetchOnWindowFocus: false,
    })

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        console.log('kala')
        console.log(event.target.value)
        setSearch(event.target.value);
    }

    const stations = result?.data as Station[]

    return (
        <TableContainer component={Paper}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField
                        id="outlined-controlled"
                        label="Search..."
                        sx={{ minWidth: 350, m: 2 , padding:1}}
                        value={search}
                        onChange={handleSearchChange}
                    />
                </Grid>
                <Grid item xs={4} sx={{ marginTop: 3 }} >
                    <StationModal />
                </Grid>
            </Grid>
            {result?.isLoading ?
                <p>loading</p>
                :
                <div>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {headCells.map((header) => (
                                    <TableCell key={header.id} >
                                        {header.label}
                                        <TableSortLabel>
                                        </TableSortLabel>
                                    </TableCell>))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {stations.map((station) => (

                                <TableRow key={station.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell >  <Link href={`station/${station.id}`}>{station.name} </Link></TableCell>
                                    <TableCell>{station.address}</TableCell>
                                    <TableCell>{station.city}</TableCell>
                                    <TableCell>{station.operator}</TableCell>
                                    <TableCell align='center'>{station.capacities}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            }
        </TableContainer>
    )
}

export default StationTable;