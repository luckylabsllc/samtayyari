import { motion } from "framer-motion";

const Consulting = () => {
  return (
    <section id="consulting" className="py-20 px-4 bg-accent dark:bg-[#333333]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-sm bg-white dark:bg-[#444444] rounded-full text-secondary mb-6 hover:opacity-80 transition-colors duration-200">
            Consulting
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#444444] p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Legal Consulting</h3>
              <p className="text-secondary mb-6">
                Specialized legal advice for businesses and startups, focusing on corporate law and intellectual property.
              </p>
              <ul className="space-y-3 text-secondary">
                <li>• IP Strategy and Protection</li>
                <li>• Contract Review and Negotiation</li>
                <li>• Corporate Structure Advisory</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-[#444444] p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Business Strategy</h3>
              <p className="text-secondary mb-6">
                Strategic guidance for businesses looking to scale and optimize their operations.
              </p>
              <ul className="space-y-3 text-secondary">
                <li>• Market Entry Strategy</li>
                <li>• Growth Planning</li>
                <li>• Risk Management</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Consulting;