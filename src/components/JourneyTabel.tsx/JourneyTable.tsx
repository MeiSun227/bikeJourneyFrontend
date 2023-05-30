import * as React from 'react';
import { useQuery } from 'react-query';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from "@mui/material"
import { getJourney } from '../../services/journeyServices';
import { HeadCell, Journey } from '../../type';


const headCells: readonly HeadCell[] = [
    {
        id: 'departure',

        disablePadding: true,
        label: 'Departure Date',
    },
    {
        id: 'departurestation_name',

        disablePadding: false,
        label: 'Departure Station Name',
    },
    {
        id: 'return',
        disablePadding: false,
        label: 'Return Date',
    },
    {
        id: 'returnstation_name',

        disablePadding: false,
        label: 'Return Station Name',
    },
    {
        id: 'duration',
        disablePadding: false,
        label: 'Duration (s)',
    },
    {
        id: 'covereddistance',
        disablePadding: true,
        label: 'Covered Distance (m)',
    },
];


const JourneyTable = (): JSX.Element => {
    const [queryOptions, setQueryOptions] = React.useState({
        page: 0,
        pageSize: 20,
        search: "",
        sortField: "",
        sortDirection: 'ASC'
    })
    const result = useQuery(['journey', queryOptions], () => getJourney(queryOptions), {
        refetchOnWindowFocus: false,
        refetchInterval: false,
        staleTime: 1000,
    })

    const journeys = result.data?.journeyList as Journey[];
    const rowCount = result.data?.total as number;

    const handleChangePage = (_event: unknown, newPage: number) => {
        setQueryOptions({ ...queryOptions, page: newPage });
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQueryOptions({ ...queryOptions, pageSize: +event.target.value, page: 0 });
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setQueryOptions({ ...queryOptions, search: event.target.value });
    }

    const switchSortDirection = () => {
        return queryOptions.sortDirection === 'ASC' ? 'DESC' : 'ASC'
    }

    const handleSortChange = (headerName: string) => {
        queryOptions.sortField === headerName && queryOptions.sortField !== '' ?
            setQueryOptions({ ...queryOptions, sortField: headerName, sortDirection: switchSortDirection() }) :
            setQueryOptions({ ...queryOptions, sortField: headerName })
    }

    return (
        <TableContainer component={Paper}>
            <div>
                <TextField
                    id="outlined-controlled"
                    label="Search..."
                    value={queryOptions.search}
                    onChange={handleSearchChange}
                    sx={{ p: 1, m: 2, minWidth: 350 }}
                />
            </div>
            {result?.isLoading ?
                <p>loading</p>
                :
                <div>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {headCells.map((header) => (
                                    <TableCell key={header.id} onClick={() => handleSortChange(header.id)}>
                                        {header.label}
                                    </TableCell>))}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {journeys.flatMap((journey) => (
                                <TableRow key={journey.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{journey.departure.toString()}</TableCell>
                                    <TableCell>{journey.departurestation_name}</TableCell>
                                    <TableCell>{journey.return.toString()}</TableCell>
                                    <TableCell>{journey.returnstation_name}</TableCell>
                                    <TableCell>{journey.duration}</TableCell>
                                    <TableCell> {journey.covereddistance}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rowCount}
                        rowsPerPage={queryOptions.pageSize}
                        page={queryOptions.page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            }
        </TableContainer>
    )
}

export default JourneyTable