import React, { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import './status.css';
import * as L from 'leaflet';
import data from '../data.json';
import RoutingControl from './RoutingControl';
import UserCurrentLocationHelper from './UserCurrentLocationHelper';

export default function MyMap() {
  const [position, setPosition] = useState(null);

  const LeafIcon = L.Icon.extend({ options: {}, });
  const redIcon = new LeafIcon({ iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/stop.png', });
  const greenIcon = new LeafIcon({ iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/grn-square.png', });

  return (
    <MapContainer center={[52.52437, 13.41053]} zoom={12} scrollWheelZoom>
      <UserCurrentLocationHelper setPosition={setPosition} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.sensors.map(sensor => {
        const { sensorId, geometry, status } = sensor
        return (
          <Marker
            key={sensorId}
            position={geometry}
            icon={status ? redIcon : greenIcon}
          />
        )
      })}
      {position &&
        <Marker position={position} />}
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
