import React from 'react';
import { useState } from 'react';
import './App.css';
import ReactMap from 'react-map-gl';


function App() {

  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longtitude: -122.4376,
    zoom: 8
  })
  return (
    <div className="App">
      <ReactMap
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={nextViewport => setViewport(nextViewport)}
      />
     

    </div>
  );
}

export default App;
