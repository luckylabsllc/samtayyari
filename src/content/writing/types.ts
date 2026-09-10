import type { ComponentType } from "react";

export interface WritingPost {
  slug: string;
  title: string;
  /** ISO date, e.g. "2026-03-14" */
  date: string;
  summary: string;
  Body: ComponentType;
}
