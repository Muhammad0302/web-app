import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Status from '../components/Status';

const serverUrl = 'https://api.spottroop.com/';

function LEDs() {
  const [status1, setStatus1] = useState(true)
  const socket = io.connect(serverUrl)

  /**
   * "status_update" event comes with following data:
   * { "sensor_id": "prototype_01", "sensor_status": true }
   * We have three prototypes at the moment.
   */

  useEffect(() => {
    socket.on('status_update', (data) => {
      // eslint-disable-next-line camelcase
      const { sensor_id, sensor_status } = data
      // eslint-disable-next-line camelcase
      const sensorId = sensor_id
      // eslint-disable-next-line camelcase
      let sensorStatus = sensor_status

      if (typeof (sensorStatus) == 'string') {
        sensorStatus = sensorStatus === 'true'
      }
      console.log(data)

      if (sensorId === 'prototype_01') {
        setStatus1(sensorStatus)
      } else {
        // eslint-disable-next-line no-console
        console.log('unexpected sensor id')
      }
    });
    // client-side
    socket.on('connect', () => {
      // eslint-disable-next-line no-console
      console.log(`Connected${socket.id}`);
    });

    socket.on('disconnect', () => {
      // eslint-disable-next-line no-console
      console.log(`Disconnected${socket.id}`); // undefined
    });
  }, [socket]);

  return (
    <div>
      <div>
        <h1> SpotTroop GbR</h1>
        <Link to="/web-app">MAP Demo</Link>
        <table>
          <tr>
            <th>Sensor ID</th>
            <th>Status</th>
          </tr>
          <tr> 
            <Status status={status1} name="Sensor 1" />
          </tr>
        </table>
      </div>
    </div>
  );
}

export default LEDs;
