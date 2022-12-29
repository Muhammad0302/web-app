import "./App.css";
import React, { useEffect, useState } from "react";
import { Mymap } from "./components/Mymap";

function App() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((postion) => {
      setLat(postion.coords.latitude);
      setLon(postion.coords.longitude);
    });
  }, []);


  return (
    <div>
      {
        lat && lon &&
        <Mymap
          location={[52.52437, 13.41053]}
          mstatus={true}
          lat={lat}
          lon={lon}
        />
      }
    </div>
  );
}

export default App;
