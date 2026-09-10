import { ReactNode } from "react";
import MenuBar from "./MenuBar";
import Footer from "./Footer";

// Shared shell for inner pages (Writing, Video, Contact): fixed header +
// top-padded content + footer. Home composes MenuBar/Footer itself since its
// hero content is meant to sit under the header, not below it.
const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-white dark:bg-[#111111] transition-colors duration-300">
    <MenuBar />
    <main className="pt-24 md:pt-28">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
