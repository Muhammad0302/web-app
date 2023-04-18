import * as L from 'leaflet';
import React, { useEffect, useState } from 'react';
import { Marker } from 'react-leaflet';
import { __API_HOST__ } from '../constants';

export default function ParkingSpots({ setTarget, target }) {
  const LeafIcon = L.Icon.extend({ options: {} });
  const redIcon = new LeafIcon({
    iconUrl: 'https://maps.google.com/mapfiles/kml/paddle/stop.png',
    iconSize: [64, 64],
    iconAnchor: [32, 64]
  });
  const greenIcon = new LeafIcon({
    iconUrl: 'https://maps.google.com/mapfiles/kml/paddle/grn-square.png',
    iconSize: [64, 64],
    iconAnchor: [32, 64]
  });

  const [sensors, setSensors] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Get all sensor api called after 10 seconds ');
      fetch(`${__API_HOST__}/sensor/getAllSensors`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then(data => {
          setSensors(data);
        })
        .catch(error => {
          console.error('Error retrieving sensor data:', error);
        });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    sensors &&
    sensors.map(sensor => {
      const { sensorId, location, status } = sensor;

      return (
        <Marker
          key={sensorId}
          position={[location.coordinates[0], location.coordinates[1]]}
          icon={status == 'inactive' ? redIcon : greenIcon}
          eventHandlers={{
            click: () => {
              if (target) {
                console.log(`SensorId ${sensorId}`);
                setTarget(null);
              }
            },
            dblclick: e => {
              setTarget(e.latlng);
            }
          }}
        />
      );
    })
  );
}
