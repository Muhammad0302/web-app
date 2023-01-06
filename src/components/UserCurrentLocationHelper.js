import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import PropTypes from 'prop-types';

export default function UserCurrentLocationHelper({ setPosition }) {
  const map = useMap();
  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      setPosition(e.latlng);
    });
  }, [map]);

  return null
}

UserCurrentLocationHelper.propTypes = {
  setPosition: PropTypes.func
}

UserCurrentLocationHelper.defaultProps = {
  setPosition: () => { }
}
