import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './status.css';
import RoutingControl from './RoutingControl';
import UserCurrentLocation from './UserCurrentLocation';
import ParkingSpots from './ParkingSpots';

export default function MyMap() {
  const [position, setPosition] = useState(null);
  const [target, setTarget] = useState(null);
  const [connectionDone, setConnectionDone] = useState(false);

  return (
    <MapContainer center={[52.52437, 13.41053]} zoom={12} scrollWheelZoom>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <ParkingSpots setTarget={setTarget} setConnectionDone={setConnectionDone} connectionDone={connectionDone} />
      <UserCurrentLocation setPosition={setPosition} position={position} />
      {console.log(connectionDone)}
      {position && target && connectionDone && (
        <RoutingControl
          position="topleft"
          start={[position.lat, position.lng]}
          end={[target.lat, target.lng]}
          color="#2596be"
        />
      )}
    </MapContainer>
  );
}
