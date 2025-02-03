import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-sm bg-background rounded-full text-secondary mb-6">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Merging Legal Expertise with Entrepreneurial Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm an entrepreneur, product developer, and soon to be licensed attorney. As the founder and creative director behind Lucky Labs, I'm building a catalog of intellectual property using the latest technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a background in business and law, and a deep connection to the creative industry, I combine legal knowledge with hands-on entrepreneurship to create realistic solutions in pursuit of unrealistic goals.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Legal Expertise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Corporate Law</li>
                  <li>Intellectual Property</li>
                  <li>Contract Negotiation</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Entrepreneurial Focus</h3>
                <ul className="space-y-2 text-muted-foreground">
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