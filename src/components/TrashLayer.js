import { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import useFetchData from './FetchData';
import heatmapConfig from '../assets/TrashHeatmapStyle';
import circleConfig from '../assets/TrashCircleStyle';
import { getTypeName } from '../assets/TypeId';

const TrashLayer = props => {
  const [data, loading] = useFetchData(props.url);

  useEffect(() => {
    if (!data || !props.map) // || loading || !props.isMapLoaded) // return ;
    {
      // console.log("waiting as loading = " + loading + ", data = " + data + ", map = " + props.map + " and maploaded = " + props.isMapLoaded);
      return;
    }

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
        "minzoom":13,
        "paint": circleConfig
      });
    }

    props.map.on('click', 'circle_trash', (event) => {
      const typeName = getTypeName(event.features[0].properties.type_id);
      new mapboxgl.Popup()
        .setLngLat(event.features[0].geometry.coordinates)
        .setHTML(`<strong>ID :</strong> ${event.features[0].properties.id}
        <p><strong>Type : </strong>${typeName}</p>
        <p><strong>Date : </strong>${event.features[0].properties.time}</p>
        <p><strong>Rivière : </strong>${event.features[0].properties.river_name}</p>
        `)
        .addTo(props.map);
    });

  }, [data, props.map]); //, loading, props.isMapLoaded]);

  return null;
};

export default TrashLayer;

