import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-16">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-4"
        onClick={() => navigate('/')}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Button>

      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert">
        <p className="mb-4">Last updated: January 2024</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">1. Introduction</h2>
        <p className="mb-4">
          This Privacy Policy describes how Sam Tayyari ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">2. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, including:
          <ul className="list-disc pl-6 mt-2">
            <li>Contact information (such as name and email address)</li>
            <li>Communications you send to us</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to:
          <ul className="list-disc pl-6 mt-2">
            <li>Respond to your inquiries</li>
            <li>Provide customer service</li>
            <li>Send you updates and marketing communications</li>
            <li>Improve our website and services</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">4. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us.
        </p>

        <div className="mt-8">
          <Link to="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;