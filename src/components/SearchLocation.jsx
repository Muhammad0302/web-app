import { useMap } from 'react-leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'
import PropTypes from 'prop-types';
import './status.css';

import { useEffect } from 'react';
// make new leaflet element

export default function SearchLocation(props) {
  const map = useMap(); // access to leaflet map
  const { provider } = props;

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider,
      style: 'search-control',
    });

    map.addControl(searchControl); // this is how you add a control in vanilla leaflet
    return () => map.removeControl(searchControl);
  }, [props]);

  return null; // don't want anything to show up from this comp
}
SearchLocation.propTypes = {
  provider: PropTypes.object,
}

SearchLocation.defaultProps = {
  provider: new OpenStreetMapProvider(),
}
