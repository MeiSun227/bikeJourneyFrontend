import axios from 'axios'
import { JourneyQueryOptions } from '../type'

const baseURL = 'http://localhost:3000/api/journey'

export const getJourney =async (queryOptions: JourneyQueryOptions) =>{
    const searchValue = queryOptions?.search
    const sortField = queryOptions.sortField ? `&sortField=${queryOptions.sortField}` : ''
    const sortDirection = queryOptions.sortDirection ? `&sortDirection=${queryOptions.sortDirection}` : ''
    const sort = `${sortField}${sortDirection}`
    return await axios.get(`${baseURL}?pagenumber=${queryOptions.page}&pagesize=${queryOptions.pageSize}&search=${searchValue}${sort}`).then(res => res.data)
}