"use client";

import { useState } from "react";
import { activities } from "../data/activities";

export default function RecentActivitiesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Recent Activities
        </h1>
      </section>

      <div className="p-6 flex justify-center">
        <div className="w-full max-w-3xl space-y-6">
          {activities.map(({ id, date, title, details }) => {
            const isExpanded = expandedId === id;

            return (
              <article
                key={id}
                className="rounded-xl border bg-white p-5 shadow-sm transition"
              >
                <button
                  onClick={() => toggle(id)}
                  className="w-full text-left flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="text-sm text-gray-500">{date}</p>
                    <h2 className="mt-1 text-lg font-semibold text-gray-900">
                      {title}
                    </h2>
                  </div>

                  <svg
                    className={`mt-1 h-5 w-5 text-gray-400 transition-transform duration-200 ${
                      isExpanded ? "-rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="mt-4 border-t pt-4 animate-fade-in">
                    <div className="prose prose-sm max-w-none text-gray-700">
                      {details}
                    </div>

                    <button
                      onClick={() => setExpandedId(null)}
                      className="mt-4 text-sm font-medium text-[#1e88b6] hover:underline"
                    >
                      Collapse
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
