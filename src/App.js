import './App.css';
import io from "socket.io-client";
import React, { useEffect, useState } from "react";
import Status from './components/Status';


const server_url = "https://spot-api-heroku.herokuapp.com/";

function App() {
  const [status1, setStatus1] = useState(true)
  const [status2, setStatus2] = useState(false)
  const [status3, setStatus3] = useState(true)
  const socket = io.connect(server_url)

  /**
   * "status_update" event comes with following data:
   * { "sensor_id": "prototype_01", "sensor_status": true }
   * We have three prototypes at the moment.
   */

  useEffect(() => {
    socket.on("status_update", (data) => {
      const { sensor_id, sensor_status } = data

      if (sensor_id === "prototype_01") {
        setStatus1(sensor_status)
      }
      else if (sensor_id === "prototype_02") {
        setStatus2(sensor_status)
      }
      else if (sensor_id === "prototype_03") {
        setStatus3(sensor_status)
      } else {
        console.log("unexpected sensor id")
      }
    });
    // client-side
    socket.on("connect", () => {
      console.log("Connected" + socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.on("disconnect", () => {
      console.log("Disconnected" + socket.id); // undefined
    });
  }, [socket]);

  return (
    <div>
      <div>
        <h1> SpotTroop GbR</h1>
        <Status status1={status1} status2={status2} status3={status3} name1="Sensor 1" name2="Sensor 2" name3="Sensor 3" />

      </div>
    </div>
  );
}

export default App;
