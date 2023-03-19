import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './status.css';
import RoutingControl from './RoutingControl';
import UserCurrentLocation from './UserCurrentLocation';
import ParkingSpots from './ParkingSpots';
import Header from './Header';

export default function MyMap() {
  const [userPosition, setUserPosition] = useState(null);
  const [target, setTarget] = useState(null);

  return (
    <>
      <Header />
      <MapContainer center={[52.52437, 13.41053]} zoom={12} scrollWheelZoom>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ParkingSpots setTarget={setTarget} target={target} />
        <UserCurrentLocation
          setPosition={setUserPosition}
          position={userPosition}
        />
        {userPosition && target && (
          <RoutingControl
            position="topleft"
            start={[userPosition.lat, userPosition.lng]}
            end={[target.lat, target.lng]}
            color="#2596be"
          />
        )}
      </MapContainer>
    </>
  );
}
