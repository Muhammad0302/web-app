import * as L from 'leaflet';
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import data from '../data.json';

export default function ParkingSpots({
  setTarget,
  connectionDone,
  setConnectionDone,
}) {
  const LeafIcon = L.Icon.extend({ options: {} });
  const redIcon = new LeafIcon({
    iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/stop.png',
  });
  const greenIcon = new LeafIcon({
    iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/grn-square.png',
  });

  const onClickMarker = (e) => {
    if (connectionDone) {
      console.log('Marker clicked');
      setConnectionDone(false);
    }
  };

  const onDblClickMarker = (e) => {
    console.log('Marker double clicked');

    setTarget(e.latlng);
    setConnectionDone(true);
  };

  return data.sensors.map((sensor) => {
    const { sensorId, geometry, status } = sensor;
    return (
      <Marker
        key={sensorId}
        position={geometry}
        icon={status ? redIcon : greenIcon}
        eventHandlers={{
          click: onClickMarker,
          dblclick: onDblClickMarker,
        }}
      >
        <Popup>{sensorId}</Popup>
      </Marker>
    );
  });
}
