import React from "react";
import RoundedHeader from "./RoundedHeader";
import { testimonials } from "../util/constant";
import StarRating from "./StarRating";

const Testimonials = () => {
  return (
    <section className="dark:bg-darkGradient">
      <div className="paddingtop paddingbottom wrapper flex flex-col items-center gap-8">
        <RoundedHeader title={"Testimonials"} />
        <h1 className="main-title text-center leading-tight mb-4" data-aos="fade-up">
          What Our Clients Say
        </h1>
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className={`dark:bg-darkcard dark:shadow-lg dark:shadow-black/30 bg-white/10 hovershadow border-primary/50 border dark:border-darkborder rounded-lg p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1
                     ${index === 0 && "md:col-span-1"}  ${
                  index === 1 && "md:col-span-2"
                }`}
              >
                <p className="desc !font-medium mb-5 dark:text-gray-200">"{testimonial.quote}"</p>
                <div>
                  <p className="desc !font-medium mb-2 dark:text-white">
                    — {testimonial.author}
                  </p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
