import { useState, useEffect } from 'react';

/**
 * Admin component for configuring the Tawk.to chat widget popup settings
 * This component can be added to admin pages to control the popup behavior
 */
const TawkChatConfig = () => {
  const [popupDelay, setPopupDelay] = useState(20);
  const [isEnabled, setIsEnabled] = useState(true);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hello! We'd love to learn more about you. Could you please share your name and what brings you to our website today?"
  );
  const [status, setStatus] = useState('');

  // Load saved settings on component mount
  useEffect(() => {
    const savedDelay = localStorage.getItem('tawk_popup_delay');
    const savedEnabled = localStorage.getItem('tawk_popup_enabled');
    const savedMessage = localStorage.getItem('tawk_welcome_message');
    
    if (savedDelay) setPopupDelay(parseInt(savedDelay, 10));
    if (savedEnabled) setIsEnabled(savedEnabled === 'true');
    if (savedMessage) setWelcomeMessage(savedMessage);
  }, []);

  // Save settings
  const saveSettings = () => {
    localStorage.setItem('tawk_popup_delay', popupDelay.toString());
    localStorage.setItem('tawk_popup_enabled', isEnabled.toString());
    localStorage.setItem('tawk_welcome_message', welcomeMessage);
    
    // Clear the session storage to allow the popup to show again with new settings
    sessionStorage.removeItem('tawk_popup_shown');
    
    setStatus('Settings saved successfully! Refresh the page to apply changes.');
    
    // Reload the page after a short delay to apply new settings
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  // Reset to defaults
  const resetDefaults = () => {
    setPopupDelay(20);
    setIsEnabled(true);
    setWelcomeMessage("Hello! We'd love to learn more about you. Could you please share your name and what brings you to our website today?");
    
    localStorage.removeItem('tawk_popup_delay');
    localStorage.removeItem('tawk_popup_enabled');
    localStorage.removeItem('tawk_welcome_message');
    sessionStorage.removeItem('tawk_popup_shown');
    
    setStatus('Reset to default settings. Refresh the page to apply changes.');
  };

  // Clear popup history
  const clearHistory = () => {
    sessionStorage.removeItem('tawk_popup_shown');
    setStatus('Popup history cleared. The chat will show again after the set delay.');
  };

  return (
    <div className="p-6 bg-white dark:bg-darkcard rounded-lg shadow-md dark:shadow-black/30 border dark:border-darkborder">
      <h3 className="text-xl font-semibold mb-6 dark:text-white">Chat Popup Settings</h3>
      
      <div className="space-y-6">
        <div>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={isEnabled}
              onChange={(e) => setIsEnabled(e.target.checked)}
              className="mr-2 h-4 w-4"
            />
            <span className="text-gray-800 dark:text-gray-200">Enable automatic popup</span>
          </label>
        </div>
        
        <div>
          <label className="block mb-2 text-gray-800 dark:text-gray-200">
            Popup delay (seconds):
          </label>
          <input
            type="number"
            min="5"
            max="300"
            value={popupDelay}
            onChange={(e) => setPopupDelay(parseInt(e.target.value, 10))}
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Recommended: 15-30 seconds. Too short might annoy visitors, too long might miss engagement opportunities.
          </p>
        </div>
        
        <div>
          <label className="block mb-2 text-gray-800 dark:text-gray-200">
            Welcome message:
          </label>
          <textarea
            value={welcomeMessage}
            onChange={(e) => setWelcomeMessage(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          ></textarea>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            This message will be sent automatically when the chat window opens.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3 pt-2">
          <button 
            onClick={saveSettings}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
          >
            Save Settings
          </button>
          
          <button 
            onClick={resetDefaults}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Reset to Defaults
          </button>
          
          <button 
            onClick={clearHistory}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Clear Popup History
          </button>
        </div>
      </div>
      
      {status && (
        <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md">
          {status}
        </div>
      )}
      
      <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 border-t dark:border-gray-700 pt-4">
        <p>Note: These settings are stored in your browser's local storage.</p>
        <p>For more advanced settings, please visit your Tawk.to dashboard.</p>
      </div>
    </div>
  );
};

export default TawkChatConfig;