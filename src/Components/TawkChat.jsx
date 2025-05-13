import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../Context/ThemeContext';
import { useLocation } from 'react-router-dom';

const TawkChat = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const location = useLocation();
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const scriptLoaded = useRef(false);
  const tawkToLoaded = useRef(false);

  // Function to update page information when route changes
  const updatePageInfo = () => {
    if (window.Tawk_API && window.Tawk_API.addEvent) {
      window.Tawk_API.addEvent('current-page', {
        'page': location.pathname,
        'title': document.title
      }, function(error) {
        if (error) {
          console.error('Error setting Tawk.to page info:', error);
        }
      });
    }
  };

  // Initial setup of Tawk.to - only runs once
  useEffect(() => {
    if (scriptLoaded.current) return;
    
    // Tawk.to integration script
    const tawkToScript = () => {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
      
      // Create and append the Tawk.to script
      const s1 = document.createElement("script");
      s1.id = 'tawk-script';
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6813afcc279f98190c83722b/1iq6ede1r';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
      
      // Mark script as loaded
      scriptLoaded.current = true;

      // Configure Tawk API when it loads
      window.Tawk_API.onLoad = function() {
        console.log('Tawk.to loaded successfully');
        tawkToLoaded.current = true;
        
        // Set theme based on website's dark/light mode
        updateTheme();
        
        // Set custom styling to match website design
        window.Tawk_API.customStyle({
          zIndex: 1000,
          color: '#ff8b0f', // Primary color from the website
          visibility: {
            desktop: {
              position: 'br', // bottom right
              xOffset: 20,
              yOffset: 20
            },
            mobile: {
              position: 'br', // bottom right
              xOffset: 10,
              yOffset: 70 // Higher position to avoid overlap with WhatsApp button
            }
          }
        });

        // Update page information
        updatePageInfo();
        
        // Set up automatic popup
        setupAutoPopup();
      };

      // Handle chat widget events
      window.Tawk_API.onChatMaximized = function() {
        console.log('Chat widget maximized');
        
        // If the user manually opens the chat, consider it as shown
        setHasShownPopup(true);
        sessionStorage.setItem('tawk_popup_shown', 'true');
      };

      window.Tawk_API.onChatMinimized = function() {
        console.log('Chat widget minimized');
      };

      window.Tawk_API.onChatHidden = function() {
        console.log('Chat widget hidden');
      };

      window.Tawk_API.onChatStarted = function() {
        console.log('Chat started');
        
        // Once a chat is started, don't show the popup again in this session
        sessionStorage.setItem('tawk_popup_shown', 'true');
      };

      window.Tawk_API.onChatEnded = function() {
        console.log('Chat ended');
      };
    };

    // Load Tawk.to script if not already loaded
    if (!document.getElementById('tawk-script')) {
      tawkToScript();
    }
    
    // Cleanup function - don't remove the script on unmount
    return () => {};
  }, []); // Empty dependency array means this runs once on mount

  // Function to update theme
  const updateTheme = () => {
    if (window.Tawk_API && window.Tawk_API.setAttributes) {
      window.Tawk_API.setAttributes({
        'theme': isDarkMode ? 'dark' : 'light'
      }, function(error) {
        if (error) {
          console.error('Error setting Tawk.to theme:', error);
        }
      });
    }
  };

  // Function to set up auto popup
  const setupAutoPopup = () => {
    const isPopupEnabled = localStorage.getItem('tawk_popup_enabled') !== 'false'; // Default to true if not set
    const popupDelay = parseInt(localStorage.getItem('tawk_popup_delay') || '20', 10) * 1000; // Default 20 seconds
    const welcomeMessage = localStorage.getItem('tawk_welcome_message') || 
      "Hello! We'd love to learn more about you. Could you please share your name and what brings you to our website today?";
    
    if (isPopupEnabled && !hasShownPopup && !sessionStorage.getItem('tawk_popup_shown')) {
      setTimeout(() => {
        if (window.Tawk_API && window.Tawk_API.maximize) {
          // Show the chat window
          window.Tawk_API.maximize();
          
          // Send the welcome message to collect client details
          setTimeout(() => {
            window.Tawk_API.sendMessage(welcomeMessage);
          }, 1000);
          
          setHasShownPopup(true);
          sessionStorage.setItem('tawk_popup_shown', 'true');
        }
      }, popupDelay);
    }
  };

  // Update when theme changes
  useEffect(() => {
    if (tawkToLoaded.current) {
      updateTheme();
    }
  }, [isDarkMode]);

  // Update when location changes
  useEffect(() => {
    if (tawkToLoaded.current) {
      updatePageInfo();
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything visible
};

export default TawkChat;