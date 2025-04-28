import React from "react";
import RoundedHeader from "./RoundedHeader";
import { highlights } from "../util/constant";
import { useNavigate } from "react-router-dom";

const Highlights = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <section className="z-30">
      <div className="wrapper paddingtop paddingbottom">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-5">
            <RoundedHeader title={"Highlights"} bg={true} />
            <h1 className="main-title leading-tight" data-aos="fade-right">
              Unleash Your Potential with CodeSmasher
            </h1>
            <p className="desc" data-aos="fade-right">
              With CodeSmasher, you're not just a user; you're a part of a
              global community of visionary thinkers, dreamers, and doers. Our
              platform empowers you to shape the future, one step at a time.
            </p>
            <button
              data-aos="fade-right"
              onClick={() => navigateTo("/contact-us")}
              className="secondary-btn-white w-fit"
            >
              Get Started
            </button>
          </div>
          <div className="col-span-2 grid md:grid-cols-2 gap-4">
            {highlights.map((obj) => (
              <div
                data-aos="fade-left"
                className="bg-white/10 flex flex-col gap-2 p-5 border text-black dark:text-white border-slate-500 rounded-xl"
              >
                <img src={obj.icon} alt={obj.title} className="w-7 " />
                <h3 className="small-heading">{obj.title}</h3>
                <p className="small-desc">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
