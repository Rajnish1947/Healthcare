

// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-scroll";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const lastScrollY = useRef(0);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const handleNavClick = () => setIsOpen(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }
//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = ["home", "about", "services", "courses", "contact"];

//   return (
//     <nav
//       className={`w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
//         showNavbar ? "translate-y-0" : "-translate-y-full"
//       } bg-white shadow-lg`}
//     >
//       <div className="py-4 px-4 sm:px-6 lg:px-10 max-w-screen-xl mx-auto flex justify-between items-center">
        
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src="/hllogo.png"
//             alt="Logo"
//             className="h-8 sm:h-10 w-auto object-contain"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 text-black text-base lg:text-lg font-medium">
//           {menuItems.map((item) => (
//             <li key={item}>
//               <Link
//                 to={item}
//                 smooth={true}
//                 duration={500}
//                 offset={-80}
//                 onClick={handleNavClick}
//                 className="cursor-pointer hover:text-blue-600 transition"
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Phone Section + Mobile Menu Button */}
//         <div className="flex items-center gap-4">
//           <a
//             href="https://wa.me/919390081856?text=Hi%20I'm%20interested%20in%20your%20services"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-3"
//           >
//             <img
//               src="/phone_icon_3.svg"
//               alt="Phone"
//               className="h-[2.2rem] sm:h-[2.4rem] w-auto"
//             />
//             <div
//               style={{ color: "#0CB8B6" }}
//               className="leading-tight text-xs sm:text-sm md:text-base"
//             >
//               <div>Need help</div>
//               <div>+91 93900 81856</div>
//             </div>
//           </a>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-3xl text-gray-700 focus:outline-none"
//               aria-label="Toggle menu"
//               aria-expanded={isOpen}
//             >
//               {isOpen ? <FiX /> : <FiMenu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ${
//           isOpen ? "max-h-screen" : "max-h-0"
//         }`}
//       >
//         <ul
//           className="text-white text-base sm:text-lg px-4 py-4 space-y-4"
//           style={{
//             fontFamily: "'Lato', Arial, sans-serif",
//             backgroundColor: "#0CB8B6",
//           }}
//         >
//           {menuItems.map((item) => (
//             <li key={item}>
//               <Link
//                 to={item}
//                 smooth={true}
//                 duration={500}
//                 offset={-80}
//                 onClick={handleNavClick}
//                 className="block cursor-pointer"
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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

  const menuItems = ["home", "about", "services", "courses", "contact"];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow-lg`}
    >
      <div className="py-4 px-4 sm:px-6 lg:px-10 max-w-screen-xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/hllogo.png"
            alt="Logo"
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu (only on lg and above) */}
        <ul className="hidden lg:flex gap-6 text-black text-base xl:text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={handleNavClick}
                className="cursor-pointer hover:text-blue-600 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone Section + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/919390081856?text=Hi%20I'm%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <img
              src="/phone_icon_3.svg"
              alt="Phone"
              className="h-[2.2rem] sm:h-[2.4rem] w-auto"
            />
            <div
              style={{ color: "#0CB8B6" }}
              className="leading-tight text-xs sm:text-sm md:text-base"
            >
              <div>Need help</div>
              <div>+91 93900 81856</div>
            </div>
          </a>

          {/* Mobile Menu Button (visible below lg) */}
          <div className="lg:hidden">
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
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul
          className="text-white text-base sm:text-lg px-4 py-4 space-y-4"
          style={{
            fontFamily: "'Lato', Arial, sans-serif",
            backgroundColor: "#0CB8B6",
          }}
        >
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={handleNavClick}
                className="block cursor-pointer"
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
