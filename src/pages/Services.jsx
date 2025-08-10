

import React from "react";

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
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 max-w-4xl mx-auto">
        We're Providing Best Placement Services
      </div>

      {/* Company Logos Section */}
      <div className="overflow-x-auto  mb-16">
        <div className="flex gap-4 sm:gap-6 w-max px-2 sm:px-4 py-4">
          {companyLogos.map((logo, i) => (
            <div
              key={i}
              className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] h-[100px] sm:h-[160px] md:h-[200px] 
                         border border-sky-500 rounded-lg bg-sky-50 
                         hover:border-sky-700 hover:bg-sky-800 transition 
                         flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-[100px] sm:max-w-[120px] md:max-w-[140px] max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="max-w-7xl shadow-lg mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-10 px-4 sm:px-6 md:px-8 py-6">
        {/* Image Column */}
        <div className="w-full md:w-1/2 h-[310px] sm:h-[350px] md:h-[700px] order-1 md:order-2">
          <img
            src="/whoweare.jpg"
            alt="Who We Are"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

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
              <div key={index} className="flex items-start gap-3">
                <span className="text-gray-800 mt-1 text-lg sm:text-2xl">▪</span>
                <p className="text-gray-600 text-sm sm:text-base">
                  <strong className="text-gray-800">{item.title}</strong> – {item.desc}
                </p>
              </div>
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

          <button className="mt-8 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg md:text-xl bg-sky-700 text-white rounded hover:bg-sky-900 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

// Reusable course item
const CourseItem = ({ title }) => (
  <div className="flex items-start gap-2 w-full sm:w-1/2">
    <img src="/checked_icon.svg" alt="check" className="w-5 sm:w-6 h-5 sm:h-6 mt-1" />
    <p className="font-bold text-sm sm:text-base">{title}</p>
  </div>
);

export default Services;
