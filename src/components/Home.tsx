import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { externalLinks, tagline } from "@/lib/site";

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
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="max-w-xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden mx-auto mb-6">
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Sam Tayyari
          </h1>
          <p className="text-secondary text-lg mb-10">{tagline}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="space-y-3"
        >
          {externalLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-5 py-4 bg-accent dark:bg-[#222222] hover:bg-muted dark:hover:bg-[#2a2a2a] text-foreground rounded-lg transition-colors duration-200 group"
            >
              <span className="font-medium">{link.label}</span>
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-90 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
