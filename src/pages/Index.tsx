import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import MenuBar from "@/components/MenuBar";

const Index = () => {
  return (
    <div className="bg-white">
      <MenuBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;