import MenuBar from "@/components/MenuBar";
import Home from "@/components/Home";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] transition-colors duration-300">
      <MenuBar />
      <Home />
      <Footer />
    </div>
  );
};

export default Index;
