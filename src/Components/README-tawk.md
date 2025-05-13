# Tawk.to Chat Integration

This directory contains components for integrating the Tawk.to live chat widget with the CodeSmasher website.

## Components

- **TawkChat.jsx**: Main component that loads and configures the Tawk.to chat widget
- **TawkChatAdmin.jsx**: Optional admin component for controlling the chat widget
- **TawkChatConfig.jsx**: Configuration component for customizing the auto-popup behavior

## Quick Setup

1. Create a Tawk.to account at [https://www.tawk.to/](https://www.tawk.to/)
2. Get your Property ID and Widget ID from your Tawk.to dashboard
3. Update the `TawkChat.jsx` component with your IDs (replace `YOUR_TAWK_PROPERTY_ID` and `YOUR_TAWK_WIDGET_ID`)
4. The chat widget should now appear on your website

## Features

- **Automatic popup after 20 seconds** to collect client information
- Automatic theme switching (light/dark mode)
- Responsive positioning for desktop and mobile
- Page tracking within the SPA
- Event logging
- Admin controls

## Usage

The `TawkChat` component is already included in the `AppLayout.jsx` file, so it will be loaded on all pages.

If you want to use the admin component on a specific page:

```jsx
import TawkChatAdmin from '../Components/TawkChatAdmin';

// Then in your component:
<TawkChatAdmin />
```

## Documentation

For detailed documentation, see:
- `docs/tawk-integration-guide.md` in the project root
- [Tawk.to API Documentation](https://developer.tawk.to/jsapi/)