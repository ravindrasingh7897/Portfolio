'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './loading-screen';

const ClientWrapper = ({ children }) => {
  const [showLoading, setShowLoading] = useState(false); 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const hasVisited = sessionStorage.getItem('portfolio-visited');
    
    if (!hasVisited) {
      setShowLoading(true);
      
      const timer = setTimeout(() => {
        sessionStorage.setItem('portfolio-visited', 'true');
        setShowLoading(false);
      }, 4000); 

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isClient) {
    return <>{children}</>;
  }

  if (showLoading) {
    return <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />;
  }

  return <>{children}</>;
};

export default ClientWrapper;
