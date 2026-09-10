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
  { label: "Cheereal", url: "https://cheereal.com" },
  { label: "Chulu", url: "https://chulu.co" },
  { label: "Overseas", url: "https://apps.apple.com/us/app/overseas/id6747011386" },
  // Moving to labcoat.tools shortly — update this one line when it does.
  { label: "LABCOAT", url: "https://labcoat.app" },
];
