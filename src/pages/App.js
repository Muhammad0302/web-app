import './App.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyMap from '../components/MyMap';

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
      <Link to="/web-app/leds">LEDs Live Demo</Link>
      <div>
        {
          lat && lon && (
            <MyMap
              location={[52.52437, 13.41053]}
              lat={lat}
              lon={lon}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
