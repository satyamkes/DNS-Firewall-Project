import React from 'react';

const StatsCard = ({ icon: Icon, title, value, change, color }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-l-4 transition-transform hover:scale-105"
      style={{ borderLeftColor: color }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            {title}
          </p>
          <p className="text-3xl font-bold mt-2 text-gray-800 dark:text-white">
            {value.toLocaleString()}
          </p>

          {change !== undefined && (
            <p className={`text-sm mt-2 font-medium ${
              change > 0 ? 'text-red-500' : 'text-green-500'
            }`}>
              {change > 0 ? '↑' : '↓'} {Math.abs(change)}% from yesterday
            </p>
          )}
        </div>
        <div 
          className="p-4 rounded-full"
          style={{ backgroundColor: color + '20' }}
        >
          <Icon size={28} style={{ color }} />
        </div>
      </div>
      
    </div>
  );
};

export default StatsCard;