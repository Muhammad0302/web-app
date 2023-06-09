// this component is for to set the routs from one marker t other
// https://javascript.plainenglish.io/how-to-create-a-react-leaflet-
// control-component-with-leaflet-routing-machine-8eef98259f20
import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const createRoutineMachineLayer = ({ position, start, end, color }) => {
  const instance = L.Routing.control({
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
    createMarker() { return null; },
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
