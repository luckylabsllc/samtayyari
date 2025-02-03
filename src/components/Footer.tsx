import { Copyright, Instagram, Linkedin, X } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[#f1f1f1] dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col">
          <div className="flex flex-col items-start">
            <span className="font-bold text-lg mb-2 dark:text-white">Sam Tayyari</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Copyright className="h-4 w-4" />
              <span>2025 Sam Tayyari</span>
            </div>
            
            <div className="flex items-center">
              <Link 
                to="/privacy-policy" 
                className="text-sm text-gray-500 hover:text-primary transition-colors mr-5"
              >
                Privacy Policy
              </Link>
              <div className="flex items-center gap-4">
                <a 
                  href="https://twitter.com/samtayyari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <X className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/samtayyari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;