import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
    </section>
  );
};

export default Hero;