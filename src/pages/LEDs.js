import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import Status from '../components/Status';
import { __API_HOST__ } from '../constants';
import Header from '../components/Header';

function LEDs() {
  const [status1, setStatus1] = useState(true)
  const socket = io.connect(__API_HOST__)

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
      // eslint-disable-next-line no-console
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
      <Header />
      <div>
        {/* <h1> SpotTroop GbR</h1> */}
        <Status status={status1} name="Sensor 1" />
      </div>
    </div>
  );
}

export default LEDs;
