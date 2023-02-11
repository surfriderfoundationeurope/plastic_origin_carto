import axios from 'axios';
import React, { useRef, useEffect, useState } from 'react';


// const baseURL = 'https://api-dev-plastico.westeurope.cloudapp.azure.com/v1/geojson/-1.05/43.47/-1.0/43.75?entity_type=trash';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(true);
      }
    }
    fetchData();
  }, [url]);

  return [data, loading];
};

export default useFetchData;
