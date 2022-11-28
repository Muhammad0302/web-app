import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./status.css";
export const Mymap = () => {
  return (
    // to run it without error remove location and status and instead of location put [45.4, -75.7]
    <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[45.4, -75.7]}>
        <Popup>
          status  <br />true.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
