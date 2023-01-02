import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';
import './status.css';
import * as L from 'leaflet';
import data from '../data.json';
import RoutingControl from './RoutingControl';
import UserCurrentLocationMarker from './UserCurrentLocationMarker';

export default function MyMap(props) {
  const { location, lon, lat } = props

  const LeafIcon = L.Icon.extend({ options: {}, });
  const redIcon = new LeafIcon({ iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/stop.png', });
  const greenIcon = new LeafIcon({ iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/grn-square.png', });

  return (
    <MapContainer center={location} zoom={12} scrollWheelZoom>
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
  location: PropTypes.number,
  lon: PropTypes.number,
  lat: PropTypes.number,
};

MyMap.defaultProps = {
  location: [45.4, -75.7], // default location
  lat: 0,
  lon: 0,
};
