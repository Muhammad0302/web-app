import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import PropTypes from 'prop-types';
import './status.css';
import * as L from 'leaflet';
import data from '../data.json';
import RoutingControl from './RoutingControl';
import icon from './constrains';

export function MyMap(props) {
  const { location, lon, lat } = props

  function LocationMarker() {
    const [position1, setPosition] = useState(null);

    const map = useMap();
    useEffect(() => {
      map.locate().on('locationfound', (e) => {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, [lat]);

    return position1 === null ? null : (
      <Marker position={position1} icon={icon} />
    );
  }

  const LeafIcon = L.Icon.extend({ options: {}, });

  const redIcon = new LeafIcon({ iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/stop.png', });
  const greenIcon = new LeafIcon({ iconUrl: 'http://maps.google.com/mapfiles/kml/paddle/grn-square.png', });

  return (
    <MapContainer center={location} zoom={12} scrollWheelZoom>
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
        position="topleft"
        // 67.005615,24.946218
        start={
          lat != 0
            ? [lat, lon]
            : console.log('start ternery')
        }
        end={[52.527025, 13.446139]}
        color="#2596be"
      />
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
