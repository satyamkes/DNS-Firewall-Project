import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';
import { generateThreatIntelligence } from '../utils/mockData';
import { SEVERITY_COLORS } from '../utils/constants';

const ThreatIntel = () => {
  const threats = generateThreatIntelligence();





  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <Shield className="text-blue-500" />
          Threat Intelligence
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Real-time threat alerts from global sources
        </p>
      </div>

      <div className="grid gap-6">
        {threats.map((threat) => {
          const severity = SEVERITY_COLORS[threat.severity];
          



          return (
            <div key={threat.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-l-4 border-red-500">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{severity.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {threat.type}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${severity.bg} ${severity.text}`}>
                      {threat.severity}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {threat.description}
                  </p>
                  <div className="flex gap-6 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Affected Domains: <strong className="text-red-600 dark:text-red-400">{threat.affectedDomains.toLocaleString()}</strong>
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      Source: <strong>{threat.source}</strong>
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {new Date(threat.timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ThreatIntel as default };
