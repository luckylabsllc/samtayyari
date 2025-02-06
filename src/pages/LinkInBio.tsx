
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

const LinkInBio = () => {
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate a minimal loading time to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const links = [
    {
      title: "Official Website",
      url: "https://samtayyari.com",
      description: "Visit my personal website"
    },
    {
      title: "Lucky Labs",
      url: "https://luckylabs.org",
      description: "Check out my company"
    },
    {
      title: "CH4RMS: AI Art Book",
      url: "https://gumroad.com/checkout?product=iximt&quantity=1",
      description: "Get my book on AI Art Prompts"
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/samtayyari",
      description: "Connect with me professionally"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 py-16">
      <div className="w-full max-w-xl mx-auto">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
            <img
              src={resolvedTheme === 'dark' 
                ? "/lovable-uploads/993e0342-f75a-426f-a345-09700c730629.png"
                : "/lovable-uploads/f2766dbd-a473-4fd2-b01d-99800268e491.png"
              }
              alt="Sam Tayyari"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2">Sam Tayyari</h1>
          <p className="text-muted-foreground">Entrepreneur & Legal Professional</p>
        </motion.div>

        {/* Links Section */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
              variants={item}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-4 bg-gradient-to-r from-[#222222] to-[#333333] hover:from-[#333333] hover:to-[#444444] dark:from-[#1A1F2C] dark:to-[#2A2F3C] dark:hover:from-[#2A2F3C] dark:hover:to-[#3A3F4C] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold">{link.title}</h2>
                  <p className="text-sm text-gray-200 dark:text-gray-300">{link.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LinkInBio;
