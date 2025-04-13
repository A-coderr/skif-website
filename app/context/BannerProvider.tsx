"use client";
import { createContext, useContext, useState, useEffect } from "react";

const BannerContext = createContext({ showBanner: true });

export const useBanner = () => useContext(BannerContext);

export const BannerProvider = ({ children }: { children: React.ReactNode }) => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBanner(currentScrollY < lastScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BannerContext.Provider value={{ showBanner }}>
      {children}
    </BannerContext.Provider>
  );
};
