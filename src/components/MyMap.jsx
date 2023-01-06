import React, { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import './status.css';
import RoutingControl from './RoutingControl';
import UserCurrentLocation from './UserCurrentLocation';
import ParkingSpots from './ParkingSpots';

export default function MyMap() {
  const [position, setPosition] = useState(null);


  return (
    <MapContainer center={[52.52437, 13.41053]} zoom={12} scrollWheelZoom>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <ParkingSpots />
      <UserCurrentLocation setPosition={setPosition} position={position} />
      {position && position.lat && position.lng && (
        <RoutingControl
          position="topleft"
          start={[position.lat, position.lng]}
          end={[52.527025, 13.446139]}
          color="#2596be"
        />
      )}
    </MapContainer>
  );
}
