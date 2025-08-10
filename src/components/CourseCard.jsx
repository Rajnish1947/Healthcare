

import React from "react";
import { FaCheck } from "react-icons/fa";

const CourseCard = () => {
  return (
    <div className="bg-cyan-400 inline-block mx-auto">
      <div
        className="relative rounded-[5px] bg-cover bg-center group w-full h-[420px] sm:h-[450px] md:h-[500px] overflow-hidden"
        style={{
          backgroundImage: `url('/pricing_bg.jpg')`,
        }}
      >
        {/* Hover Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 sm:group-hover:opacity-90 transition-opacity duration-500"
          style={{
            backgroundImage: `url('/course.png')`,
          }}
        ></div>

        {/* Content */}
        <div className="relative space-y-8 z-10 p-4 sm:p-6 text-gray-800 group-hover:text-white transition-colors duration-500">
          <h3 className="text-lg sm:text-xl md:text-[20px] lg:text-[24px] font-semibold mb-2">
            Advanced Medical Coding Training (AMCT) - 60 Days
          </h3>
          <hr className="border-y-cyan-400 mb-3 hover:text-white sm:mb-4" />

          <ul className="space-y-2 sm:space-y-6 text-inherit text-sm sm:text-base md:text-[16px] lg:text-[18px] font-medium transition-colors duration-500">
            {[
              "Master advanced coding techniques.",
              "Focus on real-world scenarios.",
              "Enhance coding accuracy skills.",
              "Build expertise in compliance.",
              "Ideal for career progression.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheck className="mt-1 text-xs sm:text-sm group-hover:text-white text-cyan-400 transition-colors duration-500" />
                <p className="text-inherit">{item}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 sm:mt-8">
            <a
              href="#pricing"
              className="inline-block bg-cyan-500 hover:bg-cyan-700 group-hover:bg-white group-hover:text-blue-700 text-white text-sm sm:text-[16px] md:text-[18px] font-semibold py-2 sm:py-3 px-6 sm:px-12 rounded transition-all duration-300"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
