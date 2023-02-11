import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import Map from './components/Map';


ReactDOM.render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>,
  document.getElementById('root')
);
