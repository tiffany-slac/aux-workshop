"use client";

import React, { useState, useEffect } from "react";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";

// Roadmap Component
const Roadmap: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleScroll = () => {
    const steps = document.querySelectorAll(".roadmap-step");
    steps.forEach((step, index) => {
      const rect = step.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        setActiveStep(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stepColors = ["#00AAC5", "#884485", "#D46C55", "#EDB323", "#00C462"];

  const steps = [
    {
      title: "Step 1: Define system objectives.",
      icon: <GroupsOutlinedIcon sx={{ fontSize: 80 }} />,
      description:
        "The objectives defined are bound by the system being designed or redesigned. This establishes alignment between team members on what the outcome should accomplish.",
      link: "#learn-more-step-1",
    },
    {
      title: "Step 2: Document end-user process.",
      icon: <SettingsSuggestOutlinedIcon sx={{ fontSize: 80 }} />,
      description:
        "The end-user process refers to how the objectives are achieved by those who interact with the system. This establishes a record useful for designing a better system.",
      link: "#learn-more-step-2",
    },
    {
      title: "Step 3: Wireframe and iterate.",
      icon: <DesignServicesOutlinedIcon sx={{ fontSize: 80 }} />,
      description:
        "Begin designing the system using the knowledge collected. Finding errors in the design early is good and informs each iteration until issues are hard to find.",
      link: "#learn-more-step-3",
    },
    {
      title: "Step 4: Invest in a high fidelity prototype and test.",
      icon: <DvrOutlinedIcon sx={{ fontSize: 80 }} />,
      description:
        "The prototype looks almost like the real thing and includes functionality. Test rigorously to ensure usability and performance expectations are met.",
      link: "#learn-more-step-4",
    },
    {
      title: "Step 5: Record design decisions.",
      icon: <EditNoteOutlinedIcon sx={{ fontSize: 80 }} />,
      description:
        "Provide a record of how the design was created and why each decision was made. This supports future iterations and communicates the benefits of UX.",
      link: "#learn-more-step-5",
    },
  ];

  return (
    <div className="roadmap">
      {steps.map((step, index) => {
        const isActive = activeStep === index;
        const stepColor = stepColors[index];

        return (
          <div
            key={index}
            className={`roadmap-step p-6 my-12 flex items-center justify-between ${
              (index + 1) % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } transition-all duration-300 ease-in-out ${
              isActive ? "font-bold" : "text-gray-700"
            }`}
            style={{ color: isActive ? stepColor : undefined }}
          >
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center shrink-0 border-4"
              style={{
                borderColor: stepColor,
                color: stepColor,
                backgroundColor: "transparent",
              }}
            >
              {step.icon}
            </div>

            <div className="flex-1 mx-4">
              <h2 className="text-2xl mb-2">{step.title}</h2>
              <p className="mb-4">{step.description}</p>
              <a
                href={step.link}
                className="text-sm font-medium underline"
                style={{ color: stepColor }}
              >
                Learn more about Step {index + 1} →
              </a>
            </div>

            <div className="w-1/4 h-[2px] bg-gray-300"></div>
          </div>
        );
      })}
    </div>
  );
};

// Header Component
interface ArticleHeaderProps {
  title: string;
  author: string;
  date: string;
  readTime: number;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  author,
  date,
  readTime,
}) => (
  <div className="mb-6">
    <h1 className="text-3xl font-semibold">{title}</h1>
    <div className="text-sm text-gray-600">
      <span>By {author}</span> | <span>{date}</span> |{" "}
      <span>{readTime} min read</span>
    </div>
  </div>
);

// Main Article Component
const Article1: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-12 my-24">
      <div
        className="w-full h-64 bg-gray-300 mb-8 rounded-lg"
        aria-label="Image placeholder"
      ></div>

      <ArticleHeader
        title="How to Get Started"
        author="AUX Team"
        date="April 30, 2025"
        readTime={5}
      />
      <p className="mb-8 text-lg">
        Follow these steps to design better systems through user-centered design
        thinking.
      </p>
      <Roadmap />
    </div>
  );
};

export default Article1;
