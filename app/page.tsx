import NavMenu from "./components/NavMenu";
import Footer from "./sections/Footer";
import HeroSection from "./sections/Hero";
import Karate from "./sections/Karate";

export default function Home() {
  return (
    <>
      <NavMenu />
      <HeroSection />
      <Karate />
      {/* Add more sections here as needed */}
      <Footer />
    </>
  );
}
