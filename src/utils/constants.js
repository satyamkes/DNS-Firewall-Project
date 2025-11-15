// Application Constants

export const DECISION_TYPES = {
  ALLOW: 'ALLOW',
  BLOCK: 'BLOCK',
  REVIEW: 'REVIEW'
};

export const DECISION_COLORS = {
  ALLOW: {
    bg: 'bg-green-100',
    text: 'text-green-700',
    border: 'border-green-500',
    hex: '#10b981'
  },
  BLOCK: {
    bg: 'bg-red-100',
    text: 'text-red-700',
    border: 'border-red-500',
    hex: '#ef4444'
  },
  REVIEW: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    border: 'border-yellow-500',
    hex: '#f59e0b'
  }
};

export const SEVERITY_COLORS = {
  Critical: { bg: 'bg-red-100', text: 'text-red-700', icon: '🔴' },
  High: { bg: 'bg-orange-100', text: 'text-orange-700', icon: '🟠' },
  Medium: { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: '🟡' },
  Low: { bg: 'bg-blue-100', text: 'text-blue-700', icon: '🔵' }
};

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', path: '/' },
  { id: 'analytics', label: 'Analytics', path: '/analytics' },
  { id: 'logs', label: 'Logs', path: '/logs' },
  { id: 'review', label: 'Review Queue', path: '/review' },
  { id: 'threat-intel', label: 'Threat Intelligence', path: '/threat-intel' },
  { id: 'blockchain', label: 'Blockchain Log', path: '/blockchain' },
  { id: 'settings', label: 'Settings', path: '/settings' }
];

export const REFRESH_INTERVALS = {
  REALTIME: 2000,      // 2 seconds
  LOGS: 5000,          // 5 seconds
  STATS: 10000,        // 10 seconds
  CHARTS: 30000        // 30 seconds
};

export const API_ENDPOINTS = {
  LOGS: '/api/logs',
  STATS: '/api/stats',
  BLOCK: '/api/block',
  ALLOW: '/api/allow',
  SETTINGS: '/api/settings',
  THREAT_INTEL: '/api/threat-intel'
};