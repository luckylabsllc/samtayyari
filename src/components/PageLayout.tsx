import { ReactNode } from "react";
import MenuBar from "./MenuBar";
import Footer from "./Footer";

// Shared shell for inner pages (Writing, Video, Contact): fixed header +
// top-padded content + footer. Home composes MenuBar/Footer itself since its
// hero content is meant to sit under the header, not below it.
// `flex flex-col` + `flex-1` on main is a sticky footer: short content still
// lets the footer sit at the bottom of the viewport instead of floating
// right under the content with a dead gap below it.
const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-white dark:bg-black transition-colors duration-300">
    <MenuBar />
    <main className="flex-1 pt-24 md:pt-28">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
