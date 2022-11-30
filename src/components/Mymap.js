import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import propTypes from 'prop-types'
import "./status.css";
export const Mymap = ({ location, mstatus }) => {
  return (
    // to run it without error remove location and status and instead of location put [45.4, -75.7]
    <MapContainer center={location} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>
          <p>status  {mstatus}.</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
// declear datatype props
Mymap.propTypes={
  location:propTypes.number,
  mstatus:propTypes.string // bugs when this is  in boolean
}
// defaul values for props
Mymap.defaultProps = {
  location: [45.4, -75.7],// default location 
  mstatus: "default-true"  // this supposed to boolean
}