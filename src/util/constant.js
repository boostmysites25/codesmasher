import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";

// porfolio images
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/images/portfolio/web-development/5ghomes.webp";
import AkashMegaMart from "../assets/images/portfolio/web-development/akash-mega-mart.webp";
import ColdCreekcapImg from "../assets/images/portfolio/web-development/cold-creekcap.webp";
import Midwam from "../assets/images/portfolio/web-development/midwam.webp";
import ThinkReality from "../assets/images/portfolio/web-development/think-reality.webp";

// Import all images at the top (App Development)
import AkashMegaMartApp from "../assets/images/portfolio/app-development/akash_mega_mart-app.webp";
import AutosnapApp from "../assets/images/portfolio/app-development/autosnap-app.webp";
import FeelItApp from "../assets/images/portfolio/app-development/feelit_app.webp";
import KlikomicsApp from "../assets/images/portfolio/app-development/klikomics.webp";
import RentopImg from "../assets/images/portfolio/app-development/rentop.webp";

//portfolio blockchain
import Cryptopadie from "../assets/images/portfolio/blockchain/cryptopadie.webp";
import Nanoflow from "../assets/images/portfolio/blockchain/nanoflow.webp";
import Padipal from "../assets/images/portfolio/blockchain/padipal.webp";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaAppStoreIos,
  FaCloud,
  FaFacebook,
  FaInstagram,
  FaLanguage,
  FaLinkedin,
  FaRobot,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

// industries
import financial from "../assets/images/industries/Financial Services.webp";
import healthcare from "../assets/images/industries/Healthcare.webp";
import manufacturing from "../assets/images/industries/Manufacturing.webp";
import energy from "../assets/images/industries/Energy.webp";
import retail from "../assets/images/industries/Retail.webp";
import realestate from "../assets/images/industries/Real Estate.webp";
import food from "../assets/images/industries/Food and Beverage.webp";
import transportation from "../assets/images/industries/Transportation.webp";
import communication from "../assets/images/industries/Communication.webp";
import electronics from "../assets/images/industries/Consumer Electronics.webp";
import aerospace from "../assets/images/industries/Aerospace and Defense.webp";
import chemicals from "../assets/images/industries/Chemicals.webp";
import mining from "../assets/images/industries/Mining.webp";
import agriculture from "../assets/images/industries/Agriculture.webp";
import construction from "../assets/images/industries/Construction.webp";
import hospitality from "../assets/images/industries/Hospitality.webp";
import entertainment from "../assets/images/industries/Entertainment.webp";
import consulting from "../assets/images/industries/Consulting.webp";
import legal from "../assets/images/industries/Legal.webp";

import {
  FaMobileAlt,
  FaDesktop,
  FaBrain,
  FaGamepad,
  FaChartLine,
  FaPaintBrush,
} from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

export const companyDetails = {
  name: "CodeSmasher",
  email: "codesmashertechnology@gmail.com",
  phone: "+91-9391181982",
  address:
    "WeWork Space Salarpuria Symbiosis, Ground floor Bannerghatta Road Arekere Village, Begur Hobli, Bengaluru, Karnataka 560076",
  socialLinks: [
    {
      href: "",
      icon: FaLinkedin,
    },
    {
      href: "",
      icon: FaInstagram,
    },
    {
      href: "",
      icon: FaFacebook,
    },
    {
      href: "",
      icon: FaXTwitter,
    },
    {
      href: "",
      icon: FaYoutube,
    },
  ],
  whatsapp: "https://wa.me/919391181982",
};

