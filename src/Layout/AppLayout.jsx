import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import WhatsAppIcon from "../Components/WhatsApp";
import TawkChat from "../Components/TawkChat";
import AOS from "aos";
import "aos/dist/aos.css";

const AppLayout = () => {
  AOS.init({
    once: true,
    duration: 1000,
    offset: -10,
  });
  return (
    <div className="dark:bg-darkblack">
      <Header />
      <WhatsAppIcon />
      <TawkChat />
      {/* <PopupContactForm /> */}
      <ScrollToTop />
      <div className="bg-white dark:bg-darkbackground dark:text-gray-200 transition-colors duration-300">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
