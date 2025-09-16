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
    Component: Article1,
  },
  {
    slug: "step-1",
    title: "Step 1: Define System Objective",
    description: "Deep dive into Step 1 of the design process.",
    Component: Step1,
  },
  {
    slug: "step-2",
    title: "Step 2: Document End-User Process",
    description: "Deep dive into Step 2 of the design process.",
    Component: Step2,
  },
  {
    slug: "step-3",
    title: "Step 3: Wireframe & Iterate",
    description: "Deep dive into Step 3 of the design process.",
    Component: Step3,
  },
  {
    slug: "step-4",
    title: "Step 4: Invest in HiFi Prototypes",
    description: "Deep dive into Step 4 of the design process.",
    Component: Step4,
  },
  {
    slug: "step-5",
    title: "Step 5: Record Design Decisions",
    description: "Deep dive into Step 5 of the design process.",
    Component: Step5,
  },
    {
    slug: "intern",
    title: "An Intern's Approach",
    description: "Read about an intern application of our 5 steps",
    Component: Intern,
  },
];
