import MenuBar from "@/components/MenuBar";
import Home from "@/components/Home";

// One screen, no scroll: fixed header + centered content filling the rest
// of the viewport exactly.
const Index = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <MenuBar />
      <Home />
    </div>
  );
};

export default Index;
