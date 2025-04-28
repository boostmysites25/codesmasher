import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Ourvalues = () => {
  const totalYrs = 6;
  const totalProjects = 200;
  const totalExperts = 100;
  const totalClients = 150;

  const [yrs, setYrs] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 100);

      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 60);

      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, totalClients));
      }, 10);

      const completionInterval = setInterval(() => {
        setProjectsCompleted((prev) => Math.min(prev + 1, totalProjects));
      }, 10);

      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);

  return (
    <section>
      <div className="paddingtop paddingbottom wrapper">
        <div
          ref={ref}
          //   data-aos-offset={-200}
          data-aos="fade-up"
          className="w-full text-white grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-5 rounded-3xl dark:bg-darkblack bg-primary p-[2rem]"
        >
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3 relative w-fit">
              <h1 className="main-title md:text-[3.5rem] !text-white">{yrs}</h1>
              <span className="absolute top-1 -right-3 md:-right-7 text-lg md:text-4xl">+</span>
            </div>
            <p className="desc mt-3 !text-white">Years of Experience</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3 relative w-fit">
              <h1 className="main-title md:text-[3.5rem] !text-white">{experts}</h1>
              <span className="absolute top-1 -right-3 md:-right-7 text-lg md:text-4xl">+</span>
            </div>
            <p className="desc mt-3 !text-white">Expert Team</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3 relative w-fit">
              <h1 className="main-title md:text-[3.5rem] !text-white">{clients}</h1>
              <span className="absolute top-1 -right-3 md:-right-7 text-lg md:text-4xl">+</span>
            </div>
            <p className="desc mt-3 !text-white">Clients</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3 relative w-fit">
              <h1 className="main-title md:text-[3.5rem] !text-white">{projectsCompleted}</h1>
              <span className="absolute top-1 -right-3 md:-right-7 text-lg md:text-4xl">+</span>
            </div>
            <p className="desc mt-3 !text-white">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourvalues;
