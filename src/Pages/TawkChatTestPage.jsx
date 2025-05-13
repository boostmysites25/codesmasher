import React from 'react';
import TawkChatAdmin from '../Components/TawkChatAdmin';
import TawkChatConfig from '../Components/TawkChatConfig';

/**
 * Test page for Tawk.to chat widget controls
 * This page demonstrates how to use the TawkChatAdmin and TawkChatConfig components
 */
const TawkChatTestPage = () => {
  return (
    <div className="wrapper py-20">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Tawk.to Chat Widget Controls</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Widget Controls</h2>
          <p className="mb-4 dark:text-gray-300">
            Use these controls to manage the chat widget in real-time. You can show/hide the widget,
            open the chat window, or end the current chat session.
          </p>
          <TawkChatAdmin />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Popup Configuration</h2>
          <p className="mb-4 dark:text-gray-300">
            Configure the automatic popup behavior of the chat widget. You can adjust the timing,
            customize the welcome message, or disable the popup entirely.
          </p>
          <TawkChatConfig />
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-gray-100 dark:bg-darkcard rounded-lg shadow-md dark:shadow-black/30 border dark:border-darkborder">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Testing Instructions</h2>
        
        <ol className="list-decimal pl-5 space-y-3 dark:text-gray-300">
          <li>
            <strong>Test Widget Controls:</strong> Try hiding and showing the widget, opening the chat window,
            and refreshing the widget if it disappears after navigation.
          </li>
          <li>
            <strong>Test Popup Configuration:</strong> Adjust the popup delay and welcome message, then clear
            the popup history to see your changes in action.
          </li>
          <li>
            <strong>Test Page Navigation:</strong> Navigate to different pages in the website and return to
            this page to verify that the chat widget persists.
          </li>
          <li>
            <strong>Test Theme Switching:</strong> Toggle between light and dark mode to verify that the
            chat widget adapts to the theme.
          </li>
        </ol>
        
        <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-md">
          <p className="font-medium">Important Note:</p>
          <p>
            This test page is intended for administrators only. In a production environment, you should
            restrict access to these controls to prevent unauthorized users from modifying the chat widget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TawkChatTestPage;