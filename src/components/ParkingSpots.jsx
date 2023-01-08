import * as L from 'leaflet';
import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import _ from 'lodash';
import io from 'socket.io-client';
import { __API_HOST__, __API_WEBSOCKET__ } from '../constants'

export default function ParkingSpots({ setTarget }) {
  const LeafIcon = L.Icon.extend({ options: {}, });
  const redIcon = new LeafIcon({ iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/stop.png', });
  const greenIcon = new LeafIcon({ iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/grn-square.png', });

  const [sensors, setSensors] = useState(null)
  const socket = io.connect(__API_HOST__)

  useEffect(() => {
    fetch(__API_HOST__ + '/v001/spots')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data => {
        setSensors(data)
      })
  }, [])

  useEffect(() => {
    // {location: {lat: 52.500772, lng: 13.472764}, sensorId: "sensor_01", status: true}
    socket.on('v001_status_update', (data) => {
      const { sensorId, status } = data

      if (sensors) {
        const newSensors = _.cloneDeep(sensors)
        const index = newSensors.findIndex(sensor => sensor.sensorId == sensorId)
        if (newSensors[index].status != status) {
          newSensors[index].status = status
          setSensors(newSensors)
        }
      }
    });

    socket.on('connect', () => {
      console.log(`Connected${socket.id}`);
    });

    socket.on('disconnect', () => {
      console.log(`Disconnected${socket.id}`); // undefined
    });
  }, [socket]);

  return sensors && sensors.map(sensor => {
    const { sensorId, location, status } = sensor;
    return (
      <Marker
        key={sensorId}
        position={[location.lat, location.lng]}
        icon={status ? redIcon : greenIcon}
        eventHandlers={{
          click: e => { },
          dblclick: e => { setTarget(e.latlng) },
        }}
      >
        <Popup>
          {sensorId}
        </Popup>
      </Marker>
    );
  });
}
