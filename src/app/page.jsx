import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <GetInTouch />
      <Footer />
    </>
  );
}
