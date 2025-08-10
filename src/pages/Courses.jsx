

import React, { useRef } from "react";
import CourseCard from "./../components/CourseCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Courses = () => {
  const scrollContainerRef = useRef(null);

  const nextSlide = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-4 md:px-10 mb-20 pb-10 mt-10 mx-auto max-w-7xl">
      {/* Heading and arrows */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-20 px-2 md:px-10 gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
          Our Courses
        </h2>
        <div className="hidden sm:flex gap-4">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="p-3 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-300 hover:text-white transition"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="p-3 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-300 hover:text-white transition"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>

      {/* Scrollable Course Cards */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory   scrollbar-hide scroll-smooth"
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="snap-center flex-shrink-0 px-2 w-full sm:w-1/2 lg:w-1/3"
          >
            <CourseCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
