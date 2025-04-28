import React from "react";
import aboutusimg from "../assets/images/aboutusimg.webp";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurApproach from "../Components/OurApproach";
import UnlockEfficiency from "../Components/UnlockEfficiency";
import WhyChooseUs from "../Components/WhyChooseUs";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className=" bg-white dark:bg-darkblack">
      <section className="relative pt-[7rem]  overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } -top-[28rem] blur-3xl left-0 w-full h-full bg-footerBackground  `}
        />{" "}
        <section className="relative z-10 w-full h-full">
          <div>
            <div className="wrapper paddingtop paddingbottom grid md:grid-cols-2 gap-10">
              <div>
                <h1
                  data-aos="fade-right"
                  className="hero-title text-8xl font-bold text-darkblack dark:text-white"
                >
                  About Us
                </h1>
                <p data-aos="fade-right" className="desc mt-10">
                  At CodeSmasher Software, we are not just a service provider —
                  we are the force behind digital transformation for ambitious
                  brands and forward-thinking enterprises. Our core belief is
                  simple: technology should not just support business—it should
                  elevate it. <br />
                  <br />
                  We design and deliver next-gen solutions that accelerate
                  growth, enhance efficiency, and redefine industries. From idea
                  to execution, CodeSmasher is your strategic ally, building
                  intelligent systems that solve complex challenges and unlock
                  new opportunities for revenue, scale, and sustainability
                </p>
              </div>
              <img
                data-aos="fade-left"
                src={aboutusimg}
                alt="aboutus-img"
                className="h-full object-cover"
              />
            </div>
          </div>
        </section>
        <div className="py-14 relative z-[1] wrapper space-y-12">
          <div data-aos="fade-up" className="space-y-5">
            <h2 className="main-title">What is CodeSmasher?</h2>
            <p className="desc">
              CodeSmasher is a globally recognized software innovation company,
              specializing in end-to-end digital solutions that enable
              businesses to thrive in a technology-first world. With a proven
              track record and clients across the globe, we're known for
              delivering powerful results through cutting-edge development, data
              intelligence, and next-generation automation. <br />
              <br />
              We bring together elite minds in software engineering, AI/ML, IoT,
              blockchain, app development, game design, and UX strategy to craft
              tailored solutions that make a lasting impact. Every line of code
              we write is aligned with your business goals — not just
              functionality, but real value.
            </p>
          </div>
          <div data-aos="fade-up" className="space-y-5">
            <h2 className="main-title">Our Role in Business Transformation</h2>
            <p className="desc">
              At CodeSmasher, we don't just create digital tools — we create
              strategic leverage. We work at the heart of your business,
              identifying inefficiencies, exploring innovations, and
              implementing systems that evolve with your company. <br />
              <br />
              Whether you're a startup aiming to disrupt, a scale-up optimizing
              for growth, or an enterprise modernizing legacy systems,
              CodeSmasher becomes an extension of your team — driving impact
              across every layer of your organization.
            </p>
          </div>

          {/* New Why Choose CodeSmasher Section */}
          <div data-aos="fade-up" className="space-y-5">
            <h2 className="main-title">Why Choose CodeSmasher?</h2>
            <ul className="desc list-disc pl-5 space-y-3">
              <li>
                <strong>Proven Expertise:</strong> Trusted by global brands
                across industries.
              </li>
              <li>
                <strong>End-to-End Ownership:</strong> From concept to
                deployment, we've got you covered.
              </li>
              <li>
                <strong>Future-Ready Tech:</strong> We don't just follow
                trends—we set them.
              </li>
              <li>
                <strong>Your Success, Our Mission:</strong> We measure our
                success by your growth.
              </li>
            </ul>
          </div>

          {/* New Let's Build Section */}
          <div
            data-aos="fade-up"
            className="space-y-7 flex flex-col items-center bg-blue-50 dark:bg-gray-800 p-8 rounded-lg"
          >
            <h2 className="main-title text-center">
              Let's Build Something Extraordinary
            </h2>
            <p className="desc text-center">
              Your vision deserves a partner who can execute it flawlessly. At
              CodeSmasher, we combine technical brilliance with strategic
              thinking to deliver solutions that aren't just functional—they're
              transformative.
            </p>
            <Link className="primary-btn mx-auto">
              Reach out today—let's turn your ideas into reality.
            </Link>
            <p className="desc text-center italic">
              Build boldly. Innovate fearlessly. Win globally.
            </p>
          </div>

          {/* New The CodeSmasher Story Section */}
          <div data-aos="fade-up" className="space-y-5">
            <h2 className="main-title">
              The CodeSmasher Story: Where Passion Meets Precision
            </h2>
            <p className="desc">
              We didn't start out to be just another software company. Back in
              [year founded], our founder Mahesh Sagar saw too many businesses
              getting lost in tech jargon and half-baked solutions. The vision
              was simple: build a team that could bridge the gap between what
              technology can do and what businesses need it to do.
            </p>
            <p className="desc">
              Today, that vision has grown into a global force – but we've kept
              that scrappy, solution-focused mindset that got us here.
            </p>
          </div>

          {/* New Who We Work With Section */}
          <div data-aos="fade-up" className="space-y-5">
            <h2 className="main-title">Who We Work With</h2>
            <p className="desc">We've helped:</p>
            <ul className="desc list-disc pl-5 space-y-3">
              <li>
                <strong>Ambitious startups</strong> turn bold ideas into
                market-ready products
              </li>
              <li>
                <strong>Growing scale-ups</strong> build infrastructure that
                keeps pace with success
              </li>
              <li>
                <strong>Established enterprises</strong> modernize without
                disrupting operations
              </li>
              <li>
                <strong>Visionary leaders</strong> who see technology as a
                competitive edge, not just a cost center
              </li>
            </ul>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <div className="relative overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
        />
        <section className="relative z-10 w-full h-full">
          <CoreValues />
          <UnlockEfficiency />
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
