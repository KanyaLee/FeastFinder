import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from "react";

const  MapContainer = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [currentLocation, setcurrentLocation] = useState({
        lat: 40.7605,
        lng: -73.9510
    });

    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             position => {
    //                 const { latitude, longitude } = position.coords;
    //                 setcurrentLocation({lat: latitude, lng:longitude})
    //             },
    //             () => {
    //                 console.log("Error in the geolocation service.");
    //             }
    //         );
    //     }
    // }, []);

    useEffect(()=> {
        fetchRestaurants(currentLocation.lat, currentLocation.lng);
    }, [currentLocation]);

    console.log(currentLocation.lat,currentLocation.lng)

    const fetchRestaurants = async (latitude, longitude) => {
        try {
            const response = await fetch(`/api/restaurants?latitude=${latitude}&longitude=${longitude}`);
            const data = await response.json();
            setRestaurants(data);
        } catch (error) {
            console.log(error);
        }
    };

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    console.log(restaurants)

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={currentLocation}
            >
                {restaurants.map(restaurant => (
                    <Marker
                        key={restaurant.id}
                        position={{
                            lat: restaurant.coordinates.latitude,
                            lng: restaurant.coordinates.longitude
                        }}
                    />
                
                ))}
                

            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;