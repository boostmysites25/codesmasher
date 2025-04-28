import React from "react";
import RoundedHeader from "../Components/RoundedHeader";
import { useTheme } from "../Context/ThemeContext";
import ServicesGrid from "../Components/ServicesGrid";
import Testimonials from "../Components/Testimonials";
import servicebanner from "../assets/images/servicebanner.webp";
const ServicePage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className=" bg-white dark:bg-darkblack">
      <section className="pt-[4rem]">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } -top-[43rem] blur-3xl left-0 w-full z-10 h-full bg-footerBackground  `}
        />{" "}
        <section className="relative flex flex-col items-center gap-10 z-10 w-full h-full ">
          <div
            className="relative w-full min-h-[30rem] flex flex-col bg-cover bg-center justify-center items-center gap-8 paddingtop paddingbottom "
            style={{ backgroundImage: `url(${servicebanner})` }}
          >
            <div className="absolute inset-0 h-full w-full bg-black opacity-40" />
            <h1
              data-aos="fade-up"
              className="wrapper hero-title text-[35px] sm:text-[40px] lg:text-[56px] text-center leading-tight font-bold dark:text-white text-white"
            >
              Our Services
            </h1>
            <p
              className="wrapper desc text-center !max-w-[50rem] !text-white"
              data-aos="fade-up"
            >
              At CodeSmasher, we don’t just build software—we craft digital
              experiences that transform businesses. Whether you're looking to
              harness the power of blockchain, create immersive games, or
              automate workflows with AI, our team of experts delivers
              tailor-made solutions that drive real impact. Here’s how we can
              help:
            </p>
          </div>
          <div className="wrapper">
            <ServicesGrid />
          </div>
        </section>
      </section>
      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : `hidden`
          } -bottom-[50rem] -left-[50rem] w-full h-full bg-background blur-3xl opacity-70 z-0`}
        />
        <div className="relative z-10 w-full h-full">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
