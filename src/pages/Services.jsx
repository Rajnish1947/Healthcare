
import React from "react";
import { motion } from "framer-motion";

const companyLogos = [
  { src: "/S2M-Health.jpg", alt: "Optum" },
  { src: "/corrohealth-1.png", alt: "Omega Healthcare" },
  { src: "/Coronis-Ajuba.png", alt: "Visionary RCM" },
  { src: "/clarus.png", alt: "NaviHealth" },
  { src: "/omega healthcare.png", alt: "Episource" },
  { src: "/ventra-health.png", alt: "Vee Technologies" },
  { src: "/veetech.png", alt: "Cognizant" },
  { src: "/agshealth.png", alt: "AGS Health" },
];

const Services = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-20 bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 max-w-4xl mx-auto"
      >
        We're Providing Best Placement Services
      </motion.div>

      {/* Company Logos */}
      <div className="overflow-x-auto mb-16">
        <div className="flex gap-4 sm:gap-6 w-max px-2 sm:px-4 py-4">
          {companyLogos.map((logo, i) => (
            <motion.div
              key={i}
              className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] h-[100px] sm:h-[160px] md:h-[200px] 
                         border border-sky-500 rounded-lg bg-sky-50 
                         flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-[100px] sm:max-w-[120px] md:max-w-[140px] max-h-full object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Who We Are Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl shadow-lg mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-10 px-4 sm:px-6 md:px-8 py-6"
      >
        {/* Image Column */}
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full md:w-1/2 h-[310px] sm:h-[350px] md:h-[500px] order-1 md:order-2 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src="/whoweare.jpg"
            alt="Who We Are"
            className="w-full h-full md:h-[152] object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 py-4 space-y-6 order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Who We Are</h2>
          <h3 className="font-bold text-lg sm:text-xl text-sky-500">
            We are the Pioneers in Nellore
          </h3>

          <div className="space-y-4">
            {[
              {
                title: "Expert-Led Training",
                desc: "Learn from experienced professionals in the healthcare industry.",
              },
              {
                title: "100% Placement Assistance",
                desc: "Get placed in top healthcare companies across India.",
              },
              {
                title: "Tie-Ups with 50+ Companies",
                desc: "We have a strong network to help you land the best job opportunities.",
              },
              {
                title: "In-House Projects",
                desc: "Gain hands-on experience with real-time Medical Coding projects.",
              },
              {
                title: "Expanding into RCM",
                desc: "We are in the process of growing into Complete RCM (Revenue Cycle Management) projects.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start gap-3"
              >
                <span className="text-gray-800 mt-1 text-lg sm:text-2xl">▪</span>
                <p className="text-gray-600 text-sm sm:text-base">
                  <strong className="text-gray-800">{item.title}</strong> – {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Courses */}
          <div className="pt-6">
            <div className="font-bold text-sky-700 text-lg sm:text-xl mb-2">
              Our Courses:
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              We offer industry-leading Medical Coding Training programs designed to help you succeed:
            </p>

            <div className="pt-5 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <CourseItem title="CCS Training (Certified Coding Specialist)" />
                <CourseItem title="Basic Medical Coding Training" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <CourseItem title="Advanced Medical Coding Training" />
                <CourseItem title="CPC Training (Certified Professional Coder)" />
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mt-8 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg md:text-xl bg-sky-700 text-white rounded hover:bg-sky-900 transition"
          >
            Read More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

// Reusable Course Item
const CourseItem = ({ title }) => (
  <motion.div
    className="flex items-start gap-2 w-full sm:w-1/2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <img src="/checked_icon.svg" alt="check" className="w-5 sm:w-6 h-5 sm:h-6 mt-1" />
    <p className="font-bold text-sm sm:text-base">{title}</p>
  </motion.div>
);

export default Services;
