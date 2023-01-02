import React, { useEffect, useState } from 'react';
import { Marker, useMap } from 'react-leaflet';
import icon from './constrains';

export default function UserCurrentLocationMarker() {
  const [position1, setPosition] = useState(null);

  const map = useMap();
  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  });

  return position1 === null ? null : (
    <Marker position={position1} icon={icon} />
  );
}
