"use client";

import { useState } from "react";
import { activities } from "../data/activities";

export default function RecentActivitiesPage() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const activeActivity = activities.find((a) => a.id === activeId);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center px-4">
        <h1
          className="text
        -5xl md:text-6xl font-bold text-white mb-4"
        >
          Recent Activities
        </h1>
      </section>

      <div className="p-6 flex justify-center">
        <div className="w-full max-w-3xl space-y-4">
          {activities.map(({ id, date, title }) => (
            <button
              key={id}
              onClick={() => setActiveId(id)}
              className="w-full text-left rounded-xl border bg-white p-4 shadow transition hover:shadow-lg"
            >
              <p className="text-sm text-gray-500">{date}</p>
              <h2 className="mt-1 text-lg font-semibold">{title}</h2>
            </button>
          ))}
        </div>
      </div>

      {activeActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
            <button
              onClick={() => setActiveId(null)}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="mb-2 text-xl font-semibold">
              {activeActivity.title}
            </h2>
            <p className="text-sm text-gray-600">{activeActivity.details}</p>
          </div>
        </div>
      )}
    </main>
  );
}
