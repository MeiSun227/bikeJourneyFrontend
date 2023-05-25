import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Alert, TextField } from '@mui/material';
import { useMutation, useQueryClient, } from 'react-query';
import { addStation } from '../../services/stationServices';
import { Station } from '../../type';

const StationModal = (): JSX.Element => {
    const queryClient = useQueryClient()
    const newStationMutation = useMutation(addStation, {
        onSuccess: () => {
            queryClient.invalidateQueries('stations')
        },
    })
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [stationForm, setStationForm] = React.useState({
        name: "",
        address: "",
        city: "",
        operator: "",
        capacities: "",
        x: "",
        y: ""
    })
    const [message, setMessage] = React.useState("");

    const handleCreateStation = () => {
        newStationMutation.mutate(stationForm as Station)
        setMessage(`station "${stationForm.name}" created success!`);
        setTimeout(() => {setOpen(false)},1000)
    
    }

    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStationForm({ ...stationForm, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Button onClick={handleOpen} variant='contained' >Add Station</Button>
            <Modal open={open} onClose={handleClose}>
                <Box component="form"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        width: 1200,

                        '& > :not(style)': { m: 1, width: '18ch' },

                    }}>
                    <TextField id="outlined-basic" name="name" label="Name" variant="outlined" onChange={handleFieldChange} />
                    <TextField id="outlined-basic" name="address" label="Address" variant="outlined" onChange={handleFieldChange} />
                    <TextField id="outlined-basic" name="city" label="City" variant="outlined" onChange={handleFieldChange} />
                    <TextField id="outlined-basic" name="operator" label="Operator" variant="outlined" onChange={handleFieldChange} />
                    <TextField id="outlined-basic" name="capacities" label="Capacities" variant="outlined" onChange={handleFieldChange} />
                    {message && <Alert severity="success" color="info">{message}</Alert>}
                    <Button variant="contained" onClick={handleCreateStation} >Add</Button>
                </Box>
            </Modal>
        </div >
    );
}

export default StationModal