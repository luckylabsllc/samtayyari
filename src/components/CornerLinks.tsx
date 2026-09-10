import { Instagram, X as XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { socialLinks } from "@/lib/site";

// Small, persistent bottom-right links — appears on every page. Fixed to the
// viewport (not the page) so it works the same whether the page scrolls or
// not. No divider, no other content.
const CornerLinks = () => (
  <div className="fixed bottom-6 right-6 z-40 flex items-center gap-4 text-secondary text-xs">
    <Link to="/privacy" className="hover:text-foreground transition-colors">
      Privacy
    </Link>
    <a
      href={socialLinks.x}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="X"
      className="hover:text-foreground transition-colors"
    >
      <XIcon className="h-4 w-4" />
    </a>
    <a
      href={socialLinks.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:text-foreground transition-colors"
    >
      <Instagram className="h-4 w-4" />
    </a>
  </div>
);

export default CornerLinks;
