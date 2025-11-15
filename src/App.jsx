import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import Layout from './components/layout/Layout';


import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Logs from './pages/Logs';
import ReviewQueue from './pages/ReviewQueue';
import ThreatIntel from './pages/ThreatIntel';
import Blockchain from './pages/Blockchain';
import Settings from './pages/Settings';

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <BrowserRouter>
          <Layout>
            <Routes>


              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/logs" element={<Logs />} />
                 <Route path="/review" element={<ReviewQueue />} />
              <Route path="/threat-intel" element={<ThreatIntel />} />
                 <Route path="/blockchain" element={<Blockchain />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;