import { useState, useEffect } from 'react';
import axios from 'axios';
const baseURL = 'https://api-dev-plastico.westeurope.cloudapp.azure.com/v1/geojson/-2.0/43.0/-1.0/44.0?entity_type=trash';

const TrashData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(baseURL);
          setData(response.data);
          setLoading(false);
          console.log(JSON.stringify(data))
        } catch (error) {
          console.error(error);
          setLoading(true);
        }
      };
    
      fetchData();
    }, []);

    return (
        <div>
            {loading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
        </div>
    );
};

export default TrashData;
