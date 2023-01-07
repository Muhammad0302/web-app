// this component is for to set the routs from one marker t other
import { useRef } from 'react';
import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const createRoutineMachineLayer = ({ position, start, end, color }) => {
  const RoutingMachineRef = useRef(null);
  RoutingMachineRef.current = L.Routing.control({
    
    position,
    waypoints: [
      start,
      end
    ],
    
    lineOptions: {
      styles: [
        {
          color,
          weight: 8,
        },
      ],
     
    },
  });
  return RoutingMachineRef.current;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
