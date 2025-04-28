import { createBrowserRouter } from "react-router-dom";

import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
const AppLayout = lazy(() => import("./Layout/AppLayout"));
const ContactUsPage = lazy(() => import("./Pages/ContactUsPage"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const AboutUsPage = lazy(() => import("./Pages/AboutUsPage"));

const BlogPage = lazy(() => import("./Pages/BlogPage"));
const BlogView = lazy(() => import("./Pages/BlogView"));
const Careers = lazy(() => import("./Pages/Careers"));

const ServicePage = lazy(() => import("./Pages/ServicePage"));
const ServiceDetails = lazy(() => import("./Pages/ServiceDetails"));
const LandingPage = lazy(() => import("./Pages/landingpages/LandingPage"));

const Thankyou = lazy(() => import("./Pages/Thankyou"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));

import { LoadingSpinner } from "./Components/Loader";
import ScrollToTop from "./Components/ScrollToTop";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Toaster
          position="top-bottom"
          toastOptions={{
            style: {
              zIndex: "10000",
              background: "#010C2A",
              color: "#ffffff",
            },
          }}
        />
        <AppLayout />
      </Suspense>
    ),

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/services", element: <ServicePage /> },
      { path: "/services/:title", element: <ServiceDetails /> },
      { path: "/contact-us", element: <ContactUsPage /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/thank-you", element: <Thankyou /> },
      { path: "/careers", element: <Careers /> },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogView />,
      },
    ],
  },
  {
    path: "/web-development",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ScrollToTop />
        <Toaster
          position="top-bottom"
          toastOptions={{
            style: {
              zIndex: "10000",
              background: "#010C2A",
              color: "#ffffff",
            },
          }}
        />
        {/* <PopupContactForm /> */}
        <LandingPage page={"web"} />
      </Suspense>
    ),
  },
  {
    path: "/app-development",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <ScrollToTop />
        <Toaster
          position="top-bottom"
          toastOptions={{
            style: {
              zIndex: "10000",
              background: "#010C2A",
              color: "#ffffff",
            },
          }}
        />
        {/* <PopupContactForm /> */}
        <LandingPage page={"app"} />
      </Suspense>
    ),
  },
]);

export default AppRouter;
