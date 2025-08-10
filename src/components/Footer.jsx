
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-cover bg-no-repeat bg-center text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {/* Logo & Social */}
          <div>
            <img
              src="/dvine-logo-removebg-preview.png"
              alt="Logo"
              className="w-36 sm:w-44 md:w-48 lg:w-52 mb-4"
            />
            <p className="text-sm sm:text-base md:text-lg">
              Best Academy for Medical Coding
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl py-4 font-semibold mt-4 mb-3">
              Follow us on
            </h3>
            <div className="flex space-x-4 text-white text-lg sm:text-xl md:text-2xl">
              <a
                href="https://www.facebook.com/share/18HjX2pfsr/?mibextid=wwXIfr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF className="bg-cyan-300 rounded-full p-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/dvine-healthcare-128469343"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/dvinehealthcare?s=11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/dvine_healthcare/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm sm:text-base md:text-lg">
              <li>
                <a href="#home" className="hover:text-cyan-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300">
                  Courses
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm sm:text-base md:text-lg">
              <div>
                <p>
                  D.NO.25-1, 1994/1, Podalakur Rd, Sanjay Gandhi Nagar, Nellore,
                  Andhra Pradesh - 524 004
                </p>
              </div>
              <div>
                <p>
                  <a href="tel:+919390081856" className="hover:text-cyan-300">
                    +91 93900 81856
                  </a>
                </p>
                <p>
                  <a href="tel:+919840537894" className="hover:text-cyan-300">
                    +91 98405 37894
                  </a>
                </p>
                <p>
                  <a href="tel:+919363339598" className="hover:text-cyan-300">
                    +91 93633 39598
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <a
                    href="mailto:Director@dvinehealthcare.in"
                    className="hover:text-cyan-300"
                  >
                    director@dvinehealthcare.in
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:Admin@dvinehealthcare.in"
                    className="hover:text-cyan-300"
                  >
                    admin@dvinehealthcare.in
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:Recruiter@dvinehealthcare.in"
                    className="hover:text-cyan-300"
                  >
                    recruiter@dvinehealthcare.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Location (Google Map) */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              Location
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.1995721864496!2d79.94896787414606!3d14.4156559815799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf2e8b8c0d3d1%3A0x70d6a48ca2c258f4!2sd%2025%2C%201994%2F1%2C%20Podalakur%20Rd%2C%20Sanjay%20Gandhi%20Nagar%2C%20Nellore%2C%20Andhra%20Pradesh%20524004!5e0!3m2!1sen!2sin!4v1735046690777!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
