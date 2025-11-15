import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useData } from '../context/DataContext';
import Button from '../components/common/Button';

const ReviewQueue = () => {
  const { logs, blockDomain, allowDomain } = useData();
  const reviewLogs = logs.filter(log => log.decision === 'REVIEW');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <AlertTriangle className="text-yellow-500" />
          Review Queue
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Domains requiring manual review ({reviewLogs.length})
        </p>
      </div>

      <div className="space-y-3">
        {reviewLogs.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No domains pending review
            </p>
          </div>
        ) : (
          reviewLogs.map((log) => (
            <div key={log.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-mono font-bold text-lg text-gray-800 dark:text-white">
                    {log.domain}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {log.reason}
                  </p>
                  <div className="flex gap-4 mt-3 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Confidence: <strong>{(log.confidence * 100).toFixed(0)}%</strong>
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {new Date(log.timestamp).toLocaleString()}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      Source: <strong>{log.source}</strong>
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button 
                    variant="success" 
                    size="sm"
                    onClick={() => allowDomain(log.domain)}
                  >
                    Allow
                  </Button>
                  <Button 
                    variant="danger" 
                    size="sm"
                    onClick={() => blockDomain(log.domain)}
                  >
                    Block
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export { ReviewQueue as default };
