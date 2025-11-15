import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Activity, FileText, AlertTriangle, Database, 
  Settings, BarChart3, Shield 
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    
    { id: 'dashboard', label: 'Dashboard', icon: Activity, path: '/' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
    { id: 'logs', label: 'Logs', icon: FileText, path: '/logs' },
    { id: 'review', label: 'Review Queue', icon: AlertTriangle, path: '/review' },
    { id: 'threat-intel', label: 'Threat Intel', icon: Shield, path: '/threat-intel' },
    { id: 'blockchain', label: 'Blockchain', icon: Database, path: '/blockchain' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' }
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-200 dark:border-gray-700 min-h-screen">
      <nav className="p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;