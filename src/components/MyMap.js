import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import propTypes from "prop-types";
import "./status.css";
import data from "../data.json";
import RoutingControl from "./RoutingControl";
import * as L from "leaflet";
import icon from "./constrains";

export const MyMap = (props) => {
  function LocationMarker() {
    const [position1, setPosition] = useState(null);

    const map = useMap();
    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, [props.lat]);

    return position1 === null ? null : (
      <Marker position={position1} icon={icon}></Marker>
    );
  }

  const LeafIcon = L.Icon.extend({
    options: {},
  });
  const redIcon = new LeafIcon({
    iconUrl: "http://maps.google.com/mapfiles/kml/paddle/stop.png",
  });
  const greenIcon = new LeafIcon({
    iconUrl: "http://maps.google.com/mapfiles/kml/paddle/grn-square.png",
  });

  return (
    <MapContainer center={props.location} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
      {data.venues.map((venue, index) => (
        <Marker
          key={index}
          position={venue.geometry}
          icon={venue.mstatus ? redIcon : greenIcon}
        />
      ))}
        ;
      <RoutingControl
        position={"topleft"}
        // 67.005615,24.946218
        start={
          props.lat != 0
            ? [props.lat, props.lon]
            : console.log("start ternery")
        }
        // start={props.lon!=73.1467503?()=>a():[props.lat,props.lon]}
        end={[52.527025, 13.446139]}
        color={"#2596be"}
      />
    </MapContainer>
  );
};

MyMap.propTypes = {
  location: propTypes.number,
  mstatus: propTypes.number,
  lon: propTypes.number,
  lat: propTypes.number,
};

MyMap.defaultProps = {
  location: [45.4, -75.7], // default location
  mstatus: 12,
  lat: 0,
  lon: 0,
};
