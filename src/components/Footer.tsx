import { Copyright } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[#f1f1f1] dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="font-bold text-lg dark:text-white">Sam Tayyari</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-secondary">
            <Copyright className="h-4 w-4" />
            <span>2025 Sam Tayyari</span>
            <span className="mx-2">•</span>
            <Link 
              to="/privacy-policy" 
              className="hover:text-primary transition-colors"
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