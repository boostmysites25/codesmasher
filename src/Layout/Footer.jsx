import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useTheme } from "../Context/ThemeContext";
import { companyDetails } from "../util/constant";
import { PhoneCall } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="relative bg-primary dark:bg-gray-900 z-20 overflow-hidden">
      <div
        className={`absolute ${
          isDarkMode ? `flex` : "hidden"
        } -bottom-[15rem] blur-3xl left-0 w-full h-full bg-footerBackground -z-10 `}
      />
      <footer className="w-full   py-16  z-10">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 gap-8 items-start">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="logo" className="w-[15rem]" />
              </div>
              <p className="text-white text-sm max-w-xs">
                CodeSmasher drives business evolution beyond traditional
                boundaries.
              </p>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about-us"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-medium mb-4">Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/blogs"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-gray-300 text-sm"
                  >
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <div className="flex space-x-4 mt-8">
                {companyDetails.socialLinks.map((obj, index) => (
                  <Link
                    key={index}
                    to={obj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white  text-2xl transition-colors"
                  >
                    <obj.icon className="hover:text-darkblack dark:hover:text-primary cursor-ponter" />
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-white text-sm">
                Phone :
                <a href={`tel:${companyDetails.phone}`} className="ml-2">
                  {companyDetails.phone}
                </a>
              </div>
              <div className="mt-4 text-white text-sm">
                Email :
                <a href={`mailto:${companyDetails.email}`} className="ml-2">
                  {companyDetails.email}
                </a>
              </div>
              <div className="mt-4 text-white text-sm">
                Address :<span className="ml-2">{companyDetails.address}</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
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
