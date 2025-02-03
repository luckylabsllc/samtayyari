import MenuBar from "@/components/MenuBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Consulting from "@/components/Consulting";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] transition-colors duration-300">
      <MenuBar />
      <Hero />
      <About />
      <Projects />
      <Consulting />
      <Contact />
    </div>
  );
};

export default Index;