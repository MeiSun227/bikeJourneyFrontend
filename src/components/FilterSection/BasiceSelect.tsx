import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useQuery } from 'react-query';
import { getStations } from '../../services/stationServices';
import { Station } from '../../type';
import { Box } from '@mui/material';


const BasicSelect = () => {
  const [stationName, setStationName] = React.useState<string[]>([])

  const result = useQuery('station', getStations)
  const stationData = result.data as Station[]
  const names = stationData ? stationData.map((station) => <MenuItem
    key={station.FID}
    value={station.name}
  >{station.name}</MenuItem>) : [];

  const handleChange = (event: SelectChangeEvent<typeof stationName>) => {
    const {
      target: { value },
    } = event;
    setStationName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Box>
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel  >Station name</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={stationName}
        label="StationName"
        onChange={handleChange}

      >
        {names}


      </Select>

    </FormControl>
    </Box>
  );
}

export default BasicSelect