export const services = [
  {
    title: "App Development",
    link: "/app-development",
    description:
      "Transform your ideas into powerful mobile experiences with our cross-platform app solutions that combine performance, security, and intuitive interfaces.",
    icon: FaMobileAlt,
    bgColor: "bg-purple-600",
  },
  {
    title: "Web Development",
    link: "/web-development",
    description:
      "Build dynamic, responsive websites with cutting-edge technologies that deliver seamless user experiences and robust backend functionality.",
    icon: FaDesktop,
    bgColor: "bg-blue-600",
  },
  {
    title: "Blockchain Development",
    link: "/blockchain-development",
    description:
      "Leverage decentralized technology with our smart contract development, DApp creation, and blockchain integration services for secure digital solutions.",
    icon: SiBlockchaindotcom,
    bgColor: "bg-yellow-600",
  },
  {
    title: "Game Development",
    link: "/game-development",
    description:
      "Create immersive gaming experiences across platforms with our expertise in 2D/3D rendering, physics engines, and multiplayer functionality.",
    icon: FaGamepad,
    bgColor: "bg-red-600",
  },
  {
    title: "Robotic Process Automation (RPA)",
    link: "/rpa",
    description:
      "Streamline business operations with intelligent automation solutions that handle repetitive tasks with precision and efficiency.",
    icon: FaRobot,
    bgColor: "bg-indigo-600",
  },
  {
    title: "Artificial Intelligence",
    link: "/ai-development",
    description:
      "Implement advanced AI/ML models that learn, predict, and automate to give your business a competitive edge in data-driven decision making.",
    icon: FaBrain,
    bgColor: "bg-teal-600",
  },
  {
    title: "Cloud Computing & Migration",
    link: "/cloud-services",
    description:
      "Optimize your infrastructure with our cloud solutions including deployment, migration, and management across all major platforms.",
    icon: FaCloud,
    bgColor: "bg-blue-400",
  },
  {
    title: "Data Science & Analytics",
    link: "/data-science",
    description:
      "Unlock actionable insights from your data with our comprehensive analytics services, from predictive modeling to interactive dashboards.",
    icon: FaChartLine,
    bgColor: "bg-orange-600",
  },
  {
    title: "Natural Language Processing (NLP)",
    link: "/nlp",
    description:
      "Develop intelligent systems that understand, interpret, and generate human language for applications ranging from search to sentiment analysis.",
    icon: FaLanguage,
    bgColor: "bg-purple-400",
  },
  {
    title: "UI/UX Design",
    link: "/ux-ui-design",
    description:
      "Craft visually stunning and user-friendly interfaces that enhance engagement and drive conversions through thoughtful design principles.",
    icon: FaPaintBrush,
    bgColor: "bg-pink-600",
  },
  {
    title: "Chatbot Development",
    link: "/chatbot-development",
    description:
      "Build intelligent conversational agents that provide 24/7 customer support, lead generation, and personalized user interactions.",
    icon: FaRobot,
    bgColor: "bg-green-600",
  },
];

export const whyChooseUs = [
  "Custom Software Development tailored to your specifc workfows",

  "Automation & AI Solutions to reduce costs and increase speed",

  "Advanced Data Analytics for smarter business decisions",

  "Enterprise App & Platform Development that scales with you",

  "Digital Experience Design (UI/UX) that enhances customer engagement",

  "Blockchain & Web3 Solutions for transparency and security",

  "End-to-end Product Engineering, from concept to deployment",
];

export const testimonials = [
  {
    quote:
      "We needed a blockchain solution for supply chain transparency, and CodeSmasher delivered beyond expectations. Their team didn’t just build what we asked for—they helped us understand what we actually needed. Six months post-launch, counterfeit incidents dropped by 72%.",
    author: "David K., Logistics Tech Director",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Most devs promise 'engaging gameplay' but deliver clunky mechanics. CodeSmasher’s team? They’re gamers first, developers second. Our mobile RPG saw a 40% increase in player retention after their redesign.",
    author: "Sarah L., Studio Head",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We’d burned through two dev teams before finding CodeSmasher. Finally, an app that doesn’t crash every time we update it. Their attention to detail is insane—they even optimized the onboarding flow to reduce drop-offs by 55%.",
    author: "Raj P., SaaS Founder",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Our finance team was drowning in manual invoice processing. CodeSmasher’s bots now handle 90% of it flawlessly. The best part? They trained our staff to tweak the workflows themselves—no expensive consultants needed.",
    author: "Maria G., CFO",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We thought AI was all hype until CodeSmasher built our predictive maintenance system. It caught a critical failure before it happened, saving us $250K in downtime. Now our floor managers won’t stop raving about it.",
    author: "Tom H., Manufacturing VP",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "We listen first, code second",
    description:
      "Before we write a single line of code, we take the time to understand your business inside out. What keeps you up at night? Where are the hidden inefficiencies? What does success really look like for your team?",
  },
  {
    id: 2,
    icon: graph,
    title: "We're your partners, not just vendors",
    description:
      "Unlike shops that disappear after delivery, we stick around. Your challenges evolve, and so do our solutions. Consider us an extension of your tech team – just without the HR headaches.",
  },
  {
    id: 3,
    icon: rocket,
    title: "We speak human, then tech",
    description:
      "No confusing jargon, no smoke and mirrors. We explain things clearly, make recommendations plain, and always keep your business objectives front and center.",
  },
  {
    id: 4,
    icon: start,
    title: "Our Secret Sauce",
    description:
      "It’s not just about brilliant engineers (though we have plenty). What sets us apart is using the right tool for the job, our battle-tested experience, relentless pragmatism, and a global perspective with a personal touch — delivering world-class expertise with local service.",
  },
];

