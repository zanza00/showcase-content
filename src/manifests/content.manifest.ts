import type { SlideManifest } from "@showcase/shared-libs";

export const contentManifest: SlideManifest = {
  order: 2,
  basePath: "/content",
  slides: [
    { path: "", title: "Architecture" },
    { path: "/good", title: "The Good" },
    { path: "/bad", title: "The Bad" },
    { path: "/ugly", title: "The Ugly" },
    { path: "/end", title: "Q&A" },
  ],
};
