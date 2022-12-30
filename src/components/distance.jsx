import React, { useEffect, useState } from "react";
import L from "leaflet";
import data from "../data.json";
// import findNearestLocation from "map-nearest-location";
export const distance = () => {
  // this will store locations
  const [location, setLocation] = useState([]);
  // this will store the distance
  const [dist, setDist] = useState([]);

  useEffect(() => {
    // finding the distance between location
    data.sensors.map((venue) =>
      // storing all distance in array
      setDist((current) => [
        ...current,
        // venue.geometry[0], venue.geometry[1]: locations from json files
        L.latLng(73.1467503, 33.5506718).distanceTo(
          L.latLng(venue.geometry[0], venue.geometry[1])
        ) / 1000,
      ])
    );
    //storing the lat and lng in array:dist
    data.sensors.map((venue) =>
      setLocation((current1) => [...current1, venue.geometry[0], venue.geometry[1]])
    );
  }, []);
  return (
    <div>
      {
        // displaying the locations
        dist.map((distances) => {
          let minn=Math.min(...dist);
          // displaying the distances of all locations
          location.map((loctt) => {
            
            // console.log(minn+" iii "+i+" jjj " +j);

            if(minn===distances)
            {
              console.log(" location  "+loctt+"  "+" distance  "+distances);
              return;
            }
          });
        })
      }
    </div>
  );
};
