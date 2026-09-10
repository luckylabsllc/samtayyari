import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { externalLinks } from "@/lib/site";

const Home = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted so the theme-dependent photo doesn't flash the wrong one.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <div className="w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden mb-6">
          <img
            src={
              resolvedTheme === "dark"
                ? "/lovable-uploads/993e0342-f75a-426f-a345-09700c730629.png"
                : "/lovable-uploads/f2766dbd-a473-4fd2-b01d-99800268e491.png"
            }
            alt="Sam Tayyari"
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Sam Tayyari
        </h1>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {externalLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-x-2">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
              {i < externalLinks.length - 1 && (
                <span className="text-secondary" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
