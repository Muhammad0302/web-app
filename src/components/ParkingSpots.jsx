import * as L from 'leaflet';
import { Marker } from 'react-leaflet';
import data from '../data.json';
import React from 'react'


export default function ParkingSpots() {
  const LeafIcon = L.Icon.extend({ options: {}, });
  const redIcon = new LeafIcon({ iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/stop.png', });
  const greenIcon = new LeafIcon({ iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/grn-square.png', });

  return data.sensors.map(sensor => {
    const { sensorId, geometry, status } = sensor;
    return (
      <Marker
        key={sensorId}
        position={geometry}
        icon={status ? redIcon : greenIcon}
      />
    );
  });
}
