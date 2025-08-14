


import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {/* Logo & Social */}
          <div className="flex flex-col items-start">
            <img
              src="/dvine-logo-removebg-preview.png"
              alt="Logo"
              className="w-36 sm:w-44 md:w-48 lg:w-52 mb-4"
            />
            <p className="text-sm sm:text-base md:text-lg mb-4">
              Best Academy for Medical Coding
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">Follow us on</h3>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/18HjX2pfsr/?mibextid=wwXIfr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-600 transition-transform transform hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/dvine-healthcare-128469343"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-600 transition-transform transform hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/dvinehealthcare?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-600 transition-transform transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/dvine_healthcare/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-600 transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm sm:text-base md:text-lg">
              {["Home", "About Us", "Services", "Courses", "Contact Us"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm sm:text-base md:text-lg">
              <p>D.NO.25-1, 1994/1, Podalakur Rd, Sanjay Gandhi Nagar, Nellore, Andhra Pradesh - 524 004</p>
              <div className="space-y-1">
                {["+91 93900 81856", "+91 98405 37894", "+91 93633 39598"].map((phone, i) => (
                  <p key={i}>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-cyan-400 transition-colors duration-300">
                      {phone}
                    </a>
                  </p>
                ))}
              </div>
              <div className="space-y-1">
                {["director@dvinehealthcare.in", "admin@dvinehealthcare.in", "recruiter@dvinehealthcare.in"].map((email, i) => (
                  <p key={i}>
                    <a href={`mailto:${email}`} className="hover:text-cyan-400 transition-colors duration-300">
                      {email}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.1995721864496!2d79.94896787414606!3d14.4156559815799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf2e8b8c0d3d1%3A0x70d6a48ca2c258f4!2sd%2025%2C%201994%2F1%2C%20Podalakur%20Rd%2C%20Sanjay%20Gandhi%20Nagar%2C%20Nellore%2C%20Andhra%20Pradesh%20524004!5e0!3m2!1sen!2sin!4v1735046690777!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
              className="rounded-md shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} D'VINE HEALTHCARE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
