# Tawk.to Chat Integration Guide

This guide explains how to set up and customize the Tawk.to live chat widget that has been integrated into the CodeSmasher website.

## Quick Setup

1. **Create a Tawk.to account** at [https://www.tawk.to/](https://www.tawk.to/)
2. **Get your Property ID and Widget ID** from your Tawk.to dashboard
3. **Update the TawkChat component** with your IDs
4. **Test the chat widget** on your website

## Getting Your Tawk.to IDs

To make the chat widget work, you need to replace the placeholder IDs in the `TawkChat.jsx` component with your actual Tawk.to Property ID and Widget ID.

1. **Create a Tawk.to Account**:
   - Go to [https://www.tawk.to/](https://www.tawk.to/)
   - Sign up for a free account

2. **Get Your Property ID and Widget ID**:
   - After signing in, go to your Tawk.to dashboard
   - Click on "Administration" → "Property Settings"
   - In the "Widget Code" section, you'll find a code snippet that looks like this:
     ```javascript
     <!--Start of Tawk.to Script-->
     <script type="text/javascript">
     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
     (function(){
     var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
     s1.async=true;
     s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
     s1.charset='UTF-8';
     s1.setAttribute('crossorigin','*');
     s0.parentNode.insertBefore(s1,s0);
     })();
     </script>
     <!--End of Tawk.to Script-->
     ```
   - The URL in the `s1.src` contains your Property ID and Widget ID in the format: `https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID`

3. **Update the TawkChat Component**:
   - Open `src/Components/TawkChat.jsx`
   - Replace `YOUR_TAWK_PROPERTY_ID` and `YOUR_TAWK_WIDGET_ID` with your actual IDs
   - For example, if your URL is `https://embed.tawk.to/abc123def456/default`, then:
     - Property ID: `abc123def456`
     - Widget ID: `default`

## Features Implemented

The Tawk.to integration includes the following features:

1. **Automatic Popup After 20 Seconds**:
   - The chat widget automatically opens after 20 seconds on the page
   - Sends a welcome message asking for the visitor's name and purpose
   - Only shows once per browsing session to avoid annoying repeat visitors
   - Helps proactively collect client information

2. **Automatic Theme Switching**: 
   - The chat widget automatically switches between light and dark themes based on the website's theme
   - This ensures a consistent user experience across the site

3. **Responsive Positioning**:
   - The widget is positioned differently on desktop and mobile to avoid overlapping with other elements
   - On mobile, it's positioned higher to avoid conflict with the WhatsApp button

4. **Page Tracking**:
   - The widget tracks page changes within the SPA (Single Page Application)
   - This allows you to see which pages visitors are viewing during chat sessions

5. **Event Logging**:
   - Chat events (start, end, maximize, minimize) are logged to the console
   - These can be connected to analytics tools if needed

6. **Admin Controls**:
   - A `TawkChatAdmin` component is available for controlling the chat widget from within the website
   - This can be added to admin pages or areas where you want to manage the chat widget

## Using the Admin Components

### Basic Admin Controls

The `TawkChatAdmin.jsx` component provides a simple interface for controlling the chat widget. To use it:

1. Import it into any page where you want admin controls:
   ```jsx
   import TawkChatAdmin from '../Components/TawkChatAdmin';
   ```

2. Add it to your JSX:
   ```jsx
   <div className="admin-section">
     <h2>Chat Settings</h2>
     <TawkChatAdmin />
   </div>
   ```

3. The admin panel provides buttons to:
   - Show/Hide the chat widget
   - Open the chat window
   - End the current chat session

### Popup Configuration

The `TawkChatConfig.jsx` component provides a user-friendly interface for configuring the automatic popup behavior:

1. Import it into your admin page:
   ```jsx
   import TawkChatConfig from '../Components/TawkChatConfig';
   ```

2. Add it to your JSX:
   ```jsx
   <div className="admin-section">
     <h2>Chat Popup Configuration</h2>
     <TawkChatConfig />
   </div>
   ```

3. The configuration panel allows you to:
   - Enable/disable the automatic popup
   - Set the popup delay (in seconds)
   - Customize the welcome message
   - Clear popup history (to test changes)
   - Reset to default settings

All settings are stored in the browser's localStorage and will persist across sessions.

## Customizing the Chat Widget

Tawk.to offers extensive customization options through their dashboard:

1. **Appearance**:
   - Go to "Administration" → "Chat Widget"
   - Here you can customize colors, position, size, and other visual aspects
   - **Note**: Some settings in the dashboard may be overridden by our custom code in `TawkChat.jsx`

2. **Chat Settings**:
   - Configure pre-chat forms, offline forms, and chat behavior
   - Set up automated messages and canned responses
   - Create shortcuts for frequently used responses

3. **Notifications**:
   - Set up email and desktop notifications for new chat requests
   - Configure notification sounds
   - Set up mobile notifications through the Tawk.to mobile app

4. **Departments and Agents**:
   - Add team members and create departments
   - Set up routing rules for chat distribution
   - Configure working hours and availability

## Advanced Customization via API

The Tawk.to API allows for programmatic control of the chat widget. Some examples already implemented:

- **Theme Switching**: The widget automatically switches between light and dark themes based on the website's theme.
- **Custom Styling**: The widget is styled to match the website's color scheme.
- **Position Adjustment**: The widget position is adjusted for different devices.

Additional customizations you might want to implement:

```javascript
// Set visitor information (useful for logged-in users)
Tawk_API.setAttributes({
    name: 'Visitor Name',
    email: 'visitor@example.com',
    // other attributes
}, function(error) {});

// Send a message programmatically
Tawk_API.onLoad = function() {
    Tawk_API.sendMessage('Welcome message sent programmatically');
};

// Create a custom action button
Tawk_API.addAction({
    text: 'View Pricing',
    onclick: function() {
        window.location.href = '/pricing';
    }
});
```

## Integrating with User Authentication

If your website has user authentication, you can enhance the chat experience by passing user information to Tawk.to:

1. Modify the `TawkChat.jsx` component to accept user information as props:
   ```jsx
   const TawkChat = ({ user }) => {
     // Existing code...
     
     useEffect(() => {
       // Existing code...
       
       if (user && window.Tawk_API) {
         window.Tawk_API.setAttributes({
           name: user.name,
           email: user.email,
           id: user.id,
           // Add any other relevant user information
         }, function(error) {});
       }
       
       // Rest of existing code...
     }, [user, isDarkMode, location.pathname]);
     
     // Rest of component...
   };
   ```

2. Then pass the user information when using the component:
   ```jsx
   <TawkChat user={currentUser} />
   ```

## Troubleshooting

### If the chat widget doesn't appear:

1. **Check your IDs**: Verify that you've entered the correct Property ID and Widget ID
2. **Check the console**: Look for JavaScript errors in the browser console
3. **Verify component usage**: Make sure the TawkChat component is properly imported and used in AppLayout.jsx
4. **Check for blockers**: Ad blockers or privacy extensions might be blocking the Tawk.to script
5. **Test in incognito mode**: This can help identify if browser extensions are causing issues
6. **Check Tawk.to status**: Verify that your Tawk.to account is active and the widget is enabled

### If the chat widget disappears after page navigation:

The chat widget is designed to persist across page navigation in the single-page application. However, if you experience issues:

1. **Use the TawkChatAdmin component**: Add this component to your page and click the "Refresh Widget" button
2. **Check for script conflicts**: Other scripts might be interfering with the Tawk.to widget
3. **Verify React router setup**: Make sure your routing is properly configured
4. **Clear browser cache**: Sometimes cached scripts can cause issues
5. **Update the TawkChat component**: Ensure you're using the latest version of the component from this guide

### Common SPA Navigation Issues:

In single-page applications, the chat widget might sometimes have issues persisting across page navigation. We've implemented several measures to prevent this:

1. **Script persistence**: The Tawk.to script is only loaded once and not removed during navigation
2. **State tracking**: We use React refs to track the loading state across renders
3. **Page info updates**: When the route changes, we update the page information without reloading the widget
4. **Manual refresh option**: The TawkChatAdmin component includes a "Refresh Widget" button for manual recovery

## Mobile Testing

The chat widget has been positioned to work well on mobile devices, but it's important to test on various screen sizes:

1. Test on different mobile devices or use browser developer tools to simulate different screen sizes
2. Verify that the chat widget doesn't overlap with the WhatsApp button or other UI elements
3. Test the chat experience in both portrait and landscape orientations

## Support and Resources

For additional help with Tawk.to:

- **Tawk.to Documentation**: [https://developer.tawk.to/](https://developer.tawk.to/)
- **Help Center**: [https://help.tawk.to/](https://help.tawk.to/)
- **API Reference**: [https://developer.tawk.to/jsapi/](https://developer.tawk.to/jsapi/)
- **Video Tutorials**: [https://www.tawk.to/videos/](https://www.tawk.to/videos/)

If you need to modify the integration:
- The main component is located at `src/Components/TawkChat.jsx`
- The admin component is located at `src/Components/TawkChatAdmin.jsx`
- The integration is included in the app layout at `src/Layout/AppLayout.jsx`