import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useState, useEffect } from "react";

const  MapContainer = () => {
    const [currentLocation, setcurrentLocation] = useState({
        lat: -1.2884,
        lng: 36.8233
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setcurrentLocation({lat: latitude, lng:longitude})
                },
                () => {
                    console.log("Error in the geolocation service.");
                }
            );
        }
    }, []);

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };
    console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={currentLocation}
            >


            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;