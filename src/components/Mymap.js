import React, {useState,useEffect} from "react";
import { MapContainer, TileLayer, Marker,useMap } from "react-leaflet";
import propTypes from "prop-types";
import "./status.css";
// import { ReactLeafletWaypoints } from "react-leaflet-waypoints";
import data from "../data.json";
import RoutingControl from './RoutingControl'
import * as L from "leaflet";
import icon from "./constrains";
import Mylocation from "./Mylocation";

// import { Icon } from "leaflet";
// import { iconPerson } from "./icons";
export const Mymap = ({ location, mstatus }) => {
  const [c_lng, setC_lng] = useState(67.005615);
  const [c_lat, setC_lat] = useState(24.946218);
  
  function LocationMarker() {
    const [position1, setPosition] = useState(null);
    
    const map = useMap();
    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        setC_lng(e.latlng.lng);
        setC_lat(e.latlng.lat);
        
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        
      });
    }, [map]);

    return position1 === null ? null : (
      <Marker position={position1} icon={icon}>
        
      </Marker>
    );
    
  }

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
      <MapContainer
        center={location}
        zoom={12}
        scrollWheelZoom={false}
        
      >
        
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker/>
        {data.venues.map((venue, index) => (
          <Marker
            key={index}
            position={venue.geometry}
            icon={venue.mstatus ? redIcon : greenIcon}
          />
        ))}
        ;
        {console.log("  lat "+c_lat+"  lng "+ c_lng)}
        {/* adding routs to our map */}
        <RoutingControl 
          position={'topleft'} 
          start={[c_lat  , c_lng]} 
          end={[ 52.527025, 13.446139]} 
          color={'#2596be'} 
        />
        
      </MapContainer>
    </>
  );
};
// declear datatype props
Mymap.propTypes = {
  location: propTypes.number,
  mstatus: propTypes.bool,
};
// defaul values for props
Mymap.defaultProps = {
  location: [45.4, -75.7], // default location
  mstatus: true,
};
