import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-accent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-sm bg-white rounded-full text-secondary mb-6">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Merging Legal Expertise with Entrepreneurial Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-secondary leading-relaxed">
                With a foundation in law and a passion for innovation, I bridge the gap between legal expertise and entrepreneurial ventures. My journey spans both worlds, allowing me to bring unique insights to every project.
              </p>
              <p className="text-secondary leading-relaxed">
                I focus on creating sustainable solutions while ensuring legal compliance and ethical business practices. This dual perspective enables me to navigate complex challenges effectively.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Legal Expertise</h3>
                <ul className="space-y-2 text-secondary">
                  <li>Corporate Law</li>
                  <li>Intellectual Property</li>
                  <li>Contract Negotiation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Entrepreneurial Focus</h3>
                <ul className="space-y-2 text-secondary">
                  <li>Business Strategy</li>
                  <li>Product Development</li>
                  <li>Market Analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;