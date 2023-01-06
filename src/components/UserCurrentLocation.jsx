import React, { useEffect } from 'react';
import { useMap, Marker } from 'react-leaflet';
import PropTypes from 'prop-types';

export default function UserCurrentLocationHelper({ setPosition, position }) {
  const map = useMap();
  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return (position && <Marker position={position} />)
}

UserCurrentLocationHelper.propTypes = {
  setPosition: PropTypes.func,
  position: PropTypes.object
}

UserCurrentLocationHelper.defaultProps = {
  setPosition: () => { },
  position: { lat: 0, lng: 0 }
}
