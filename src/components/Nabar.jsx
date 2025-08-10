
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavClick = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-white shadow-md fixed top-0 left-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="py-3 px-4 sm:px-6 lg:px-10 max-w-screen-xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/hllogo.png"
            alt="Logo"
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </div>

        {/* Desktop Menu - visible on md+ */}
        <ul className="text-gray-700 text-base lg:text-lg hidden md:flex gap-6 font-normal">
          {["home", "about", "services", "courses", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={handleNavClick}
                className="cursor-pointer hover:text-blue-600"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone section - always visible */}
        <a
          href="https://wa.me/919390081856?text=Hi%20I'm%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 ml-4"
        >
          <img
            src="/phone_icon_3.svg"
            alt="Phone"
            className="h-[2rem] md:h-[3rem] w-auto"
          />
          <div className="leading-tight text-[10px] sm:text-[15px] md:text-xl text-cyan-400">
            <div>Need help</div>
            <div>+91 93900 81856</div>
          </div>
        </a>

        {/* Mobile Menu Button - visible on small screens */}
        <div className="md:hidden ml-4">
          <button
            onClick={toggleMenu}
            className="text-3xl text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="text-gray-700 text-base sm:text-lg px-4 py-4 space-y-4">
          {["home", "about", "services", "courses", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={handleNavClick}
                className="block cursor-pointer hover:text-blue-600"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
