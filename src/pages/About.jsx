

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-20 pt-10 p-6 max-w-7xl mx-auto mb-40">
      {/* Image Section */}
      <motion.div
        className="md:w-1/2 overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src="/about-us-banner.jpg"
          alt="About Us Banner"
          loading="lazy"
          className="w-[90%] h-auto mt-5 ml-8 shadow-md rounded-md cursor-pointer"
        />
      </motion.div>

      {/* Text Content */}
      <div className="md:w-1/2 space-y-3 pt-3">
        <div className="font-bold text-sky-500 text-lg uppercase tracking-wide">
          About Us
        </div>

        {/* Main Heading with Typewriter Loop */}
        <div className="font-extrabold text-4xl text-gray-500">
          <Typewriter
            options={{
              strings: ["D'VINE HEALTHCARE"],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
              pauseFor: 2000,
            }}
          />
        </div>

        <div className="text-gray-500 leading-relaxed pt-7 space-y-4">
          <p>
            D’Vine Healthcare is a premier healthcare training institute headquartered in Chennai,
            with branch offices in Nellore and Madurai. With a strong commitment to excellence, we
            specialize in Medical Coding Training and provide 100% placement assistance to aspiring
            professionals.
          </p>
          <p>
            We have established partnerships with 50+ healthcare companies across India, ensuring
            our students get the best career opportunities. Our expansion plans include Bangalore
            and Kerala, as we continue to grow and cater to the rising demand for skilled medical
            coders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
