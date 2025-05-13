import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import coverImg from "../assets/images/ourvaluescover.webp";
import CountUp from "react-countup";

const OurValues = () => {
  const stats = [
    {
      value: 6,
      label: "Years of Experience",
      icon: "⏳",
      // color: "from-purple-500 to-blue-500",
    },
    {
      value: 100,
      label: "Expert Team",
      icon: "🧠",
      // color: "from-blue-500 to-cyan-500",
    },
    {
      value: 60,
      label: "Clients",
      icon: "🤝",
      // color: "from-cyan-500 to-emerald-500",
    },
    {
      value: 200,
      label: "Projects",
      icon: "🚀",
      // color: "from-emerald-500 to-green-500",
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <img
        src={coverImg}
        className="absolute inset-0 object-cover object-center h-full w-full"
        alt=""
      />
      <div className="wrapper relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`relative p-8 rounded-xl backdrop-blur-sm border ${
                hoveredCard === index
                  ? ":bg-gray-800/70 border-blue-300 dark:border-blue-400/50 shadow-lg"
                  : "bg-gray-800/30 border-gray-200 dark:border-gray-600/30 shadow-md"
              } transition-all duration-300 overflow-hidden`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -5 }}
            >
              {/* Connection Lines - Different colors for themes */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={`absolute h-[1px] bg-gradient-to-r ${
                    hoveredCard === index
                      ? "via-blue-400 dark:via-blue-300 w-full opacity-80"
                      : "via-blue-300 dark:via-blue-400/0 w-0 opacity-0"
                  } from-transparent to-transparent transition-all duration-500`}
                  style={{ top: "20%", left: "-50%" }}
                ></div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4 dark:text-white/80 text-gray-300">
                  {stat.icon}
                </div>
                <h3
                  className={`text-6xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent mb-2`}
                >
                  <CountUp
                    suffix="+"
                    end={stat.value}
                    duration={5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>
                <p className="text-lg font-medium dark:text-gray-300 text-gray-200">
                  {stat.label}
                </p>
              </div>

              {/* Hover Effect - Theme Adjusted */}
              {hoveredCard === index && (
                <motion.div
                  className="absolute inset-0 bg-blue-400/5 dark:bg-blue-500/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;
