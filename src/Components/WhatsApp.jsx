import { useState } from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../util/constant";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-6 z-50">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* WhatsApp Button */}
        <Link
          to={companyDetails.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp className="text-white text-3xl sm:text-4xl" />
        </Link>

        {/* Animated Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3"
            >
              <div className="relative bg-white text-gray-800 text-sm font-semibold px-3 py-2 rounded-md shadow-lg whitespace-nowrap">
                Chat with us
                <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Optional pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-40 animate-ping -z-10"></div>
      </div>
    </div>
  );
};

export default WhatsAppIcon;
