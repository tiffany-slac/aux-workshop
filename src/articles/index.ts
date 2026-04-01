import Article1 from "./get-started";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Step5 from "./step-5";
import Intern from "./interns-approach";

export const articles = [
  {
    slug: "get-started",
    title: "Getting Started",
    description: "Learn how to begin using our platform.",
    image: "/ResourceCards/article1.svg",
    category: "Intro",
    Component: Article1,
  },
  {
    slug: "step-1",
    title: "Define System Objective",
    description: "Deep dive into Step 1 of the design process.",
    image: "/ResourceCards/article2.svg",
    category: "Design Process",
    Component: Step1,
  },
  {
    slug: "step-2",
    title: "Document End-User Process",
    description: "Deep dive into Step 2 of the design process.",
    image: "/ResourceCards/article3.svg",
    category: "Design Process",
    Component: Step2,
  },
  {
    slug: "step-3",
    title: "Wireframe & Iterate",
    description: "Deep dive into Step 3 of the design process.",
    image: "/ResourceCards/article4.svg",
    category: "Design Process",
    Component: Step3,
  },
  {
    slug: "step-4",
    title: "Invest in HiFi Prototypes",
    description: "Deep dive into Step 4 of the design process.",
    image: "/ResourceCards/article5.svg",
    category: "Design Process",
    Component: Step4,
  },
  {
    slug: "step-5",
    title: "Record Design Decisions",
    description: "Deep dive into Step 5 of the design process.",
    image: "/ResourceCards/article6.svg",
    category: "Design Process",
    Component: Step5,
  },
    {
    slug: "intern",
    title: "An Intern's Approach",
    description: "Read about an intern's application of our 5 steps.",
    image: "/ResourceCards/article7.svg",
    category: "Case Study",
    Component: Intern,
  },
];
