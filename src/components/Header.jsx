import React from 'react'
import { Link } from 'react-router-dom'
import './status.css'
import logo from '../assets/parking.svg'

function Header() {
  return (
    <header>
      <div className="Logo">
        <p>SpotTroop</p>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="nav-ul">
          <li className="nav-link">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-link">
            {/* we will be adding correct path sooner just for the time i added "/" */}
            <Link to="/" className="nav-link">
              Business
            </Link>
          </li>
          <li className="nav-link">
            {/* we will be adding correct path sooner just for the time i added "/" */}
            <Link to="/" className="nav-link">
              FaQ
            </Link>
          </li>
          <li className="nav-link">
            {/* we will be adding correct path sooner just for the time i added "/" */}
            <Link to="/" className="nav-link">
              Sign In
            </Link>
          </li>
          {/* {window.location.href == 'http://localhost:3000/web-app' ? (
            <li className="nav-link demo">
              <Link to="/web-app/leds">LEDs Live Demo</Link>
            </li>
          ) : (
            <li className="nav-link demo">
              <Link to="/web-app">MAP Demo</Link>
            </li>
          )} */}
        </ul>
      </nav>
    </header>
  );
}

export default Header
