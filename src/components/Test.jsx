
import React from "react";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const Test = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-sky-600 font-bold text-xl mb-2">
            Our Testimonials
          </h2>
          <h3 className="text-3xl font-semibold text-gray-800">
            D'VINE HEALTHCARE
          </h3>
        </div>

        {/* Testimonial Videos */}
        <div className="flex flex-col md:flex-row gap-10 justify-center mb-16">
          {/* Left video animation */}
          <motion.video
            src="/testimonials1.mp4"
            autoPlay
            muted
            loop
            controls
            className="w-full md:w-[530px] h-[280px] bg-teal-700 rounded-md shadow-lg"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          />

          {/* Right video animation */}
          <motion.video
            src="/testimonials2.mp4"
            autoPlay
            muted
            loop
            controls
            className="w-full md:w-[530px] h-[280px] bg-teal-700 rounded-md shadow-lg"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Test;
