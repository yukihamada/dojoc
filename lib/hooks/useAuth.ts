import { useState, useEffect } from 'react';
import { auth0Client } from '../auth0/client';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await auth0Client.isAuthenticated();
      setIsAuthenticated(isAuthenticated);
    };

    checkAuth();
  }, []);

  return { isAuthenticated };
};
