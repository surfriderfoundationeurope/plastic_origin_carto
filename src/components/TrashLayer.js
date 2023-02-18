import { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import useFetchData from './FetchData';
import heatmapConfig from '../assets/TrashHeatmapStyle';
import circleConfig from '../assets/TrashCircleStyle';

const TrashLayer = props => {
  const [data, loading] = useFetchData(props.url);

  // ADD LAYERS
  useEffect(() => {
    if (loading || !data || !props.map) return ;

    console.log(data)
  
    if(!props.map.getSource('data')){
      props.map.addSource("data", {
        "type": "geojson",
        "data": data
      });
    } else {
      props.map.getSource('data').setData(data);
    }
  
    if (!props.map.getLayer('heatmap_trash')) {
      props.map.addLayer({
        "id": "heatmap_trash",
        "type": "heatmap",
        "source": "data",
        "maxzoom": 17,
        "paint": heatmapConfig
      });
    }

    if (!props.map.getLayer('circle_trash')) {
      props.map.addLayer({
        "id": "circle_trash",
        "type": "circle",
        "source": "data",
        "minzoom":16,
        "paint": circleConfig
      });
    }

    props.map.on('click', 'circle_trash', (event) => {
      new mapboxgl.Popup()
        .setLngLat(event.features[0].geometry.coordinates)
        .setHTML(`<strong>ID :</strong> ${event.features[0].properties.id}
        <p>Type : ${event.features[0].properties.type_name}<\p>
        <p>Date : ${event.features[0].properties.time}<\p>`)
        .addTo(props.map);
    });

  }, [loading, data, props.map]);

  return null;
};

export default TrashLayer;
