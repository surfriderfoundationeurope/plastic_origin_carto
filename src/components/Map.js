import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Trash from '../old/TrashMarkers';
import TrashLayer from './TrashLayer';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(2.1);
  const [lat, setLat] = useState(46.1);
  const [zoom, setZoom] = useState(5);
  const url ="https://api-dev-plastico.westeurope.cloudapp.azure.com/v1/geojson/-1.05/43.47/-1.0/43.75?entity_type=trash" 

  useEffect(() => {
    if (map.current) return;
    mapboxgl.accessToken = "pk.eyJ1IjoiY2hvc2Vuc291bHMiLCJhIjoiY2s4ZTlteTN4MTQyZTNocXBqdXluM2c2dCJ9.iGBZLUChDBUlCqyOtDeCaw"
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      minZoom: 4,
      pitch:0,
      bearing:0
    });
  }, []);

  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [map]);


  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
      {/* <Trash map={map.current} /> */}
      <TrashLayer url={url} map={map.current} />
    </div>
  );
};

export default Map;