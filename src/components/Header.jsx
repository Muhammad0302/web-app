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
            {/* we will be adding correct path sooner just for the time i added "/" */}
            <Link to="/" className="nav-link">
              FAQ
            </Link>
          </li>
          <li className="nav-link">
            {/* we will be adding correct path sooner just for the time i added "/" */}
            <Link to="/" className="nav-link">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
