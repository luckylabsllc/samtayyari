// Central place for homepage copy and outbound links, so either can be
// changed in one spot (e.g. swapping a URL when a project moves domains).

// TODO: add a tagline back here (e.g. `export const tagline = "...";`)
// and render it in Home.tsx under the name.

export interface ExternalLink {
  label: string;
  url: string;
}

export const externalLinks: ExternalLink[] = [
  { label: "Lucky Labs", url: "https://luckylabs.org" },
];

// Restored from git history (see Footer.tsx's full commit history).
// Note: Instagram was only ever the generic https://instagram.com in this
// codebase — never a profile-specific URL. Swap in the real handle when
// you have it.
export const socialLinks = {
  x: "https://twitter.com/samtayyari",
  instagram: "https://instagram.com",
};
