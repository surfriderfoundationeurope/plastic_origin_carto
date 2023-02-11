import { useState, useEffect } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';

const Trash = props => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseURL = 'https://api-dev-plastico.westeurope.cloudapp.azure.com/v1/geojson/-1.0001/43.47/-1.0/43.7001?entity_type=trash';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(true);
      }
    }
    fetchData();
  }, []);


  useEffect(() => {
    if (loading || !data || !props.map) return;
    console.log("Loading markers")
    const markers = data.features.map((feature) => {
      const key = feature.properties.id;
      const title = feature.properties.id;
      const description = feature.properties.type_name;
      const lng = feature.geometry.coordinates[0];
      const lat = feature.geometry.coordinates[1];
      const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(props.map)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(
              `<h3>${title}</h3><p>${description}</p>`
            )
        );
  
      return () => marker.remove();
    }, []);
  
    return () => markers.forEach(cleanupFn => cleanupFn());
  });  

  return null;
};

export default Trash;
