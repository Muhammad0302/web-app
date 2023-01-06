import React,{useEffect,useState} from 'react';
import { MapContainer, Marker, TileLayer ,useMap} from 'react-leaflet';
import PropTypes from 'prop-types';
import './status.css';
import * as L from 'leaflet';
import data from '../data.json';
import icon from './constrains';
import RoutingControl from './RoutingControl';


export default function MyMap() {
  // const { location, lon, lat } = props
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [position1, setPosition] = useState(null);

function UserCurrentLocationMarker()
 {
    const map = useMap();
    useEffect(() => {
      map.locate().on("locationfound",
      function (e) {
       setPosition(e.latlng);
       setLat(e.latlng.lat);
       setLon(e.latlng.lng);
       map.flyTo(e.latlng, map.getZoom());
      });
    }, [lat]);
    return position1 === null ? null : (
      <Marker position={position1} icon={icon}></Marker>
    );
  }


  const LeafIcon = L.Icon.extend({ options: {}, });
  const redIcon = new LeafIcon({ iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/stop.png', });
  const greenIcon = new LeafIcon({ iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/grn-square.png', });

  return (
    <MapContainer center={[52.52437, 13.41053]} zoom={12} scrollWheelZoom>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <UserCurrentLocationMarker />
      {data.sensors.map(sensor => {
        const { sensorId, geometry, status } = sensor
        return (
          <Marker
            key={sensorId}
            position={geometry}
            icon={status ? redIcon : greenIcon}
          />
        )
      })}
      {lat && lon &&
      (
        <RoutingControl
          position="topleft"
          start={[lat, lon]}
          end={[52.527025, 13.446139]}
          color="#2596be"
        />
      )}
    </MapContainer>
  );
}

MyMap.propTypes = {
  lon: PropTypes.number,
  lat: PropTypes.number,
};

MyMap.defaultProps = {
  lat: 0,
  lon: 0,
};
