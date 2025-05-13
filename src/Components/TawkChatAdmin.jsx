import { useState, useEffect } from 'react';

/**
 * Admin component for controlling the Tawk.to chat widget
 * This component can be added to admin pages or areas where you want to control the chat widget
 */
const TawkChatAdmin = () => {
  const [isWidgetVisible, setIsWidgetVisible] = useState(true);
  const [isTawkReady, setIsTawkReady] = useState(false);
  const [status, setStatus] = useState('');

  // Check if Tawk API is available
  const isTawkAvailable = () => {
    return window.Tawk_API !== undefined && window.Tawk_API !== null;
  };

  // Toggle widget visibility
  const toggleWidget = () => {
    if (!isTawkReady) {
      setStatus('Tawk.to API not available yet. Please try again in a moment.');
      return;
    }

    if (isWidgetVisible) {
      window.Tawk_API.hideWidget();
      setStatus('Chat widget hidden');
    } else {
      window.Tawk_API.showWidget();
      setStatus('Chat widget shown');
    }
    
    setIsWidgetVisible(!isWidgetVisible);
  };

  // Maximize chat window
  const maximizeChat = () => {
    if (!isTawkReady) {
      setStatus('Tawk.to API not available yet. Please try again in a moment.');
      return;
    }

    window.Tawk_API.maximize();
    setStatus('Chat window maximized');
  };

  // End ongoing chat
  const endChat = () => {
    if (!isTawkReady) {
      setStatus('Tawk.to API not available yet. Please try again in a moment.');
      return;
    }

    window.Tawk_API.endChat();
    setStatus('Chat ended');
  };

  // Refresh the widget
  const refreshWidget = () => {
    setStatus('Refreshing chat widget...');
    
    // Try to force a refresh by toggling visibility
    if (isTawkReady) {
      window.Tawk_API.hideWidget();
      setTimeout(() => {
        window.Tawk_API.showWidget();
        setStatus('Chat widget refreshed');
        setIsWidgetVisible(true);
      }, 500);
    } else {
      // If Tawk isn't ready, check again
      checkTawkStatus();
    }
  };

  // Check Tawk.to status
  const checkTawkStatus = () => {
    if (isTawkAvailable()) {
      setIsTawkReady(true);
      // This is a workaround since Tawk.to doesn't provide a direct way to check visibility
      const isVisible = !document.querySelector('iframe[title*="chat widget"]')?.style.display?.includes('none');
      setIsWidgetVisible(isVisible);
      setStatus('Tawk.to is ready');
    } else {
      setIsTawkReady(false);
      setStatus('Waiting for Tawk.to to load...');
    }
  };

  // Poll for Tawk.to availability
  useEffect(() => {
    // Initial check
    checkTawkStatus();
    
    // Set up polling to check for Tawk.to availability
    const intervalId = setInterval(() => {
      if (!isTawkReady) {
        checkTawkStatus();
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [isTawkReady]);

  return (
    <div className="p-4 bg-white dark:bg-darkcard rounded-lg shadow-md dark:shadow-black/30 border dark:border-darkborder">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Chat Widget Controls</h3>
      
      <div className="flex flex-wrap gap-3 mb-3">
        <button 
          onClick={toggleWidget}
          disabled={!isTawkReady}
          className={`px-4 py-2 text-white rounded-md transition-colors ${
            isTawkReady 
              ? "bg-primary hover:bg-primary/80" 
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {isWidgetVisible ? 'Hide Chat Widget' : 'Show Chat Widget'}
        </button>
        
        <button 
          onClick={maximizeChat}
          disabled={!isTawkReady}
          className={`px-4 py-2 text-white rounded-md transition-colors ${
            isTawkReady 
              ? "bg-blue-600 hover:bg-blue-700" 
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Open Chat Window
        </button>
        
        <button 
          onClick={endChat}
          disabled={!isTawkReady}
          className={`px-4 py-2 text-white rounded-md transition-colors ${
            isTawkReady 
              ? "bg-red-600 hover:bg-red-700" 
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          End Current Chat
        </button>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <button 
          onClick={refreshWidget}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Refresh Widget
        </button>
        
        <button 
          onClick={checkTawkStatus}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Check Status
        </button>
      </div>
      
      <div className={`mt-3 p-2 text-sm rounded ${
        isTawkReady 
          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200" 
          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200"
      }`}>
        <p>Status: {isTawkReady ? 'Tawk.to is ready' : 'Waiting for Tawk.to to load...'}</p>
        {status && <p className="mt-1">{status}</p>}
      </div>
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        <p>Note: If the chat widget isn't visible after page navigation, click "Refresh Widget".</p>
        <p>For more advanced settings, please visit your Tawk.to dashboard.</p>
      </div>
    </div>
  );
};

export default TawkChatAdmin;