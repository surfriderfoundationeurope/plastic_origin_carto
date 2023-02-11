import { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import useFetchData from './FetchData';

const TrashLayer = props => {
  const [zoom, setZoom] = useState(5);
  const [data, loading] = useFetchData(props.url);

  useEffect(() => {
    if (!props.map) return;
    props.map.on('move', () => {
      setZoom(props.map.getZoom().toFixed(2));
    });
  }, [props.map]);

  useEffect(() => {
    if (loading || !data || !props.map) return ;
  
    if(!props.map.getSource('data')){
      props.map.addSource("data", {
        "type": "geojson",
        "data": data
      });
    } else {
      props.map.getSource('data').setData(data);
    }
  
    if (!props.map.getLayer('data')) {
      props.map.addLayer({
        "id": "data",
        "type": "heatmap",
        "source": "data",
        "layout": {
        }
      });
    }
  
/*     if (props.map.getLayer('data')) {
      if (zoom > 15) {
        props.map.setLayoutProperty('data', "type", "circle");
      } else {
        props.map.setLayoutProperty('data', "type", "heatmap");
      }
    } */
  }, [loading, data, zoom, props.map]);
  

  // console.log(zoom)

  return null;
};

export default TrashLayer;
