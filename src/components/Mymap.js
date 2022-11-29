import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from 'prop-types'
import "./status.css";
export const Mymap = ({location, status}) => {
  return (
    // to run it without error remove location and status and instead of location put [45.4, -75.7]
    <MapContainer center={location} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>
          status  <br />{status}.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
Mymap.prototype={
  location:PropTypes.number,
  status:PropTypes.bool
}
Mymap.defaultProps = {
  location: [45.4, -75.7],
  status: true
}