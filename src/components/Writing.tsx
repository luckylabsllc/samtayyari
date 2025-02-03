import { motion } from "framer-motion";

const Writing = () => {
  return (
    <section className="py-20 px-4 bg-accent dark:bg-[#222222] text-primary dark:text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-sm bg-white dark:bg-[#333333] rounded-full text-secondary mb-6 hover:opacity-80 transition-colors duration-200">
            Writing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Recent Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#333333] p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Future of AI</h3>
              <p className="text-secondary mb-6">
                Exploring the latest developments in artificial intelligence and their impact on society.
              </p>
              <span className="text-sm text-secondary">Published: March 2024</span>
            </div>
            <div className="bg-white dark:bg-[#333333] p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Legal Tech Trends</h3>
              <p className="text-secondary mb-6">
                How technology is transforming the legal industry and what to expect in the coming years.
              </p>
              <span className="text-sm text-secondary">Published: February 2024</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Writing;