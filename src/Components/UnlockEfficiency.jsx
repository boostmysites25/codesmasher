import React from "react";
import RoundedHeader from "./RoundedHeader";
import { useNavigate } from "react-router-dom";

const UnlockEfficiency = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };

  return (
    <section>
      <div className="wrapper w-full flex flex-col gap-10 items-center paddingtop paddingbottom">
        <RoundedHeader title="Enhance Your Efficiency" />
        <h1 className="main-title w-fit">
          Boost Your Business Efficiency with CodeSmasher
        </h1>
        <p className="desc text-center">
          Empower your business with CodeSmasher’s cutting-edge solutions. We
          streamline your operations and automate key processes to save you
          time, reduce costs, and improve productivity—allowing you to focus on
          what drives growth.
        </p>
        <button
          onClick={() => navigateTo("/contact-us")}
          className="primary-btn w-fit"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
