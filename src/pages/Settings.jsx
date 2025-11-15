import React, { useState } from 'react';
import { Settings as SettingsIcon, Save } from 'lucide-react';
import Button from '../components/common/Button';

const Settings = () => {
  const [settings, setSettings] = useState({
    sensitivity: 75,
    blockThreshold: 0.8,
    autoBlock: true,
    notifications: true
  });

  const handleSave = () => {
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <SettingsIcon className="text-gray-600 dark:text-gray-400" />
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Configure firewall behavior and preferences
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            ML Model Sensitivity
          </label>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={settings.sensitivity}
            onChange={(e) => setSettings({...settings, sensitivity: e.target.value})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Current: {settings.sensitivity}% (Higher = More Strict)
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Block Threshold
          </label>

          <input 
            type="number" 
            value={settings.blockThreshold}
            onChange={(e) => setSettings({...settings, blockThreshold: e.target.value})}
            step="0.1" 
            min="0" 
            max="1" 
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full
                     bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Confidence threshold for automatic blocking (0.0 - 1.0)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <input 
            type="checkbox" 
            id="autoBlock"
            checked={settings.autoBlock}
            onChange={(e) => setSettings({...settings, autoBlock: e.target.checked})}
            className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="autoBlock" className="text-sm text-gray-700 dark:text-gray-300">
            Enable automatic blocking of malicious domains
          </label>
        </div>

        <div className="flex items-center gap-3">
          <input 
            type="checkbox" 
            id="notifications"
            checked={settings.notifications}
            onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
            className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="notifications" className="text-sm text-gray-700 dark:text-gray-300">
            Enable threat notifications
          </label>
        </div>

        <div className="pt-4">
          <Button icon={Save} onClick={handleSave}>
            Save Settings
          </Button>
        </div>
      </div>
    </div>
    
  );
};

export { Settings as default };