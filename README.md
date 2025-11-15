# Smart DNS Firewall - Frontend

## Project Overview

A modern React-based dashboard for the Smart DNS Firewall with Machine Learning. Features real-time DNS monitoring, threat intelligence, blockchain logging, and comprehensive analytics.

## ✨ Features

- **Real-time Dashboard** - Live DNS request monitoring
- **Analytics** - ML confidence distribution, device analytics
- **Logs Viewer** - Searchable, filterable DNS query logs
- **Review Queue** - Manual review for uncertain domains
- **Threat Intelligence** - Real-time global threat feeds
- **Blockchain Logging** - Tamper-proof audit trail
- **Dark Mode** - Full dark theme support
- **Settings** - Customizable ML sensitivity and thresholds

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# 1. Create React app
npx create-react-app dns-firewall-frontend
cd dns-firewall-frontend
# 2. Install dependencies
npm install recharts lucide-react react-router-dom
# 3. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# 4. Copy all project files into src/ folder
# (Use the artifacts provided)
# 5. Run the application
npm start
```

### Project Structure

```
dns-firewall-frontend/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   ├── layout/          # Header, Sidebar, Layout
│   │   └── dashboard/       # Dashboard-specific components
│   ├── pages/               # All route pages
│   ├── context/             # React Context (Theme, Data)
│   ├── utils/               # Helper functions, constants
│   ├── App.jsx              # Main app with routing
│   ├── index.jsx            # Entry point
│   └── index.css            # Global styles
├── package.json
├── tailwind.config.js
└── README.md
```

## File Checklist

Make sure you have all these files:

### ✅ Configuration Files
- [ ] `package.json`
- [ ] `tailwind.config.js`

### ✅ Context & Utils
- [ ] `src/context/ThemeContext.jsx`
- [ ] `src/context/DataContext.jsx`
- [ ] `src/utils/mockData.js`
- [ ] `src/utils/constants.js`

### ✅ Common Components
- [ ] `src/components/common/Button.jsx`
- [ ] `src/components/common/Card.jsx`

### ✅ Layout Components
- [ ] `src/components/layout/Header.jsx`
- [ ] `src/components/layout/Sidebar.jsx`
- [ ] `src/components/layout/Layout.jsx`

### ✅ Dashboard Components
- [ ] `src/components/dashboard/StatsCard.jsx`

### ✅ Pages
- [ ] `src/pages/Dashboard.jsx`
- [ ] `src/pages/Analytics.jsx`
- [ ] `src/pages/Logs.jsx`
- [ ] `src/pages/ReviewQueue.jsx`
- [ ] `src/pages/ThreatIntel.jsx`
- [ ] `src/pages/Blockchain.jsx`
- [ ] `src/pages/Settings.jsx`

### ✅ Core Files
- [ ] `src/App.jsx`
- [ ] `src/index.jsx`
- [ ] `src/index.css`

## Tailwind Configuration

Update your `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
```

## Key Changes Needed in App.jsx

The new `App.jsx` structure:

```javascript
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import Layout from './components/layout/Layout';

// Import all pages
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
```

## Backend Integration (Future)

Currently uses mock data. To connect to your backend:

1. Create `src/services/api.js`:

```javascript
const API_BASE = 'http://localhost:5000/api';

export const fetchLogs = async () => {
  const response = await fetch(`${API_BASE}/logs`);
  return response.json();
};

export const blockDomain = async (domain) => {
  await fetch(`${API_BASE}/block`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ domain })
  });
};
```

2. Update `DataContext.jsx` to use real API calls instead of mock data

## Features Breakdown

### 1. Dashboard
- Real-time stats cards
- Live DNS request stream
- Threat activity chart
- Decision distribution

### 2. Analytics
- ML confidence distribution
- Device-wise analytics
- Performance metrics

### 3. Logs
- Searchable log table
- Filter by decision type
- Export functionality

### 4. Review Queue
- Manual review interface
- Quick allow/block actions
- Confidence scores

### 5. Threat Intelligence
- Real-time threat alerts
- Severity indicators
- Global threat sources

### 6. Blockchain
- Block chain viewer
- Integrity verification
- Tamper-proof logs

### 7. Settings
- ML sensitivity adjustment
- Threshold configuration
- Auto-block toggle

## Theme Support

Toggle between light and dark modes:
- Click moon/sun icon in header
- Persists in localStorage
- Applies to all components

## Real-time Updates

Data refreshes automatically every 2 seconds (configurable in `REFRESH_INTERVALS` constant).

## Responsive Design

Fully responsive layout:
- Desktop: Full sidebar + content
- Tablet: Collapsible sidebar
- Mobile: Hamburger menu

## Troubleshooting

### Issue: "Module not found"
```bash
npm install recharts lucide-react react-router-dom
```

### Issue: Tailwind styles not working
```bash
# Ensure tailwind.config.js has correct content paths
# Run:
npm run start
```

### Issue: Dark mode not working
- Check ThemeProvider wraps entire app
- Verify `darkMode: 'class'` in tailwind.config.js

## Todo / Future Enhancements

- [ ] Add authentication
- [ ] WebSocket for real-time updates
- [ ] Export reports as PDF
- [ ] Email notifications
- [ ] Multi-language support

## License

MIT License

## 👥 Contributors

Satyam Kesarwani- Smart DNS Firewall Project

---

**Need Help?** Open an issue....
