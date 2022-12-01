import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import propTypes from 'prop-types'
import "./status.css";
import * as L from "leaflet";
// import { Icon } from "leaflet";
// import { iconPerson } from "./icons";
export const Mymap = ({ location, mstatus }) => {
  const LeafIcon = L.Icon.extend({
    options: {},
  });
  const redIcon = new LeafIcon({
    iconUrl:
      "http://maps.google.com/mapfiles/kml/paddle/stop.png",
  });
  const greenIcon = new LeafIcon({
    iconUrl:
      "http://maps.google.com/mapfiles/kml/paddle/grn-square.png",
  });


 
  return (
    // to run it without error remove location and status and instead of location put [45.4, -75.7]
    <MapContainer center={location} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      
      <Marker  position={location} icon={mstatus=="true" ? redIcon : greenIcon}>
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
  mstatus: "false"  // this supposed to boolean
}