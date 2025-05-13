import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useTheme } from "../Context/ThemeContext";
import { companyDetails } from "../util/constant";
import { PhoneCall } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="relative bg-gray-900 dark:bg-darkblack z-20 overflow-hidden transition-colors duration-300">
      <div
        className={`absolute ${
          isDarkMode ? `flex` : "hidden"
        } -bottom-[15rem] blur-3xl left-0 w-full h-full bg-footerBackground opacity-80 -z-10`}
      />
      <footer className="w-full py-16 z-10 border-t dark:border-darkborder">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-[1fr,12rem,12rem] gap-8">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="logo" className="w-[15rem]" />
              </div>
              <p className="text-white text-sm max-w-xs">
                CodeSmasher drives business evolution beyond traditional
                boundaries.
              </p>
            </div>

            {/* <div className="col-span-1">
              <h3 className="text-white font-medium mb-4 border-b border-primary/30 pb-2 inline-block">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about-us"
                    className="text-white hover:text-primary text-sm transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-white hover:text-primary text-sm transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-white hover:text-primary text-sm transition-colors duration-200"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div> */}

            <div className="col-span-1">
              <h3 className="text-white font-medium mb-4 border-b border-primary/30 pb-2 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/blogs"
                    className="text-white hover:text-primary text-sm transition-colors duration-200"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="text-white hover:text-primary text-sm transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-white hover:text-primary text-sm transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-primary text-sm transition-colors duration-200"
                  >
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <div className="flex space-x-4 mt-8 md:mt-0">
                {companyDetails.socialLinks.map((obj, index) => (
                  <Link
                    key={index}
                    to={obj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl transition-colors"
                  >
                    <obj.icon className="hover:text-primary cursor-ponter transition-transform duration-300 hover:scale-110" />
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-white text-sm flex items-center">
                <span className="font-medium mr-2">Phone:</span>
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {companyDetails.phone}
                </a>
              </div>
              <div className="mt-4 text-white text-sm flex items-center">
                <span className="font-medium mr-2">Email:</span>
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {companyDetails.email}
                </a>
              </div>
              <div className="mt-4 text-white text-sm">
                <span className="font-medium mr-2">Address:</span>
                <span>{companyDetails.address}</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center pt-6 border-t border-darkborder/30">
            <p className="text-white text-sm">
              ©{new Date().getFullYear()} CodeSmasher. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
