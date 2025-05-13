import React, { useState } from "react";
import { services } from "../util/constant";
import { useTheme } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const ServicesGrid = () => {
  const [hover, setHover] = useState("");
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <section className="dark:bg-darkbackground">
      <div className="wrapper paddingbottom">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className={`relative aspect-square shadow-xl ${
                  isDarkMode ? `hovershadowwhite` : `hover:shadow-black`
                } duration-500 cursor-pointer transition-all transform hover:-translate-x-8 h-full dark:hover:bg-primary hover:bg-primary group dark:bg-darkcard overflow-hidden rounded-xl border dark:border-darkborder border-slate-200`}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover("")}
                onClick={() => navigateTo(`/services${service.link}`)}
              >
                <div
                  className={`absolute ${
                    hover !== index && isDarkMode ? `sm:flex hidden ` : "hidden"
                  } -top-[11rem] blur-3xl left-0 w-full h-full dark:bg-footerBackground opacity-80 active:bg-hidden`}
                />
                <div
                  className={`flex flex-col justify-center gap-4 z-[1] relative min-h-full p-6 darkandlightcardhovertext text-darkblack dark:text-gray-200`}
                >
                  <service.icon className="w-10 h-10 text-primary darkandlightcardhovertext" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="desc darkandlightcardhovertext">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
