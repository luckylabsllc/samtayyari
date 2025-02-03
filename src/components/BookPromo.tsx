import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const BookPromo = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-[#111111]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 text-sm bg-accent dark:bg-[#333333] rounded-full text-secondary mb-6 hover:opacity-80 transition-all duration-200">
            New Book
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Formidable MidJourney</h2>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Discover the secrets of creating stunning AI-generated artwork with MidJourney. 
            A comprehensive guide to mastering AI art creation.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-64 h-80 bg-accent dark:bg-[#222222] rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-secondary">
                Book Cover Preview
              </div>
            </div>
            
            <div className="max-w-sm space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What's Inside:</h3>
                <ul className="space-y-2 text-secondary">
                  <li>• Comprehensive MidJourney tutorials</li>
                  <li>• Advanced techniques and tips</li>
                  <li>• Real-world examples and case studies</li>
                  <li>• Professional workflow strategies</li>
                </ul>
              </div>
              
              <Button
                className="w-full sm:w-auto"
                onClick={() => window.open("https://ch4rms.gumroad.com/l/ch4rmsformidjourney", "_blank")}
              >
                Learn More <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookPromo;