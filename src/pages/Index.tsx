import MenuBar from "@/components/MenuBar";
import Home from "@/components/Home";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black transition-colors duration-300">
      <MenuBar />
      <Home />
      <Footer />
    </div>
  );
};

export default Index;
