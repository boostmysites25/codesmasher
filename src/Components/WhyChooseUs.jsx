import React from "react";
import whychooseusimg from "../assets/images/whychooseusimg.webp";
import { whyChooseUs } from "../util/constant";
import { Check } from "lucide-react";
const WhyChooseUs = () => {
  return (
    <section className="dark:bg-darkbackground">
      <div className="paddingtop paddingbottom wrapper grid md:grid-cols-2 gap-10">
        <div>
          <h1 data-aos="fade-right" className="main-title mb-6">
            Our Key Contributions
          </h1>
          <ul className="mt-4 space-y-5">
            {whyChooseUs.map((item, index) => {
              const [title, description] = item.split(": ");
              return (
                <li
                  key={index}
                  data-aos="fade-right"
                  className="flex items-start gap-3 dark:bg-darkcard p-4 rounded-lg dark:shadow-md dark:shadow-black/20 dark:border dark:border-darkborder"
                >
                  <Check className="text-primary mt-1 min-w-5" />
                  <span className="desc">
                    <strong className="!font-semibold dark:text-white">{title}:</strong>{" "}
                    {description}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={whychooseusimg}
          data-aos="fade-left"
          alt="whychooseusimg"
          className="rounded-xl h-full object-cover dark:shadow-lg dark:shadow-black/30"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
