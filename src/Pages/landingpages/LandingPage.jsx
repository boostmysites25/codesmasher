import React from "react";
import LandingHeader from "../../Components/landingpage/LandingHeader";
import LandingFooter from "../../Components/landingpage/LandingFooter";
import LandingServices from "../../Components/landingpage/LandingServices";
import { useTheme } from "../../Context/ThemeContext";
import CoreValues from "../../Components/CoreValues";
import VisionMission from "../../Components/VisionMission";
import OurApproach from "../../Components/OurApproach";
import UnlockEfficiency from "../../Components/UnlockEfficiency";
import LeadForm from "../../Components/landingpage/LeadForm";
import Portfolio from "../../Components/Portfolio";
import Banner from "../../Components/landingpage/Banner";
import webAboutImg from "../../assets/images/web-development.webp";
import appAboutImg from "../../assets/images/app-development.webp";
import Ourvalues from "../../Components/Ourvalues";
import TechnologiesUsed from "../../Components/landingpage/TechnologiesUsed";
import BrandLogos from "../../Components/BrandLogos";
import Industries from "../../Components/Industries";
import WhatsAppIcon from "../../Components/WhatsApp";

const LandingPage = ({ page }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const isWeb = page === "web";

  const bannerTitle = isWeb
    ? "Transforming Ideas into Seamless Digital Experiences"
    : "Revolutionizing Mobile Interactions";
  const bannerDesc = isWeb
    ? "Creating responsive, user-centered websites that drive business success."
    : "Building cutting-edge mobile applications that engage users and redefine mobile experiences.";

  return (
    <>
      <WhatsAppIcon />
      <LandingHeader />
      <div id="banner" className="bg-white dark:bg-darkblack">
        <Banner bannerTitle={bannerTitle} bannerDesc={bannerDesc} />
        <section id="about-us">
          <div className="wrapper grid md:grid-cols-2 gap-10 paddingtop paddingbottom">
            <div className="flex flex-col h-full max-h-[24rem] overflow-hidden">
              <img
                src={isWeb ? webAboutImg : appAboutImg}
                alt={
                  isWeb
                    ? "Web Development Services"
                    : "Mobile App Development Services"
                }
                className="h-full object-cover w-full"
              />
            </div>
            <div>
              <h1 className="main-title leading-tight">
                {isWeb
                  ? "Empowering Businesses with Expert Web Development"
                  : "Delivering Engaging Mobile App Solutions"}
              </h1>
              <p className="desc mt-4">
                {isWeb
                  ? "Our web development team focuses on creating high-performance, SEO-friendly websites that enhance brand presence and user engagement."
                  : "We specialize in building scalable and user-friendly mobile apps for both iOS and Android platforms, providing a seamless experience across devices."}
              </p>
            </div>
          </div>
        </section>

        <LandingServices page={page} />
        <div className="relative overflow-hidden">
          <div
            className={`absolute ${
              isDarkMode ? "flex" : "hidden"
            } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground`}
          />
          <Portfolio page={page} />
          <TechnologiesUsed service={page} />
          <section className="relative z-10 w-full h-full">
            <Industries />
            <CoreValues />
            <VisionMission />
            <OurApproach />
            <UnlockEfficiency />
            <Ourvalues />
            <BrandLogos />
            <LeadForm />
          </section>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default LandingPage;
