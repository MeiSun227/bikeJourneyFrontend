import axios from 'axios'
import { Station, StationDetail } from '../type'


const baseURL = 'http://localhost:3000/api/station'

export const getStations = () =>
    axios.get<Station[] | null>(baseURL).then(res => res.data)

export const getByStationID = async (stationId: number) => {
    const station = await axios.get(`${baseURL}/${stationId}`).then(res => res.data);
    return station
}