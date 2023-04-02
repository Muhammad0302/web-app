import React from 'react'
import './status.css'
import logo from '../assets/parking.svg'

function Header() {
  return (
    <header>
      <div className="Logo">
        <p>SpotTroop</p>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}

export default Header
