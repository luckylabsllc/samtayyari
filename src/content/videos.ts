export interface VideoEntry {
  title: string;
  /** YouTube or Vimeo URL (watch/share link is fine — it gets converted to an embed). */
  url: string;
  /** ISO date, used to sort newest first. */
  addedDate: string;
}

// Add an entry any time by appending to this array:
// { title: "...", url: "https://youtu.be/...", addedDate: "2026-03-14" }

export const videos: VideoEntry[] = [];
