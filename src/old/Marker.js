import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Marker = ({title, description, lng, lat, map }) => {
  useEffect(() => {
    if (!map) return;

    const marker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<h3>${title}</h3><p>${description}</p>`
          )
      )
    return () => marker.remove();
  }, [title, description, lng, lat, map]);

  return null;
};

export default Marker;
