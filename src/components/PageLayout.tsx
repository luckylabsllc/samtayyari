import { ReactNode } from "react";
import MenuBar from "./MenuBar";
import CornerLinks from "./CornerLinks";

// Shared shell for inner pages (Writing, Video, Contact, Privacy): fixed
// header + top-padded content + the corner Privacy/X/Instagram links. Home
// composes MenuBar itself since its content is meant to sit under the
// header, not below it, but it renders CornerLinks too — see Index.tsx.
const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
    <MenuBar />
    <main className="pt-24 md:pt-28">{children}</main>
    <CornerLinks />
  </div>
);

export default PageLayout;
