"use client";

import { useEffect, useState } from "react";

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
      📍 123 Dojo Street, City | 📞 (123) 456-7890
    </div>
  );
}
