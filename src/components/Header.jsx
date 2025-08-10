

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = ["/students5.jpg", "/dvinebanner1.jpg", "/students3.jpg"];

const iconBoxes = [
  { img: "/direct.png", title: "Direct Training" },
  { img: "/online-training.png", title: "Online Training" },
  { img: "/college.png", title: "College Training" },
  { img: "/corporate.png", title: "Corporate Training" },
];

const HeroSection = () => {
  return (
    <section id="home" className="mt-20 relative overflow-x-hidden">
      {/* Top Banner Carousel */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          autoplay={{ delay: 4000 }}
          loop
          className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px]"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-[90%] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Triangle Shape - only visible on medium and larger screens */}
        <div className="absolute bottom-0 left-0 w-full border-dotted border-gray-700 border-l-2 border-r-2 h-20 md:h-[14rem] bg-cyan-50 clip-v-shape z-10 hidden md:block border-t-2" />
       
      </div>

      {/* Call to Action Section */}
      <div className="bg-cyan-50 text-center relative z-20 pt-0 md:pt-3 pb-20 px-4 md:px-10">
        <h2 className="pt-8  text-3xl sm:text-4xl font-semibold pb-4 text-black mb-8 text-center">
          Join with us &amp; Be a part of our growing team!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {iconBoxes.map((box, idx) => (
            <div key={idx} className="flex items-center text-center">
              <img
                src={box.img}
                alt={box.title}
                className="w-[10rem] h-[8rem] sm:w-[8rem] sm:h-[7rem] md:w-[12rem] md:h-[10rem] mb-4 object-contain"
              />
              <h3
                className="text-xl md:text-2xl pl-2 font-bold text-black"
                style={{ lineHeight: "2.78rem" }}
              >
                {box.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
