import axios from 'axios'
import { Station } from '../type'


const baseURL = 'http://localhost:3000/api/station'

export const getStations = async (searchValue: string) => {
    const stations = await axios.get(`${baseURL}?search=${searchValue}`).then(res => res.data)
    return stations
}

export const getByStationID = async (stationId: number) => {
    const station = await axios.get(`${baseURL}/${stationId}`).then(res => res.data);
    return station
}

export const updateStation = async (entry: Station) => {
    const station = await axios.put(`${baseURL}/${entry.id}`).then(res => res.data)
    return station
}

export const addStation = async (newStation: Station) => {
    await axios.post(baseURL, newStation).then(res => res.data)
}

export const deleteStation = async (station: Station) =>
    await axios.delete(`${baseURL}/${station.id}`)
