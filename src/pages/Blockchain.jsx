import React, { useState } from 'react';
import { Database, Check } from 'lucide-react';
import { useData } from '../context/DataContext';
import Button from '../components/common/Button';





const Blockchain = () => {
  const { logs } = useData();
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [verified, setVerified] = useState(false);

  const verifyChain = () =>{
    setVerified(true);
    setTimeout(() => setVerified(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <Database className="text-cyan-500" />
            Blockchain Audit Log
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Tamper-proof logging system
          </p>
        </div>
        <Button variant="primary" icon={Check} onClick={verifyChain}>
          Verify Integrity
        </Button>
      </div>

      {verified && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <p className="text-green-700 dark:text-green-400 font-semibold">
            ✓ Blockchain integrity verified successfully!
          </p>
        </div>
      )}





      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Block Chain</h2>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {logs.slice(0, 20).map((log, index) => (
              <div 
                key={log.id} 
                className={`border rounded-lg p-3 cursor-pointer transition ${
                  selectedBlock?.id === log.id 
                    ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-500' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
                }`}
                onClick={() => setSelectedBlock(log)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white">
                      Block #{index}
                    </p>
                    <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mt-1">
                      Hash: {log.id.substring(0, 12)}...
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600 dark:text-gray-400">{log.domain}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {new Date(log.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedBlock && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Block Details</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Domain</p>
                <p className="font-mono font-semibold text-gray-800 dark:text-white">{selectedBlock.domain}</p>
              </div>
              <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Decision</p>
                <p className="font-semibold text-gray-800 dark:text-white">{selectedBlock.decision}</p>
              </div>
              <div>

                <p className="text-sm text-gray-500 dark:text-gray-400">Timestamp</p>

                <p className="font-mono text-sm text-gray-800 dark:text-white">{selectedBlock.timestamp}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Block Hash</p>
                <p className="font-mono text-xs text-gray-800 dark:text-white break-all">{selectedBlock.id}</p>
              </div>
              <div>
                   <p className="text-sm text-gray-500 dark:text-gray-400">Confidence Score</p>
                <p className="font-semibold text-gray-800 dark:text-white">{(selectedBlock.confidence * 100).toFixed(2)}%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Blockchain as default };
