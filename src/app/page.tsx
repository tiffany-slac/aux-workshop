"use client";

import Image from "next/image";
import Link from "next/link";
import { activities } from "./data/activities";
import Countdown from "../components/Countdown";

export default function HomePage() {
  return (
    <div>
      <section className="relative flex flex-col md:flex-row h-[calc(100vh-5rem)]">
        {/* LEFT COLUMN - Text */}
        <div className="w-full md:w-1/2 flex items-center p-6 md:pl-16 z-20">
          <div className="max-w-md mx-auto md:mx-0">
            <p className="text-lg font-bold text-[#1e88b6] mb-2">
              User Interface & User Experience
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Standardizing UI/UX in Accelerator & Beamline Controls
            </h1>

            <p className="text-base md:text-lg text-[#333] mb-5">
              Welcome to a Community of Guidance and Support
            </p>

            <Link href="/events/2026" passHref>
              <button className="mt-4 bg-[#1e88b6] text-white text-base py-2 px-5 rounded hover:bg-[#1565a6] transition">
                View Upcoming Workshop
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN - Blue panel */}
        <div className="hidden md:flex md:w-1/2 bg-[#1e88b6] relative flex-col items-center">
          {/* Image + Countdown wrapper, shifted left */}
          <div className="relative w-full h-[90%] -translate-x-16">
            <Image
              src="/AUX_landingpage.png"
              alt="UI/UX Design"
              fill
              className="object-contain"
            />

            {/* Countdown overlay */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
              <Countdown />
            </div>
          </div>
        </div>

        {/* MOBILE IMAGE + Countdown */}
        <div className="md:hidden w-full flex flex-col items-center mt-12">
          <div className="relative w-[90%] h-64 mb-6">
            <Image
              src="/landingpage.png"
              alt="UI/UX Design"
              fill
              className="object-contain"
            />
          </div>
          <Countdown />
        </div>
      </section>

      {/* SECTION 2 — WHAT WE DO */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-left">
          <p className="text-lg font-semibold text-[#1e88b6] mb-2 uppercase tracking-wide">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Improving Controls Interfaces Together
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-left">
            Laboratories working together to improve interface design,
            usability, and workflows across the international accelerator
            community.
          </p>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                emoji: "🧳",
                title: "Workshops",
                description:
                  "Annual events featuring lab updates, tours, mock exercises, and UI/UX walkthroughs.",
              },
              {
                emoji: "🤝",
                title: "Cross-Lab Collaboration",
                description:
                  "Monthly discussions to shape workshop direction, share findings, and align best practices.",
              },
              {
                emoji: "📚",
                title: "Shared Resources",
                description:
                  "Presentations, transcripts, articles, and guidelines focused on UI/UX for controls and experiment screens.",
              },
            ].map(({ emoji, title, description }, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{emoji}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — PARTICIPATING LABS */}
      <section className="py-20 bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center mb-6">
          Participating Laboratories
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl text-center">
          A growing collaboration between accelerator laboratories committed to
          advancing UI/UX for control and experiment systems.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-14 px-5">
          {["berkeley.png", "fnal.png", "inl.png", "slac.png"].map(
            (logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={`/${logo}`}
                  alt={`${logo} logo`}
                  width={160}
                  height={100}
                  className="object-cover"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* SECTION 4 — NEXT WORKSHOP */}
      <section className="bg-white py-24 px-6 md:px-16 text-center">
        <p className="text-lg font-semibold text-[#1e88b6] mb-2 uppercase tracking-wide">
          Next Workshop
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AUX Workshop 2 — February 26, 2026
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Save the date and stay tuned for agenda details, venue information,
          and registration updates.
        </p>

        <Countdown />

        <Link
          href="https://forms.gle/CsyuJcwiUb4sSN9d9"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-[#1e88b6] text-white text-base py-2 px-6 rounded hover:bg-[#1565a6] transition inline-block text-center"
        >
          Register Here
        </Link>
      </section>

      {/* SECTION 5 — RECENT ACTIVITY */}
      <section className="bg-gray-50 py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg font-semibold text-[#1e88b6] mb-2 uppercase tracking-wide">
            Recent Activity
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            What We’ve Been Working On
          </h2>

          <ul className="space-y-6 text-lg text-gray-700">
            {activities.slice(0, 3).map(({ id, date, title }) => (
              <li key={id}>
                • {date} — {title}
              </li>
            ))}
          </ul>

          <Link href="/activity">
            <button className="mt-10 bg-[#1e88b6] text-white py-2 px-6 rounded hover:bg-[#1565a6] transition">
              View All Activities
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 7 — HOW TO CONTRIBUTE */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg font-semibold text-[#1e88b6] mb-2 uppercase tracking-wide">
            Get Involved
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            How You Can Contribute
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2">
            {[
              {
                title: "Attendee",
                description:
                  "Join the annual workshop to experience lab tours, UI/UX walkthroughs, mock exercises, and cross-lab workflow discussions.",
                time: "Frequency: once per year",
              },
              {
                title: "Collaborator",
                description:
                  "Represent your lab, share findings monthly, publish articles, or support design/development of shared resources.",
                time: "Frequency: monthly",
              },
              // {
              //   title: "Admin",
              //   description:
              //     "Coordinate workshop logistics, run collaborator meetings, and guide the direction of the collaboration.",
              //   time: "Frequency: biweekly",
              // },
            ].map(({ title, description, time }, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 mb-3">{description}</p>
                <p className="text-sm font-medium text-[#1e88b6]">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
