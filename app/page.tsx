import AboutUsSection from "./sections/AboutUs";
import FAQ from "./sections/FAQ";
import HeroSection from "./sections/Hero";
import InstructorsHome from "./sections/InstructorsHome";
import Karate from "./sections/Karate";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Karate />
      <InstructorsHome />
      <AboutUsSection />
      <FAQ />
    </>
  );
}
