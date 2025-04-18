import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="w-full p-6 my-10 max-w-7xl mx-auto text-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <motion.div
          className="w-full md:w-1/2 space-y-4 md:space-y-8 mb-6"
          initial={{ opacity: 0, x: -50 }} //Initial position and opacity
          animate={{ opacity: 1, x: 0 }} //Final position and opacity
          transition={{ duration: 0.6, delay: 0.3 }} //Animation duration and delay
        >
          {/* Location */}
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="h-6 w-6 text-[#B71C1C] flex-shrink-0" />
            <p className="text-xs sm:text-base md:text-md lg:text-lg truncate">
              <strong>2233 Hurontario St, Mississauga, ON L5A 2E9</strong>
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <FaEnvelope className="h-6 w-6 text-[#B71C1C] flex-shrink-0" />
            <p className="text-xs sm:text-base md:text-md lg:text-lg truncate">
              <strong>skiftorontokaratedo@hotmail.com</strong>
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="h-6 w-6 text-[#B71C1C] flex-shrink-0" />
            <p className="text-xs sm:text-base md:text-md lg:text-lg truncate">
              <strong>(905) 815-7563</strong>
            </p>
          </div>
        </motion.div>

        {/* Right Side (Google Maps) */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }} //Initial position and opacity
          animate={{ opacity: 1, x: 0 }} //Final position and opacity
          transition={{ duration: 0.6, delay: 0.5 }} //Animation duration and delay
        >
          <iframe
            src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=2233%20Hurontario%20St,%20Mississauga,%20ON%20L5A%202E9+(Skif%20Karate%20Canada)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            className="h-50 xs:h-50 sm:h-72 md:h-80 lg:h-96"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
