import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const MenuBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
          
          {/* Mobile dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="md:hidden p-2"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-white" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center justify-center space-x-8 text-xs absolute left-1/2 transform -translate-x-1/2">
            <motion.li whileHover={{ opacity: 0.7 }} className="cursor-pointer">
              <a onClick={scrollToTop}>Home</a>
            </motion.li>
            <motion.li whileHover={{ opacity: 0.7 }} className="cursor-pointer">
              <a href="#about">About</a>
            </motion.li>
            <motion.li whileHover={{ opacity: 0.7 }} className="cursor-pointer">
              <a href={isDarkMode ? "#projects" : "#proceedings"}>
                {isDarkMode ? "Projects" : "Proceedings"}
              </a>
            </motion.li>
            <motion.li whileHover={{ opacity: 0.7 }} className="cursor-pointer">
              <a href="#writings">Writings</a>
            </motion.li>
            <motion.li whileHover={{ opacity: 0.7 }} className="cursor-pointer">
              <a href="#contact">Contact</a>
            </motion.li>
          </ul>

          {/* Desktop dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="hidden md:block p-2"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-white" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
            <ul className="px-4 py-2 space-y-2">
              <li className="py-2"><a onClick={scrollToTop} className="block">Home</a></li>
              <li className="py-2"><a href="#about" className="block">About</a></li>
              <li className="py-2">
                <a href={isDarkMode ? "#projects" : "#proceedings"} className="block">
                  {isDarkMode ? "Projects" : "Proceedings"}
                </a>
              </li>
              <li className="py-2"><a href="#writings" className="block">Writings</a></li>
              <li className="py-2"><a href="#contact" className="block">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default MenuBar;