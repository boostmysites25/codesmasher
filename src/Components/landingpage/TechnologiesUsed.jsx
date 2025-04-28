import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaEthereum,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiSolidity,
  SiTensorflow,
  SiPytorch,
  SiFlutter,
  SiReact,
  SiAndroid,
  SiApple,
  SiFirebase,
  SiBlockchaindotcom,
} from "react-icons/si";
import { DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";

const TechnologiesUsed = ({ service }) => {
  // Define all technology categories
  const allTechnologies = {
    web: [
      { name: "React", icon: <FaReact className="text-blue-500" size={40} /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white" size={40} />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-400" size={40} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" size={40} />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-600" size={40} />,
      },
      {
        name: "HTML5",
        icon: <DiHtml5 className="text-orange-500" size={40} />,
      },
      { name: "CSS3", icon: <DiCss3 className="text-blue-400" size={40} /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" size={40} />,
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-500" size={40} />,
      },
      {
        name: "GraphQL",
        icon: <SiGraphql className="text-pink-600" size={40} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" size={40} />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-700" size={40} />,
      },
    ],
    app: [
      {
        name: "React Native",
        icon: <SiReact className="text-blue-500" size={40} />,
      },
      {
        name: "Flutter",
        icon: <SiFlutter className="text-blue-400" size={40} />,
      },
      {
        name: "Android",
        icon: <SiAndroid className="text-green-500" size={40} />,
      },
      { name: "iOS", icon: <SiApple className="text-gray-700" size={40} /> },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-500" size={40} />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-400" size={40} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" size={40} />,
      },
      { name: "Java", icon: <FaJava className="text-red-600" size={40} /> },
      {
        name: "Swift",
        icon: <SiApple className="text-orange-500" size={40} />,
      },
      {
        name: "Kotlin",
        icon: <SiAndroid className="text-purple-600" size={40} />,
      },
    ],
    ai: [
      {
        name: "Python",
        icon: <FaPython className="text-blue-400" size={40} />,
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="text-orange-500" size={40} />,
      },
      {
        name: "PyTorch",
        icon: <SiPytorch className="text-red-500" size={40} />,
      },
      {
        name: "Pandas",
        icon: <FaPython className="text-blue-600" size={40} />,
      },
      {
        name: "NumPy",
        icon: <FaPython className="text-green-600" size={40} />,
      },
      {
        name: "Scikit-learn",
        icon: <FaPython className="text-yellow-600" size={40} />,
      },
      {
        name: "OpenCV",
        icon: <FaPython className="text-blue-800" size={40} />,
      },
      { name: "AWS AI", icon: <FaAws className="text-orange-500" size={40} /> },
      { name: "R", icon: <FaPython className="text-blue-300" size={40} /> },
      {
        name: "Jupyter",
        icon: <FaPython className="text-orange-700" size={40} />,
      },
    ],
    blockchain: [
      {
        name: "Ethereum",
        icon: <FaEthereum className="text-gray-400" size={40} />,
      },
      {
        name: "Solidity",
        icon: <SiSolidity className="text-gray-600" size={40} />,
      },
      {
        name: "Web3.js",
        icon: <DiJavascript1 className="text-yellow-400" size={40} />,
      },
      {
        name: "Hyperledger",
        icon: <SiBlockchaindotcom className="text-blue-700" size={40} />,
      },
      {
        name: "Truffle",
        icon: <FaEthereum className="text-purple-500" size={40} />,
      },
      {
        name: "Ganache",
        icon: <FaEthereum className="text-brown-500" size={40} />,
      },
      {
        name: "IPFS",
        icon: <SiBlockchaindotcom className="text-blue-500" size={40} />,
      },
      {
        name: "Chainlink",
        icon: <SiBlockchaindotcom className="text-blue-400" size={40} />,
      },
      {
        name: "Smart Contracts",
        icon: <SiSolidity className="text-gray-700" size={40} />,
      },
      { name: "DApps", icon: <FaReact className="text-blue-500" size={40} /> },
    ],
  };

  // Get service title based on the service prop
  const getServiceTitle = () => {
    switch (service) {
      case "web":
        return "Web Development";
      case "app":
        return "Mobile App Development";
      case "ai":
        return "AI Development";
      case "blockchain":
        return "Blockchain Development";
      default:
        return "Web Development";
    }
  };

  // Get technologies based on the service prop
  const getTechnologies = () => {
    switch (service) {
      case "web":
        return allTechnologies.web;
      case "app":
        return allTechnologies.app;
      case "ai":
        return allTechnologies.ai;
      case "blockchain":
        return allTechnologies.blockchain;
      default:
        return allTechnologies.web;
    }
  };

  const technologies = getTechnologies();
  const serviceTitle = getServiceTitle();

  return (
    <section className="py-16 bg-white dark:bg-gray-900 z-10 relative">
      <div className="wrapper mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {serviceTitle} Technologies We Work With
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build powerful{" "}
            {serviceTitle.toLowerCase()} solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-3">{tech.icon}</div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesUsed;
