import { useState, useEffect } from 'react';
import { apiClient } from '../api/client';

export const useDojos = () => {
  const [dojos, setDojos] = useState([]);

  useEffect(() => {
    const fetchDojos = async () => {
      const response = await apiClient.get('/dojo');
      setDojos(response.data);
    };

    fetchDojos();
  }, []);

  return { dojos };
};
