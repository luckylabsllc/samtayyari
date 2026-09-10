import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Writing", to: "/writing" },
  { label: "Video", to: "/video" },
  { label: "Contact", to: "/contact" },
];

const MenuBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDarkMode = mounted && resolvedTheme === "dark";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#f5f5f8]/80 backdrop-blur-md shadow-sm dark:bg-black/80" : "bg-[#f5f5f8]/40 backdrop-blur-sm dark:bg-black/40"
      }`}
    >
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 h-16">
          <Link to="/" className="font-bold text-lg dark:text-white">
            Sam Tayyari
          </Link>

          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleDarkMode} className="p-2">
              {isDarkMode ? <Moon className="h-5 w-5 text-white" /> : <Sun className="h-5 w-5" />}
            </button>

            <button className="p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <ul className="hidden md:flex items-center justify-center space-x-8 text-xs absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <motion.li key={item.to} whileHover={{ opacity: 0.7 }}>
                <Link to={item.to}>{item.label}</Link>
              </motion.li>
            ))}
          </ul>

          <button onClick={toggleDarkMode} className="hidden md:block p-2">
            {isDarkMode ? <Moon className="h-5 w-5 text-white" /> : <Sun className="h-5 w-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black shadow-lg">
            <ul className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <li key={item.to} className="py-2">
                  <Link to={item.to} className="block" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default MenuBar;
