import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const BookPromo = () => {
  return (
    <section className="py-20 px-4 bg-[#222222] dark:bg-[#222222] text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 text-sm bg-accent dark:bg-[#333333] rounded-full text-secondary mb-6 hover:opacity-80 transition-all duration-200">
            Buy My Book
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">CH4RMS: AI Art Prompts for Midjourney</h2>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Dive into the captivating world of AI-generated art with CH4RMS, an innovative guide designed for both artists and tech enthusiasts. 
            This book combines cutting-edge technology with creative inspiration, offering over 480 pages of stunning visual prompts crafted with Midjourney.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-64 h-80 bg-accent dark:bg-[#222222] rounded-lg overflow-hidden">
              <img 
                src="https://public-files.gumroad.com/767bugkpe68tfw7uawlimkcq5yvx" 
                alt="CH4RMS: AI Art Prompts for Midjourney Book Cover"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="max-w-sm space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What's Inside:</h3>
                <ul className="space-y-2 text-secondary">
                  <li>• Over 480 pages of stunning visual prompts</li>
                  <li>• Comprehensive guide for Midjourney v6.0 and v6.1</li>
                  <li>• Perfect for both artists and tech enthusiasts</li>
                  <li>• Tools to transform ideas into digital masterpieces</li>
                </ul>
              </div>
              
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:from-[#7C3AED] hover:to-[#5B21B6]"
                onClick={() => window.open("https://gumroad.com/checkout?product=iximt&quantity=1", "_blank")}
              >
                Buy Digital Edition Now <ShoppingCart className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookPromo;
