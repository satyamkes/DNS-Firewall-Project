import React, { createContext, useContext, useState, useEffect } from 'react';
import { generateLogEntry } from '../utils/mockData';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);
  const [stats, setStats] = useState({
    totalRequests: 0,
    blocked: 0,
    allowed: 0,
    review: 0
  });

  // Simulate real-time data
  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = generateLogEntry();
      setLogs(prev => [newLog, ...prev].slice(0, 200));
      
      setStats(prev => ({
        totalRequests: prev.totalRequests + 1,
        blocked: prev.blocked + (newLog.decision === 'BLOCK' ? 1 : 0),
        allowed: prev.allowed + (newLog.decision === 'ALLOW' ? 1 : 0),
        review: prev.review + (newLog.decision === 'REVIEW' ? 1 : 0)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const blockDomain = (domain) => {
    console.log('Blocking domain:', domain);
    // API call would go here
  };

  const allowDomain = (domain) => {
    console.log('Allowing domain:', domain);
    // API call would go here
  };

  return (
    <DataContext.Provider value={{ logs, stats, blockDomain, allowDomain }}>
      {children}
    </DataContext.Provider>
  );
};