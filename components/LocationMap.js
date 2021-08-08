import React from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import { useState } from 'react';
import { getCenter, getDistance } from 'geolib';
import { StarIcon } from '@heroicons/react/solid';

function LocationMap({ searchResults }) {

  const [selectedLocation, setSelectedLocation] = useState({});

  const navControlStyle = {
    right: 15,
    top: 12
  };

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }));

  console.log(selectedLocation);


  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  });

  return (<ReactMapGL
    mapStyle="mapbox://styles/mackongo/cks0zn6ro46ce17pea52v825n"
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}>
    <NavigationControl
      className="text-red-400"
      style={navControlStyle} />

    {searchResults.map((result) => (
      <div
        key={result.long}>
        <Marker
          longitude={result.long}
          latitude={result.lat}
          offsetLeft={-20}
          offsetTop={-10}>

          <p
            role="img"
            onClick={() => setSelectedLocation(result)}
            className="cursor-pointer text-2xl animate-bounce"
            arial-label="push-pin"
          >
            📍
          </p>

        </Marker>

        {selectedLocation.long === result.long ? (
          <Popup
            className="rounded-full"
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
          >

            <h1 className="text-sm text-red-400 mr-4">{result.title}</h1>
            <div className="flex justify-between mr-4">
              <h5 className="text-sm font-extralight">{result.price}</h5>
              <div className="flex">
                <StarIcon
                  className="text-red-400 text-center"
                  width={20}
                  height={20} />
                <h5 className="text-sm font-semibold">{result.star}</h5>
              </div>

            </div>


          </Popup>
        ) : (
            false
          )}
      </div>
    ))}

  </ReactMapGL>
  );
}

export default LocationMap;
