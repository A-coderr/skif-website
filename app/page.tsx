import AboutUsSection from "./sections/AboutUs";
import FAQ from "./sections/FAQ";
import HeroSection from "./sections/Hero";
import InstructorsHome from "./sections/InstructorsHome";
import ClassesOffered from "./sections/ClassesOffered";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ClassesOffered />
      <InstructorsHome />
      <Testimonials />
      <FAQ />
    </>
  );
}
