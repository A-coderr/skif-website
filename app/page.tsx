import NavMenu from "./components/NavMenu";
import Footer from "./sections/Footer";
import HeroSection from "./sections/Hero";
import Instructors from "./sections/Instructors";
import Karate from "./sections/Karate";

export default function Home() {
  return (
    <>
      <NavMenu />
      <HeroSection />
      <Karate />
      <Instructors />
      <Footer />
    </>
  );
}
