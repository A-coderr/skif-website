"use client";

import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function InfoBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden md:block fixed top-0 w-full z-50 bg-gray-900 text-white text-sm py-2 px-4 h-10 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full">
        <span className="flex items-center">
          <FaMapMarkerAlt className="inline mr-2" /> 2233 Hurontario St,
          Mississauga
        </span>
        <span className="flex items-center text-center">
          <FaEnvelope className="inline mr-2" /> skiftorontokaratedo@hotmail.com
        </span>
        <span className="flex items-center">
          <FaPhoneAlt className="inline mr-2" /> (905) 815-7563
        </span>
      </div>
    </div>
  );
}
