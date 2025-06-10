// src/articles/index.ts
import Article1 from "./get-started";
// import Article2 from "./article-2";

export const articles = [
  {
    slug: "get-started",
    title: "Getting Started",
    description: "Learn how to begin using our platform.",
    Component: Article1,
  },
  //   {
  //     slug: "article-2",
  //     title: "Advanced Tips",
  //     description: "Take your workflow to the next level.",
  //     Component: Article2,
  //   },
];
