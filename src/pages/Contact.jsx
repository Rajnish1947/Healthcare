
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mb-10 bg-white  ">
      <div className="text-center text-cyan-500 text-xl py-2 font-bold mb-2">Need Any Help?</div>
      <h2 className="text-3xl text-black font-semibold py-3 text-center mb-8">Get in Touch With Us</h2>

      <form className="space-y-6">
        {/* First and Last Name */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Phone and Email */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Phone"
            className="flex-1 py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-cyan-500 text-white text-xl px-6 py-3 rounded-md hover:bg-cyan-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
