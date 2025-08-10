
import React from "react";

const Hrmaam = () => {
  return (
    <section className="py-10 mt-20 mb-10 pt-7 pb-6 bg-white">
      <div className="w-full max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4 order-2 sm:order-1 ml-0 md:ml-4">
          <h2 className="text-3xl font-bold">Our Visionary Leader - DEEPIKA VIJAYAN</h2>
          <h3 className="text-sky-500 font-semibold">CEO & Founder of D'VINE HEALTHCARE</h3>
          <h4 className="text-3xl font-bold text-gray-800">We are the Pioneers in Nellore</h4>

          <p className="text-gray-600">
            Deepika Vijayan, the visionary CEO and Founder of D'VINE HEALTHCARE, is a trailblazer in the field of medical coding education and healthcare career development. With over 5 years of experience in the healthcare and medical coding industry, she has a proven track record of excellence in training and mentoring aspiring professionals.
          </p>

          <p className="text-gray-600">
            Driven by a passion for empowering individuals and bridging the gap between education and employment, she established D'VINE HEALTHCARE as the first-of-its-kind Medical Coding Training & Placement Academy in Nellore District. Their mission is to deliver industry-relevant training, ensure certifications, and provide guaranteed placement support to every student.
          </p>

          <p className="text-gray-600">
            With a commitment to quality education, innovation, and student success, Deepika Vijayan continues to inspire and lead the organization toward transforming careers and contributing to the healthcare industry’s growth.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 order-1 sm:order-2 flex justify-center">
          <img
            src="/deepika.jpg"
            alt="Deepika Vijayan - CEO of D'VINE HEALTHCARE"
            className="w-full max-w-md md:max-w-lg rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hrmaam;
