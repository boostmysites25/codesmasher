import React from "react";
import { useKeenSlider } from "keen-slider/react";
import img1 from "../assets/images/clients/1.png";
import img2 from "../assets/images/clients/2.png";
import img3 from "../assets/images/clients/3.png";
import img4 from "../assets/images/clients/4.png";
import img5 from "../assets/images/clients/5.png";

const animation = { duration: 10000, easing: (t) => t };

const BrandLogos = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 4,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: {
          perView: 2.5,
          spacing: 30,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 6,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="relative pt-[3rem] pb-[2rem]">
      <div className="relative z-10">
        <div data-aos="fade-up" className="wrapper">
          <h2 className="main-title leading-tight max-w-[60rem] mx-auto text-center capitalize">
            Join our <span className="text-primary">150+</span> happy clients
          </h2>
        </div>
        <div
          data-aos="fade-up"
          ref={sliderRef}
          className="keen-slider mt-1 py-[2rem]"
        >
          {[img1, img2, img3, img4, img5, img1, img2, img3, img4, img5].map(
            (img, index) => (
              <div
                key={index}
                className="keen-slider__slide flex justify-center px-3 py-2 bg-white rounded-full h-[5rem]"
              >
                <img
                  loading="lazy"
                  src={img}
                  alt="featured in"
                  className="object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;
