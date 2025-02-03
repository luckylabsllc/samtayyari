import { Copyright } from "lucide-react";
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
            
            <Link 
              to="/privacy-policy" 
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;