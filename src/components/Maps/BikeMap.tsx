import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import {Location} from '../../type'
import './map.css'

const BikeMap = ({ x, y }: Location) => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey:'AIzaSyAzr0NP-50GgP0665Qj_1_stJOIWD1YKqA'})

    if (!isLoaded) {
        return <p>loading</p>
    }

    return (
        <GoogleMap zoom={18} center={{ lat: y, lng: x }} mapContainerClassName="map-container">map
            <Marker position={{ lat: y, lng: x }} />
        </GoogleMap>
    )
}

export default BikeMap;