import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";

const MenuBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#f5f5f8]/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80" : "bg-[#f5f5f8]/40 backdrop-blur-sm dark:bg-gray-900/40"
      }`}
    >
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="font-bold text-lg dark:text-white">Sam Tayyari</div>
          <ul className="flex items-center justify-center space-x-8 text-xs absolute left-1/2 transform -translate-x-1/2">
            <motion.li
              whileHover={{ opacity: 0.7 }}
              className="cursor-pointer"
            >
              <a onClick={scrollToTop}>Home</a>
            </motion.li>
            <motion.li
              whileHover={{ opacity: 0.7 }}
              className="cursor-pointer"
            >
              <a href="#about">About</a>
            </motion.li>
            <motion.li
              whileHover={{ opacity: 0.7 }}
              className="cursor-pointer"
            >
              <a href={isDarkMode ? "#projects" : "#proceedings"}>
                {isDarkMode ? "Projects" : "Proceedings"}
              </a>
            </motion.li>
            <motion.li
              whileHover={{ opacity: 0.7 }}
              className="cursor-pointer"
            >
              <a href="#writings">Writings</a>
            </motion.li>
            <motion.li
              whileHover={{ opacity: 0.7 }}
              className="cursor-pointer"
            >
              <a href="#contact">Contact</a>
            </motion.li>
          </ul>
          <div className="flex items-center space-x-4">
            <span className="font-bold text-sm">Legal</span>
            <Switch
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              className="data-[state=checked]:bg-gray-800"
            />
            <span className="font-bold text-sm">Business</span>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default MenuBar;