import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import propTypes from "prop-types";
import "./status.css";
// import LatLon from "./LatLon";
// import { ReactLeafletWaypoints } from "react-leaflet-waypoints";
import data from "../data.json";
import RoutingControl from "./RoutingControl";
import * as L from "leaflet";
import icon from "./constrains";
// import Mylocation from "./Mylocation";

// import { Icon } from "leaflet";
// import { iconPerson } from "./icons";
export const Mymap = (props) => {
  console.log(props);
  // const [c_lng, setC_lng] = useState(67.005615);
  // const [c_lat, setC_lat] = useState(24.946218);
  

  function LocationMarker() {
    const [position1, setPosition] = useState(null);

    const map = useMap();
    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        // setC_lat(e.latlng.lat);
        // c_lat.current=e.latlng.lat;
        // setC_lat(e.latlng.lat);
        // setC_lng(e.latlng.lng);
          
       
      });
    }, [props.lat]);
    
   
    return position1 === null ? null : (
      <Marker position={position1} icon={icon}></Marker>
    );
  }
  // function a(){
  //   console.log("a function ")
  // }

  const LeafIcon = L.Icon.extend({
    options: {},
  });
  // icons or Marker
  const redIcon = new LeafIcon({
    iconUrl: "http://maps.google.com/mapfiles/kml/paddle/stop.png",
  });
  const greenIcon = new LeafIcon({
    iconUrl: "http://maps.google.com/mapfiles/kml/paddle/grn-square.png",
  });
 
  return (
    
    <>
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
        ;{console.log("  lat1 "+ props.lon + "  lng1 " + props.lat+" status1 "+props.mstatus)}
        {/* adding routs to our map */}
        <RoutingControl
          position={"topleft"}
          // 67.005615,24.946218
          start={
            [
              props.lat!=0?[props.lat,props.lon]:console.log("start ternery")
            ]
          }
          // start={props.lon!=73.1467503?()=>a():[props.lat,props.lon]}
          end={[52.527025, 13.446139]}
          color={"#2596be"}
        />
      </MapContainer>
      
    </>
  );
};
// declear datatype props
Mymap.propTypes = {
  location: propTypes.number,
  mstatus: propTypes.number,
  lon:propTypes.number,
  lat:propTypes.number
};
// defaul values for props
Mymap.defaultProps = {
  location: [45.4, -75.7], // default location
  mstatus: 12,
  lat:0,
  lon:0
};
