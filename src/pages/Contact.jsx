
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mb-10 bg-white rounded-lg shadow-lg">
      <div className="text-center text-cyan-500 text-xl font-bold mb-2">Need Any Help?</div>
      <h2 className="text-3xl text-black font-semibold py-3 text-center mb-8">Get in Touch With Us</h2>

      <form className="space-y-6">
        {/* First and Last Name */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="relative flex-1">
            <input
              type="text"
              id="firstName"
              placeholder=" "
              className="peer w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <label
              htmlFor="firstName"
              className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all peer-focus:top-[-8px] peer-focus:text-cyan-500 peer-focus:text-sm bg-white px-1"
            >
              First Name
            </label>
          </div>

          <div className="relative flex-1">
            <input
              type="text"
              id="lastName"
              placeholder=" "
              className="peer w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <label
              htmlFor="lastName"
              className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all peer-focus:top-[-8px] peer-focus:text-cyan-500 peer-focus:text-sm bg-white px-1"
            >
              Last Name
            </label>
          </div>
        </div>

        {/* Phone and Email */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="relative flex-1">
            <input
              type="text"
              id="phone"
              placeholder=" "
              className="peer w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <label
              htmlFor="phone"
              className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all peer-focus:top-[-8px] peer-focus:text-cyan-500 peer-focus:text-sm bg-white px-1"
            >
              Phone
            </label>
          </div>

          <div className="relative flex-1">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all peer-focus:top-[-8px] peer-focus:text-cyan-500 peer-focus:text-sm bg-white px-1"
            >
              Email
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            id="message"
            rows="5"
            placeholder=" "
            className="peer w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all peer-focus:top-[-8px] peer-focus:text-cyan-500 peer-focus:text-sm bg-white px-1"
          >
            Your Message
          </label>
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
