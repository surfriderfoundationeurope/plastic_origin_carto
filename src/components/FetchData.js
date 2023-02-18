import axios from 'axios';
import React, { useRef, useEffect, useState } from 'react';

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
