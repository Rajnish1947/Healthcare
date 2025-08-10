
import React from "react";

const feedbackStats = [
  { icon: "/funfact_icon_1.png", number: "5", suffix: "K+", title: "Trained Students" },
  { icon: "/funfact_icon_2.png", number: "4", suffix: "K+", title: "Placed Students" },
  { icon: "/funfact_icon_3.png", number: "10", suffix: "K+", title: "Qualified Trainers" },
  { icon: "/funfact_icon_4.png", number: "75", suffix: "+", title: "Business Partners" },
];

const Feedback = () => {
  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/centerbg.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-y-10">
          {feedbackStats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 w-full sm:w-1/2 lg:w-1/4 px-4"
            >
              {/* Circular Icon with shadow */}
              <div className="w-20  h-20 bg-white rounded-full flex md:flex-col items-center justify-center shrink-0 shadow-[0_0_15px_#06c8eb]">
                <img
                  src={stat.icon}
                  alt="icon"
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Text Content */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white flex items-center gap-1 leading-none">
                  <span>{stat.number}</span>
                  <span>{stat.suffix}</span>
                </h2>
                <p className="text-xl sm:text-2xl text-white font-bold mt-1">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
