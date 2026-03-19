"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Icalepcs2025() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const agenda = [
    {
      date: "Sep 25, 3:24PM",
      summary:
        "Mini Presentation: Standardizing UI/UX across accelerator labs. An overview of the AUX working group’s mission, goals, and strategy for standardizing UI/UX at accelerator labs.",
    },
    {
      date: "Sep 25, 4:15PM",
      summary:
        "Poster Session: Visit poster #94 to learn about the AUX working group’s mission and strategy for standardizing UI/UX at accelerator labs.",
    },
  ];

  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl font-bold mb-1">
          ICALEPCS 2025, hosted by ANL
        </h1>
        <p className="text-lg opacity-90">Mini Presentation & Poster Section</p>
      </section>

      {/* Event Info Section */}
      <section className="py-16 border-b flex justify-center">
        {/* Left */}
        <div className="w-[60%] max-w-4xl space-y-6">
          <img
            src="/ICALEPCS2025/icalepcs1.png"
            alt="ICALEPCS 1"
            className="rounded-lg shadow-md mx-auto"
          />
          <h2 className="text-3xl font-bold">Event Overview</h2>
          <p>
            Members of the AUX working group attended the 2025 ICALEPCS
            convention, providing talks on user experience and learning about
            the current state of UI/UX from other attendees.
          </p>

          <p>
            A GUI satellite meeting was held by Chris Roderick (CERN) on the
            weekend before the main conference, where participants from many
            facilities gave overview presentations on their lab’s adoption and
            techniques related to UI/UX. The AUX group presented for the first
            time on the beginnings of the working group, the common pain points
            that they have identified, and how the group plans to serve the
            community by crafting resources and hosting workshops.
          </p>

          <p>
            As the conference continued, working group members gave individual
            presentations related to software development and UI/UX at their
            respective labs.
          </p>

          <img
            src="/ICALEPCS2025/icalepcs2.png"
            alt="ICALEPCS 2"
            className="rounded-lg shadow-md mx-auto"
          />

          <p>
            Madelyn Polzin shared her work at Fermilab focused on modernizing
            accelerator control systems and the importance of bringing in users
            to shape future developments.{" "}
            <a
              href="https://indico.jacow.org/event/86/contributions/10099/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e88b6] underline"
            >
              Link
            </a>
          </p>

          <p>
            Seij De Leon presented at the Bluesky community workshop on his work
            creating web interfaces for beamline endstations, where the
            development process has been expanded to include UX procedures
            learned from the AUX group.{" "}
            <a
              href="https://indico.jacow.org/event/86/page/360-bluesky-satellite-workshop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e88b6] underline"
            >
              Link
            </a>
          </p>

          <img
            src="/ICALEPCS2025/icalepcs3.png"
            alt="ICALEPCS 3"
            className="rounded-lg shadow-md mx-auto"
          />
          <p>
            Rounding off the convention, Tiffany Tran gave an overview on the
            AUX group in the main ballroom to all general attendees, helping to
            spread word of the group’s mission and encourage participation in
            the next annual AUX workshop.{" "}
            <a
              href="https://indico.jacow.org/event/86/contributions/10382/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e88b6] underline"
            >
              Link
            </a>
            ,{" "}
            <a
              href="https://www.figma.com/deck/H06yHFdWcQESEijfunRdGS/Mini-Oral?node-id=1-553&t=3dGYPWh0dX6teOcv-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e88b6] underline"
            >
              Figma Deck
            </a>
          </p>

          <img
            src="/ICALEPCS2025/icalepcs4.png"
            alt="ICALEPCS Poster"
            className="rounded-lg shadow-md mx-auto"
          />

          <p>
            Throughout the conference there were regular poster sessions where
            attendees could speak with each other directly. Maddie and Tiffany
            explained the AUX group’s goals and strategy for standardizing UI/UX
            at poster #94.
          </p>

          <p>
            ICALEPCS provided ample discussions and insights from other
            developers and engineers, which the AUX group is hoping to foster
            again during the 2nd annual workshop hosted February 2026 at
            Berkeley Lab.
          </p>

          <img
            src="/ICALEPCS2025/icalepcs5.png"
            alt="ICALEPCS 5"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
      </section>

      {/* Agenda Section */}
      <section className="px-8 md:px-16 py-16">
        <h2 className="text-3xl font-bold mb-10">Agenda</h2>

        <div className="relative border-l border-gray-200 space-y-10">
          {agenda.map((item, index) => (
            <div key={index} className="ml-6">
              <div className="absolute -left-3 w-6 h-6 bg-[#1E88B6] rounded-full" />

              <p className="text-sm text-gray-400 mb-1">{item.date}</p>
              <p className="text-gray-700 leading-relaxed">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
