import React from 'react';
import { Shield, Moon, Sun, Bell } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';



const Header = () => {


  const {isDark, toggleTheme} = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Shield className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Smart DNS Firewall
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ML-Powered Threat Protection
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
       

       
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg relative">
            <Bell size={20} className="text-gray-600 dark:text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          



          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </button>
          
          {/* System Status */}
          <div className="text-right">

            <p className="text-sm text-gray-600 dark:text-gray-400">System Status</p>
            <p className="text-sm font-semibold text-green-600 dark:text-green-400 flex items-center gap-1">

              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Active
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;