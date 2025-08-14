

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const slides = [
  "https://media.istockphoto.com/id/2151094353/photo/rainbow-colored-fruits-and-vegetables-banner.jpg?s=1024x1024&w=is&k=20&c=wwSD0gmD02c09mmphrs6O8-4H3v1cAatLqvmhZ6pMms=",
  "https://www.jnncollege.edu.in/wp-content/uploads/2019/03/placementcell.png",
  "https://assets.telegraphindia.com/telegraph/2022/Jul/1658477709_students.jpg",
];

const iconBoxes = [
  { img: "/direct.png", title: "Direct Training" },
  { img: "/online-training.png", title: "Online Training" },
  { img: "/college.png", title: "College Training" },
  { img: "/corporate.png", title: "Corporate Training" },
];

const HeroSection = () => {
  const headingText = "Join with us & Be a part of our growing team!";

  return (
    <section id="home" className="mt-20 relative overflow-x-hidden">
      {/* Top Banner Carousel */}
      <div className="relative  w-full">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          autoplay={{ delay: 4000 }}
          loop
          className="w-full"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="w-full relative"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full max-h-[85vh] object-cover"
                  loading="lazy"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Call to Action Section */}
      <div className="bg-cyan-50 text-center relative z-20 pt-0 md:pt-20 pb-15 px-4 md:px-10">
        {/* Looping Typewriter Heading without cursor line */}
        <motion.h2
          className="pt-20 text-3xl sm:text-4xl font-semibold pb-4 text-black mb-12 text-center inline-block"
          style={{
            textShadow: "2px 2px 8px rgba(0,0,0,0.2)",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          animate={{ width: ["0ch", `${headingText.length}ch`, "0ch"] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1,
          }}
        >
          {headingText}
        </motion.h2>

        {/* Training Type Cards */}
        <div className="grid grid-cols-1 mt-18 pt-[1rem] pb-[12rem] sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {iconBoxes.map((box, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
            >
              <img
                src={box.img}
                alt={box.title}
                className="w-[8rem] h-[3rem] md:w-[8rem] md:h-[6rem] mb-4 object-contain"
              />
              <h3 className="text-xl md:text-2xl font-bold text-black">
                {box.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
