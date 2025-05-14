import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./App";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import "keen-slider/keen-slider.min.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={AppRouter} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
