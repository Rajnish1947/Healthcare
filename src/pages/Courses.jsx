

import React, { useRef } from "react";
import CourseCard from "./../components/CourseCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Courses = () => {
  const scrollContainerRef = useRef(null);

  const nextSlide = () => {
    scrollContainerRef.current?.scrollBy({
      left: scrollContainerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    scrollContainerRef.current?.scrollBy({
      left: -scrollContainerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-4 md:px-10 mb-20 pb-10 mt-10 mx-auto max-w-7xl">
      {/* Heading and arrows */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-14 md:mb-20 gap-4 px-2 md:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
          Our Courses
        </h2>
        <div className="hidden sm:flex gap-4">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="p-3 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-300 hover:text-white transition-all duration-300"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="p-3 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-300 hover:text-white transition-all duration-300"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>

      {/* Scrollable Course Cards */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 scrollbar-hide"
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="snap-center flex-shrink-0 w-[90%] sm:w-[48%] md:w-[32%] lg:w-[31%] px-2"
          >
            <CourseCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
