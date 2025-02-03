import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-[500px] h-[500px] rounded-full overflow-hidden mx-auto mb-8">
            <img 
              src="/lovable-uploads/f2766dbd-a473-4fd2-b01d-99800268e491.png" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="inline-block px-3 py-1 text-sm bg-accent rounded-full text-secondary mb-6">
            Entrepreneur & Legal Professional
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Bridging Innovation <br /> and Legal Excellence
          </h1>
          <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Transforming ideas into ventures while navigating the complexities of law.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#about"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-8 h-8 text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;