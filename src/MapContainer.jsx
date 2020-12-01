import { React, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
const MapContainer = () => {

    const [selected, setSelected] = useState({});
    const [ currentPosition, setCurrentPosition ] = useState({});

    const onSelect = item => {
        setSelected(item);
    }

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 34.0522, lng: -118.2436
    }

    const onMarkerDragEnd = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setCurrentPosition({ lat, lng })
    };

    const locations = [
        {
            name: "Location 1",
            location: {
                lat: 41.3954,
                lng: 2.162
            },
        },
        {
            name: "Location 2",
            location: {
                lat: 41.3917,
                lng: 2.1649
            },
        },
        {
            name: "Location 3",
            location: {
                lat: 41.3773,
                lng: 2.1585
            },
        },
        {
            name: "Location 4",
            location: {
                lat: 41.3797,
                lng: 2.1682
            },
        },
        {
            name: "Location 5",
            location: {
                lat: 41.4055,
                lng: 2.1915
            },
        }
    ];

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyAXUpRA6hR-1CGF8Wt53VzJgbeKYBBqm7k'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>
                {
                    currentPosition.lat &&
                        <Marker
                            position={currentPosition}
                            onDragEnd={(e) => onMarkerDragEnd(e)}
                            draggable={true} /> 
                }
                {
                    selected.location &&
                    (
                        <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                        >
                            <p>{selected.name}</p>
                        </InfoWindow>
                    )
                }
            </GoogleMap>
        </LoadScript>
    )
}
export default MapContainer;