export const faqs = [
  {
    question: "What is CodeSmasher?",
    answer: `• CodeSmasher is a next-gen AI platform combining quantum computing, intelligent automation, and immersive storytelling tools.
• It empowers individuals and businesses to explore advanced AI use cases, craft adaptive narratives, and co-create digital ecosystems.`,
  },
  {
    question: "How does CodeSmasher work?",
    answer: `• It operates on a modular AI architecture supported by quantum logic and real-time data analysis.
• Users can deploy AI agents, train custom intelligence models, and navigate interactive environments driven by dynamic input.`,
  },
  {
    question: "What are the core features of CodeSmasher?",
    answer: `• Custom AI Companions – Design intelligent agents tailored to your needs.
• Interactive Knowledge Portals – Engage with evolving, context-aware learning hubs.
• Real-Time Decision Engines – Use quantum-backed AI for advanced analytics and predictions.
• Cross-Domain Integration – Seamlessly connect with APIs, platforms, and tools for enterprise or creative applications.`,
  },
  {
    question: "Who can benefit from using CodeSmasher?",
    answer: `• Innovators & Startups – Looking to leverage AI for product or service innovation.
• Enterprises – Seeking automation, insight, and scalable intelligence solutions.
• Researchers & Developers – Exploring quantum models and experimental frameworks.
• Creatives & Designers – Building intelligent experiences, worlds, or characters.`,
  },
  {
    question: "How does CodeSmasher drive innovation?",
    answer: `• Fosters creative problem-solving through AI-assisted ideation tools.
• Encourages collaboration via shared AI networks and idea ecosystems.
• Enhances user experiences with adaptive content and predictive intelligence.`,
  },
  {
    question: "Is there a community around CodeSmasher?",
    answer: `• Yes, users can connect through discussion hubs, collaborate on AI projects, and share their creations.
• Regular meetups, hackathons, and AI symposia keep the network active and evolving.`,
  },
  {
    question: "How do I get started?",
    answer: `• Sign up through the CodeSmasher platform.
• Choose a use case (business, research, creative).
• Start exploring tools, training AI agents, or joining existing initiatives.`,
  },
  {
    question: "What pricing plans are available?",
    answer: `• Free Tier – Basic access to AI tools, templates, and public models.
• Pro Tier – Includes enhanced analytics, private AI environments, and early feature access.
• Enterprise – Tailored solutions, dedicated support, and full integration services.`,
  },
  {
    question: "How secure is my data on CodeSmasher?",
    answer: `• All data is encrypted and protected with quantum-resilient protocols.
• Users have full control over privacy settings and access permissions.
• Optional decentralized storage is available for enhanced data sovereignty.`,
  },
  {
    question: "Can I create and publish my own AI content?",
    answer: `• Absolutely. Users can build intelligent apps, characters, or tools and share them within the platform or externally.
• Monetization options and co-creation tools are available for approved creators.`,
  },
  {
    question: "How does CodeSmasher support future tech standards?",
    answer: `• Integrates Web 5.0 protocols, decentralized ID, and AI-optimized edge computing.
• Designed to evolve with emerging tech—ensuring long-term relevance and adaptability.`,
  },
  {
    question: "Where can I get help or support?",
    answer: `• Visit the Help Center for guides, tutorials, and forums.
• Use live chat or email support for real-time assistance.
• Join our community to get feedback, share insights, and collaborate.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Innovation",
    description:
      "We’re always pushing the boundaries of what’s possible, exploring new ideas, and adopting emerging technologies that create value for our clients.",
  },
  {
    id: 2,
    icon: quality,
    title: "Integrity",
    description:
      "We take pride in being honest, transparent, and dependable. Our clients trust us to deliver, and we honor that trust by always keeping their best interests at heart.",
  },
  {
    id: 3,
    icon: success,
    title: "Collaboration",
    description:
      "We believe that the best results come from working closely with our clients. By understanding their challenges and objectives, we develop solutions that are precisely aligned with their needs.",
  },
  {
    id: 4,
    icon: Infinite,
    title: "Excellence",
    description:
      "We don’t settle for anything less than the best. Whether we’re building a website or implementing a complex AI solution, we are committed to delivering top-quality results that exceed expectations.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "We envision a future where businesses of all sizes can seamlessly integrate the latest technologies to unlock new opportunities, drive sustainable growth, and stay competitive. As the digital world continues to evolve, our goal is to help you stay ahead of the curve—creating smart, scalable solutions that drive your business forward and enable you to thrive in a constantly changing marketplace.",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is simple: to empower businesses through technology. We aim to deliver innovative, custom solutions that streamline processes, enhance customer interactions, and help companies adapt to an ever-evolving digital landscape. By combining industry knowledge with technical expertise, we provide solutions that make a real difference, ensuring that every client achieves tangible results and long-term success.",
  },
];

export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-Commerce Web Applications",
    img: CgWebsite,
    description:
      "We craft scalable, AI-powered e-commerce platforms designed for future growth. Features include personalized product recommendations, intelligent search, automated inventory management, and seamless checkout experiences to maximize sales and user satisfaction.",
  },
  {
    id: 2,
    title: "Community & Networking Web Apps",
    img: GoFileMedia,
    description:
      "We build dynamic online communities with real-time feeds, AI-driven user recommendations, personalized content delivery, and smart engagement tools that foster loyalty, growth, and interaction.",
  },
  {
    id: 3,
    title: "Landing Pages & Microsites",
    img: TfiLayoutMediaRightAlt,
    description:
      "We design high-conversion landing pages and microsites optimized for lead generation. Our solutions feature AI-powered user journey mapping, integrated analytics, and compelling CTAs to maximize visitor engagement and ROI.",
  },
  {
    id: 4,
    title: "Custom Websites & Web Platforms",
    img: MdOutlineDashboardCustomize,
    description:
      "We specialize in developing custom websites and interactive web platforms tailored to your needs. Expect AI automation, bespoke workflows, real-time analytics, and intuitive user interfaces to enhance business operations and user satisfaction.",
  },
];

export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS Application Development",
    img: FaAppStoreIos,
    description:
      "We build high-performance iOS applications with sleek interfaces, integrating cutting-edge AI features like voice recognition, predictive behavior analytics, and personalized experiences—all leveraging the latest Apple frameworks and technologies.",
  },
  {
    id: 2,
    title: "Android App Solutions",
    img: IoLogoAndroid,
    description:
      "We create powerful, scalable Android applications with built-in AI capabilities for automation, predictive UX design, intelligent notifications, and robust security, ensuring seamless performance across all Android devices.",
  },
  {
    id: 3,
    title: "Cross-Platform Flutter Applications",
    img: SiFlutter,
    description:
      "We leverage Flutter to develop beautiful, high-performance cross-platform applications. With AI-enhanced personalization, real-time optimization, and adaptive UX, our apps deliver consistent experiences across iOS and Android ecosystems.",
  },
  {
    id: 4,
    title: "Hybrid Mobile App Development",
    img: TbDeviceMobileCode,
    description:
      "We develop agile, cross-platform hybrid apps that feel native. Our AI-driven hybrid apps offer smart offline capabilities, seamless data synchronization, and faster market delivery to give you a competitive edge.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: financial,
    title: "Financial Services",
    description:
      "Shaping the future of finance through AI-driven risk assessment, blockchain smart contracts, and decentralized finance innovations.",
  },
  {
    id: 2,
    img: healthcare,
    title: "Healthcare",
    description:
      "Advancing healthcare with AI-powered diagnostics, personalized treatment plans, and intelligent patient monitoring systems.",
  },
  {
    id: 3,
    img: manufacturing,
    title: "Manufacturing",
    description:
      "Reinventing production with intelligent automation, predictive maintenance, and data-driven smart factories.",
  },
  // {
  //   id: 4,
  //   img: energy,
  //   title: "Energy",
  //   description:
  //     "Powering the energy sector with AI-based optimization, seamless renewable integration, and smart grid technologies.",
  // },
  {
    id: 5,
    img: retail,
    title: "Retail",
    description:
      "Redefining retail with AI-driven product recommendations, personalized shopping experiences, and frictionless checkouts.",
  },
  {
    id: 6,
    img: realestate,
    title: "Real Estate",
    description:
      "Transforming real estate operations with intelligent property management, automated leasing, and blockchain-enabled contracts.",
  },
  {
    id: 7,
    img: food,
    title: "Food and Beverage",
    description:
      "Revolutionizing food services through AI-powered supply chains, predictive inventory management, and smart menu engineering.",
  },
  {
    id: 8,
    img: transportation,
    title: "Transportation",
    description:
      "Driving the future of transport with AI-optimized routes, autonomous logistics, and intelligent fleet management.",
  },
  {
    id: 9,
    img: communication,
    title: "Communication",
    description:
      "Elevating communication through AI-powered virtual assistants, smart messaging platforms, and real-time analytics.",
  },
  {
    id: 10,
    img: electronics,
    title: "Consumer Electronics",
    description:
      "Innovating electronics with AI-driven personalization, smart home automation, and connected wearable technologies.",
  },
  // {
  //   id: 11,
  //   img: aerospace,
  //   title: "Aerospace and Defense",
  //   description:
  //     "Modernizing aerospace and defense with intelligent automation, advanced sensor technologies, and secure smart systems.",
  // },
  // {
  //   id: 12,
  //   img: chemicals,
  //   title: "Chemicals",
  //   description:
  //     "Optimizing chemical manufacturing with AI-enhanced automation, smart quality controls, and predictive process management.",
  // },
  // {
  //   id: 13,
  //   img: mining,
  //   title: "Mining",
  //   description:
  //     "Revolutionizing mining operations through AI-driven exploration, autonomous equipment, and safety optimization systems.",
  // },
  // {
  //   id: 14,
  //   img: agriculture,
  //   title: "Agriculture",
  //   description:
  //     "Boosting agricultural productivity with AI-based crop monitoring, smart irrigation, and automated farming solutions.",
  // },
  // {
  //   id: 15,
  //   img: construction,
  //   title: "Construction",
  //   description:
  //     "Reimagining construction with AI-powered project management, autonomous machinery, and predictive maintenance technologies.",
  // },
  {
    id: 16,
    img: hospitality,
    title: "Hospitality",
    description:
      "Enhancing guest experiences with AI-driven personalization, smart service automation, and predictive demand planning.",
  },
  {
    id: 17,
    img: entertainment,
    title: "Entertainment",
    description:
      "Transforming entertainment with AI-enhanced content creation, smart audience analytics, and immersive digital experiences.",
  },
  {
    id: 18,
    img: consulting,
    title: "Consulting",
    description:
      "Redefining consulting with AI-assisted decision-making, predictive insights, and automated research capabilities.",
  },
  // {
  //   id: 19,
  //   img: legal,
  //   title: "Legal",
  //   description:
  //     "Revolutionizing legal services with AI-powered contract analysis, smart document automation, and predictive case outcomes.",
  // },
];

// portfolio images (web development)
export const webPortfolio = [
  // {
  //   id: 1,
  //   img: FiveGHomesImg,
  //   title: "5g Homes",
  //   link: "https://5ghighspeedinternet.co",
  // },
  {
    id: 2,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: ThinkReality,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: Midwam,
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: KlikomicsApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutosnapApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: RentopImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

// portfolio images (blockchain development)
export const blockchainPortfolio = [
  {
    id: 1,
    img: Nanoflow,
    title: "Nanoflow",
    link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
  },
  {
    id: 2,
    img: Padipal,
    title: "Padipal",
    link: "https://padiepal.com",
  },
  {
    id: 3,
    img: Cryptopadie,
    title: "Cryptopadie",
    link: "https://cryptopadie.com/",
  },
];
