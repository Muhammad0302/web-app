import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
import React, { useEffect, useState } from "react";
import Status1 from './components/Status1';


const server_url = "http://192.168.178.150:3001";


function App() {
  const [status1, setStatus1] = useState(false)
  const [status2, setStatus2] = useState(false)
  const [status3, setStatus3] = useState(false)
  const [url, setUrl] = useState(true)
  const socket = io.connect(server_url);

  /**
   * "status_update" event comes with following data:
   * { "sensor_id": "prototype_01", "sensor_status": true }
   * We have three prototypes at the moment.
   */

  useEffect(() => {
    socket.on("status_update", (data) => {
      const { sensor_id, sensor_status } = data
      const status = sensor_status != "false"

      if (sensor_id === "prototype_01") {
        setStatus1(status)
      }
      else if (sensor_id === "prototype_02") {
        setStatus2(status)
      }
      else if (sensor_id === "prototype_03") {
        setStatus3(status)
      } else {
        console.log("unexpected sensor id")
      }
    });
    // client-side
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.on("disconnect", () => {
      console.log(socket.id); // undefined
    });
  }, [socket]);

  return (
    <div>
      <div>
        <h1> Status</h1>
         <Status1 status={status1}/> 
        
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
