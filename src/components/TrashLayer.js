import { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import useFetchData from './FetchData';
import heatmapConfig from '../assets/TrashHeatmapStyle';
import circleConfig from '../assets/TrashCircleStyle';
import { getTypeName } from '../assets/TypeId';
import axios from 'axios';

const TrashLayer = props => {
  const [data, loading] = useFetchData(props.url);
  const [campaignData, setCampaignData] = useState(null);


  useEffect(() => {
    if (!data || !props.map)  return ;

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

    props.map.on('click', 'circle_trash', async(event) => {
      console.log(event.properties)
      const typeName = getTypeName(event.features[0].properties.type_id);
      const campaignUrl = 'https://api-dev-plastico.westeurope.cloudapp.azure.com/v1/campaign/' + event.features[0].properties.id_ref_campaign_fk;
      const response = await axios.get(campaignUrl);
      try {
        const dataCampaign = response.data;
        console.log(dataCampaign.start_date);
        console.log(event.features[0]);
        if (event.features && event.features.length > 0) {
          new mapboxgl.Popup()
            .setLngLat(event.features[0].geometry.coordinates)
            .setHTML(`<strong>ID:</strong> ${event.features[0].properties.id}
            <p><strong>Type: </strong>${typeName}</p>
            <p><strong>Date: </strong>${dataCampaign.start_date}</p>
            <p><strong>River: </strong>${event.features[0].properties.river_name}</p>
            `)
            .addTo(props.map);
        }
      } catch (error) {
        console.error(error);
      }
    });
  }, [data, props.map, setCampaignData]); //, loading, props.isMapLoaded]);

  return null;
};

export default TrashLayer;

