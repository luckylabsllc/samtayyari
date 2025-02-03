import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MenuBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#f5f5f8]/80 backdrop-blur-md shadow-sm" : "bg-[#f5f5f8]/40 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto">
        <ul className="flex items-center justify-center h-12 px-4 space-x-8 text-sm">
          <motion.li
            whileHover={{ opacity: 0.7 }}
            className="cursor-pointer"
          >
            <a href="#home">Home</a>
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
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li
            whileHover={{ opacity: 0.7 }}
            className="cursor-pointer"
          >
            <a href="#resume">Resume</a>
          </motion.li>
          <motion.li
            whileHover={{ opacity: 0.7 }}
            className="cursor-pointer"
          >
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default MenuBar;