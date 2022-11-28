import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "./status.css";
export const Mymap = () => {
  return (
    <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
     
    </MapContainer>
  );
};
