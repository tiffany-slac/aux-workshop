"use client";

import { ChevronLeft, ChevronRight } from "react-feather";
import { useRef } from "react";

export default function Event1() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // adjust scroll amount if needed
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl font-bold mb-1">2025, hosted by SLAC</h1>
        <p className="text-lg opacity-90">Workshop Launch</p>
      </section>

      {/* Event Info Section */}
      <section className="flex flex-col md:flex-row px-8 md:px-16 py-10 gap-10 border-b">
        {/* Left: Details */}
        <div className="md:w-3/5 space-y-6">
          <h2 className="text-2xl font-bold">Event Details</h2>
          <p className="text-base leading-relaxed">
            The Workshop Launch marked the first gathering of our UI/UX
            committee, bringing together members from FNAL, INL, LBNL, and SLAC.
            After connecting at accelerator conferences and sharing common
            challenges, we realized that many labs were struggling to bridge the
            gap between operators and engineers when designing control systems.
          </p>
          <p className="text-base leading-relaxed">
            We saw a lack of guidance tailored to the unique needs of
            accelerator environments—where safety, usability, and efficiency are
            critical. This workshop became our starting point: a space to define
            shared goals, explore human factors in design, and rethink how
            standard UI/UX practices could be adapted to better serve our users
            in high-stakes, technical settings.
          </p>
          <p className="text-base leading-relaxed">
            Over three days, we laid the groundwork for a new kind of
            collaboration—one focused on practical, actionable design. We
            discussed everything from modernization strategies and user
            involvement to version control and interface consistency.
          </p>
          <p className="text-base leading-relaxed">
            In the short term, the workshop helped us shape the structure of
            future events and identify the most pressing topics. Looking ahead,
            we aim to grow a lasting community of practice that shares lessons,
            tools, and approaches to improve UI/UX in accelerator labs across
            the country.
          </p>
        </div>

        {/* Right: Date / Time / Location */}
        <div className="md:w-2/5 bg-gray-100 p-6 rounded-xl shadow-sm space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">Date</h3>
            <p className="text-gray-600">Feb 26–28, 2025</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Time</h3>
            <p className="text-gray-600">9:00 AM – 5:00 PM</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Location</h3>
            <p className="text-gray-600">
              2575 Sand Hill Rd, Menlo Park, CA 94025
            </p>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="px-8 md:px-16 py-10 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Agenda</h2>
        <div className="space-y-6">
          {[
            {
              date: "Feb 26",
              summary:
                "Kick off with introductions, overview of the workshop’s goals, and participants’ mini presentations (background, lessons, and challenges).",
            },
            {
              date: "Feb 27",
              summary:
                "Brainstorming groups or open sessions, white paper input, and component sketches.",
            },
            {
              date: "Feb 28",
              summary:
                "Wrap-up with next steps, goal-setting, and optional tours or excursions.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="w-16 h-16 bg-[#1e88b6] text-white rounded-full flex items-center justify-center text-md font-bold shadow-md">
                {item.date}
              </div>
              <p className="text-base leading-relaxed">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="px-8 md:px-16 py-10">
        <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>

        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} color="#1e88b6" />
          </button>

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
            style={{ scrollBehavior: "smooth", flexGrow: 1 }}
          >
            {[
              "/photo1.jpeg",
              "/photo2.png",
              "/photo3.jpeg",
              "/photo4.png",
              "/photo5.png",
            ].map((src, i) => (
              <div
                key={i}
                className="aspect-square w-72 flex-shrink-0 rounded-lg overflow-hidden shadow-sm"
              >
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} color="#1e88b6" />
          </button>
        </div>
      </section>

      {/* Related Resources */}
      <section className="px-8 md:px-16 py-10 border-t bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-blue-700">
          <li>
            <a
              href="https://www.canva.com/design/DAGcGJt9-kM/Zt-3_-I4XZ5v6zMpXV-hPw/view?utm_content=DAGcGJt9-kM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h52ae792823"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              View Poster
            </a>
          </li>
          <li>
            <a
              href="https://als.lbl.gov/als-computing-group-shapes-the-future-of-accelerator-ui-ux/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Download Article
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
