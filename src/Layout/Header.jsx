import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import logo from "../assets/images/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/contact-us");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 !z-50 bg-black/30 dark:bg-transparent shadow-md backdrop-blur-sm">
      <div className="wrapper">
        <div className="flex items-center justify-between py-5">
          <div className="flex-shrink-0">
            <Link to="/" className="w-auto text-white">
              <img
                src={logo}
                alt="logo"
                className="w-[3rem] md:w-[4.3rem] scale-125 ml-[1rem]"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              "/",
              "/about-us",
              "/services",
              "/portfolio",
              "/blogs",
              // "/careers",
            ].map((path, index) => (
              <Link
                key={index}
                to={path}
                className={`text-white hover:text-primary capitalize dark:hover:text-primary ${
                  isActive(path) ? "font-bold text-primary" : ""
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").replace("-", " ")}
              </Link>
            ))}

            <button
              onClick={navigateTo}
              className="primary-btn !bg-white !text-darkbackground dark:!text-white dark:!bg-primary"
            >
              Let's Connect
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 text-gray-600`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={navigateTo}
              className="primary-btn !bg-white !text-darkbackground dark:!text-white dark:!bg-primary"
            >
              Let's Connect
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 text-gray-600`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
            {[
              "/",
              "/about-us",
              "/services",
              "/portfolio",
              "/blogs",
              "/contact-us",
              "/careers",
            ].map((path, index) => (
              <Link
                key={index}
                to={path}
                onClick={toggleMenu}
                className={`block px-3 py-2 capitalize rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  isActive(path) ? "bg-gray-100 dark:bg-gray-800" : ""
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").replace("-", " ")}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
