

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hrmaam = () => {
  const fullText = "Our Visionary Leader - DEEPIKA VIJAYAN";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) index = 0; // reset to loop continuously
    }, 100); // typing speed in ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 mt-20 mb-10 pt-7 pb-6 bg-white">
      <div className="w-full max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-4 order-2 sm:order-1 ml-0 md:ml-4"
        >
          <h2 className="text-3xl font-bold">
            {displayedText}
          </h2>
          <h3 className="text-sky-500 font-semibold">
            CEO & Founder of D'VINE HEALTHCARE
          </h3>
          <h4 className="text-3xl font-bold text-gray-800">
            We are the Pioneers in Nellore
          </h4>

          <p className="text-gray-600">
            Deepika Vijayan, the visionary CEO and Founder of D'VINE HEALTHCARE, is a trailblazer in the field of medical coding education and healthcare career development. With over 5 years of experience in the healthcare and medical coding industry, she has a proven track record of excellence in training and mentoring aspiring professionals.
          </p>

          <p className="text-gray-600">
            Driven by a passion for empowering individuals and bridging the gap between education and employment, she established D'VINE HEALTHCARE as the first-of-its-kind Medical Coding Training & Placement Academy in Nellore District. Their mission is to deliver industry-relevant training, ensure certifications, and provide guaranteed placement support to every student.
          </p>

          <p className="text-gray-600">
            With a commitment to quality education, innovation, and student success, Deepika Vijayan continues to inspire and lead the organization toward transforming careers and contributing to the healthcare industry’s growth.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 order-1 sm:order-2 flex justify-center"
        >
          <img
            src="/deepika.jpg"
            alt="Deepika Vijayan - CEO of D'VINE HEALTHCARE"
            className="w-full max-w-md md:max-w-lg rounded-lg object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hrmaam;
