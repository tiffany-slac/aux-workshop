"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Aux2025() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const agenda = [
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
  ];

  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl font-bold mb-1">2025, hosted by SLAC</h1>
        <p className="text-lg opacity-90">Workshop Launch</p>
      </section>

      {/* Event Info Section */}
      <section className="grid md:grid-cols-3 gap-12 px-8 md:px-16 py-16 border-b">
        {/* Left */}
        <div className="md:col-span-2 max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold">Event Overview</h2>

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

        {/* Right card */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6 h-fit">
          <div>
            <p className="text-sm text-gray-400">Date</p>
            <p className="font-medium">Feb 26–28, 2025</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Time</p>
            <p className="font-medium">9:00 AM – 5:00 PM</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Location</p>
            <p className="font-medium">Menlo Park, CA</p>
          </div>
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

      {/* Photo Gallery */}
      <section className="px-8 md:px-16 py-10">
        <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
        <div className="flex items-center gap-4">
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
                className="aspect-square w-72 flex-shrink-0 rounded-lg overflow-hidden shadow-sm relative"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 300px"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="px-8 md:px-16 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Related Resources</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://www.canva.com/design/DAGcGJt9-kM/Zt-3_-I4XZ5v6zMpXV-hPw/view?utm_content=DAGcGJt9-kM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h52ae792823"
            target="_blank"
            className="p-6 bg-white rounded-xl border hover:shadow-md transition"
          >
            <p className="font-semibold mb-1">Workshop Poster</p>
            <p className="text-sm text-gray-500">View visual summary</p>
          </a>

          <a
            href="https://als.lbl.gov/als-computing-group-shapes-the-future-of-accelerator-ui-ux/"
            target="_blank"
            className="p-6 bg-white rounded-xl border hover:shadow-md transition"
          >
            <p className="font-semibold mb-1">ALS Article</p>
            <p className="text-sm text-gray-500">Read full write-up</p>
          </a>
        </div>
      </section>
    </main>
  );
}
