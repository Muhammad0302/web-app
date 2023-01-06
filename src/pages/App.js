import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import MyMap from '../components/MyMap';

function App() {
  return (
    <div>
      <Link to="/web-app/leds">LEDs Live Demo</Link>
      <MyMap />
    </div>
  );
}

export default App;
