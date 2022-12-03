import "./App.css";
import io from "socket.io-client";
import React, { useEffect, useState } from "react";
import Status from "./components/Status";
import { Mymap } from "./components/Mymap";
const server_url = "https://spot-api-heroku.herokuapp.com/";

function App() {
  // TODO: change these status to contain location information
  const [status1, setStatus1] = useState({
    location:[33.6844, 73.0479],
    mstatus:1
  });
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(true);
  const socket = io.connect(server_url);

  /**
   * "status_update" event comes with following data:
   * { "sensor_id": "prototype_01", "sensor_status": true }
   * We have three prototypes at the moment.
   */

  useEffect(() => {
    socket.on("status_update", (data) => {
      let { sensor_id, sensor_status } = data;
      if (typeof sensor_status == "string") {
        sensor_status = sensor_status === "true";
      }
      console.log(data);
      if (sensor_id === "prototype_01") {
        setStatus1(sensor_status);
      } else if (sensor_id === "prototype_02") {
        setStatus2(sensor_status);
      } else if (sensor_id === "prototype_03") {
        setStatus3(sensor_status);
      } else {
        console.log("unexpected sensor id");
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
      <Mymap location={status1.location} mstatus={status1.mstatus}/>
      <div>
        <h1> SpotTroop GbR</h1>
        <table>
          <tr>
            <th>Sensor ID</th>
            <th>Status</th>
          </tr>

          <tr>
            <Status status={status1.status1} name="Sensor 1" />
          </tr>
          <tr>
            <Status status={status2} name="Sensor 2" />
          </tr>
          <tr>
            <Status status={status3} name="Sensor 3" />
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
