import React from 'react';
import { Activity, CheckCircle, XCircle, Clock } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useData } from '../context/DataContext';
import { generateChartData } from '../utils/mockData';
import { DECISION_COLORS } from '../utils/constants';
import StatsCard from '../components/dashboard/StatsCard';

const Dashboard = ()=>{
  const { logs, stats } = useData();
  
  const chartData = generateChartData(12);
  
  const decisionData = [
    { name: 'Allowed', value: stats.allowed },
    { name: 'Blocked', value: stats.blocked },
    { name: 'Review', value: stats.review }
  ];
  
  const COLORS =[

    DECISION_COLORS.ALLOW.hex,
    DECISION_COLORS.BLOCK.hex,
    DECISION_COLORS.REVIEW.hex
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Real-time DNS firewall monitoring and analytics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          icon={Activity} 
          title="Total Requests" 
          value={stats.totalRequests} 
          color="#3b82f6" 
        />
        <StatsCard 
          icon={CheckCircle} 
          title="Allowed" 
          value={stats.allowed} 
          color="#10b981" 
        />
        <StatsCard 
          icon={XCircle} 
          title="Blocked" 
          value={stats.blocked} 
          change={12}
          color="#ef4444" 
        />
        <StatsCard 
          icon={Clock} 
          title="Under Review" 
          value={stats.review} 
          color="#f59e0b" 
        />
      </div>

{/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Threat Activity (Last 24h)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="blocked" stroke="#ef4444" strokeWidth={2} name="Blocked" />
              <Line type="monotone" dataKey="allowed" stroke="#10b981" strokeWidth={2} name="Allowed" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Decision Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Decision Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={decisionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {decisionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Real-time Monitor */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800 dark:text-white">
            <Activity size={20} className="text-blue-500" />
            Real-time DNS Requests
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Live</span>
          </div>
        </div>
        
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {logs.slice(0, 10).map((log) => {
            const decisionStyle = DECISION_COLORS[log.decision];
            
            return (
              <div 
                key={log.id} 
                className={`flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 ${decisionStyle.border}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-semibold text-gray-800 dark:text-white">
                      {log.domain}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${decisionStyle.bg} ${decisionStyle.text}`}>
                      {log.decision}
                    </span>
                  </div>

                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {log.reason} • Confidence: {(log.confidence * 100).toFixed(0)}%
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {log.source}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;