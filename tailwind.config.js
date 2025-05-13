/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkblack: "#020816",
        darkbackground: "#0a0a0a", // Darker background
        darkcard: "#121212", // New darker card color
        darksecondary: "#1a1a1a", // New secondary dark color
        darkborder: "#2a2a2a", // New border color for dark mode
        // primary: "#CCAF53",
        primary: "#ff8b0f",
      },
      backgroundImage: {
        footerBackground:
          "radial-gradient(circle, rgba(0,80,138,1) 0%, rgba(2,8,22,1) 58%);", // Darker gradient
        background:
          "radial-gradient(circle, rgba(0,80,138,1) 0%, rgba(2,8,22,1) 80%);", // Darker gradient
        darkGradient: 
          "linear-gradient(to bottom, #0a0a0a, #121212)", // New dark gradient
        // "linear-gradient(0deg, rgba(0,100,158,1) 0%, rgba(2,8,22,1) 60%);",
        // "radial-gradient(circle, rgba(0,100,158,0.9710477941176471) 5%, rgba(2,8,22,0.8253895308123249) 55%);",
        // "radial-gradient(circle, rgba(85,225,221,1) 10%, rgba(0,100,158,0.5) 50%, rgba(2,8,22,1) 100%);",
      },
    },
  },
  plugins: [],
};
