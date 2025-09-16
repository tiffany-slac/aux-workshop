"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

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
      link: "/resources/step-1",
    },
    {
      title: "Step 2: Document end-user process.",
      icon: <SettingsSuggestOutlinedIcon sx={{ fontSize: 80 }} />,
      description:
        "The end-user process refers to how the objectives are achieved by those who interact with the system. This establishes a record useful for designing a better system.",
      link: "/resources/step-2",
    },
    {
      title: "Step 3: Wireframe and iterate.",
      icon: <DesignServicesOutlinedIcon sx={{ fontSize: 80 }} />,
      description:
        "Begin designing the system using the knowledge collected. Finding errors in the design early is good and informs each iteration until issues are hard to find.",
      link: "/resources/step-3",
    },
    {
      title: "Step 4: Invest in a high fidelity prototype and test.",
      icon: <DvrOutlinedIcon sx={{ fontSize: 80 }} />,
      description:
        "The prototype looks almost like the real thing and includes functionality. Test rigorously to ensure usability and performance expectations are met.",
      link: "/resources/step-4",
    },
    {
      title: "Step 5: Record design decisions.",
      icon: <EditOutlinedIcon sx={{ fontSize: 80 }} />,
      description:
        "Provide a record of how the design was created and why each decision was made. This supports future iterations and communicates the benefits of UX.",
      link: "/resources/step-5",
    },
  ];

  return (
    <div className="max-w-[56rem] mx-auto p-8 space-y-8">
      <div className="roadmap">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          const stepColor = stepColors[index];

          return (
            <div
              key={index}
              className={`roadmap-step my-12 flex items-center justify-between ${
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
    <div className="max-w-4xl mx-auto p-8">
      <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex space-x-1">
          <li>
            <Link href="/resources">
              <p className="text-blue-700 hover:underline">Resources</p>
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-500">Getting Started</li>
        </ol>
      </nav>
      <ArticleHeader
        title="How to Get Started"
        author="AUX Team"
        date="April 30, 2025"
        readTime={5}
      />
      <div className="w-full h-64 rounded-lg bg-white flex items-center justify-center relative">
        <Image
          src="/roadmap.svg"
          alt="Roadmap"
          fill 
          className="object-contain"
        />
      </div>
      <p className="text-lg">
        Follow these steps to design better systems through user-centered design
        thinking.
      </p>
      <Roadmap />
    </div>
  );
};

export default Article1;
