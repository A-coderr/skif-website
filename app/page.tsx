import AboutUsSection from "./sections/AboutUs";
import FAQ from "./sections/FAQ";
import HeroSection from "./sections/Hero";
import InstructorsHome from "./sections/InstructorsHome";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <InstructorsHome />
      <FAQ />
    </>
  );
}
