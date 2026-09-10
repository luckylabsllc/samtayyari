import { ReactNode } from "react";
import MenuBar from "./MenuBar";

// Shared shell for inner pages (Writing, Video, Contact): fixed header +
// top-padded content. Home composes MenuBar itself since its content is
// meant to sit under the header, not below it.
const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
    <MenuBar />
    <main className="pt-24 md:pt-28">{children}</main>
  </div>
);

export default PageLayout;
