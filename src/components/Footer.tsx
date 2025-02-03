import { Copyright } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[#f1f1f1] dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-start mb-4 md:mb-0">
            <span className="font-bold text-lg mb-3 dark:text-white">Sam Tayyari</span>
            <div className="flex items-center space-x-1 text-sm">
              <Copyright className="h-4 w-4" />
              <span>2025 Sam Tayyari</span>
            </div>
          </div>
          
          <Link 
            to="/privacy-policy" 
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;