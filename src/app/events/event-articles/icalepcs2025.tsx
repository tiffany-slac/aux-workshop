"use client";

import Image from "next/image";

export default function Icalepcs2025() {
  const agenda = [
    {
      date: "Sep 25, 3:24 PM",
      summary:
        "Mini Presentation: Standardizing UI/UX across accelerator labs. An overview of the AUX working group's mission, goals, and strategy for standardizing UI/UX at accelerator labs.",
    },
    {
      date: "Sep 25, 4:15 PM",
      summary:
        "Poster Session: Visit poster #94 to learn about the AUX working group's mission and strategy for standardizing UI/UX at accelerator labs.",
    },
  ];

  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          ICALEPCS 2025, hosted by ANL
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          Mini Presentation & Poster Section
        </p>
        <p className="text-sm text-gray-200 mt-2">Sep 25, 2025</p>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-16 flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
        {/* Article */}
        <article className="md:w-2/3 space-y-6">
          <Image
            src="/ICALEPCS2025/icalepcs1.png"
            alt="ICALEPCS 2025"
            className="rounded-lg shadow-md mx-auto"
            width={600}
            height={300}
          />

          <h2 id="overview" className="text-3xl font-bold">
            Event Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Members of the AUX working group attended the 2025 ICALEPCS
            convention, providing talks on user experience and learning about
            the current state of UI/UX from other attendees.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A GUI satellite meeting was held by Chris Roderick (CERN) on the
            weekend before the main conference, where participants from many
            facilities gave overview presentations on their lab's adoption and
            techniques related to UI/UX. The AUX group presented for the first
            time on the beginnings of the working group, the common pain points
            that they have identified, and how the group plans to serve the
            community by crafting resources and hosting workshops.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As the conference continued, working group members gave individual
            presentations related to software development and UI/UX at their
            respective labs.
          </p>

          <Image
            src="/ICALEPCS2025/icalepcs2.png"
            alt="ICALEPCS Presentations"
            className="rounded-lg shadow-md mx-auto"
            width={600}
            height={300}
          />

          <h2 id="presentations" className="text-2xl font-bold">
            Presentations
          </h2>
          <p className="text-gray-700 leading-relaxed">
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
          <p className="text-gray-700 leading-relaxed">
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

          <Image
            src="/ICALEPCS2025/icalepcs3.png"
            alt="ICALEPCS Conference"
            className="rounded-lg shadow-md mx-auto"
            width={600}
            height={300}
          />

          <p className="text-gray-700 leading-relaxed">
            Rounding off the convention, Tiffany Tran gave an overview on the
            AUX group in the main ballroom to all general attendees, helping to
            spread word of the group's mission and encourage participation in
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

          <Image
            src="/ICALEPCS2025/icalepcs4.png"
            alt="ICALEPCS Poster"
            className="rounded-lg shadow-md mx-auto"
            width={600}
            height={300}
          />

          <h2 id="poster" className="text-2xl font-bold">
            Poster Session
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Throughout the conference there were regular poster sessions where
            attendees could speak with each other directly. Maddie and Tiffany
            explained the AUX group's goals and strategy for standardizing UI/UX
            at poster #94.
          </p>
          <p className="text-gray-700 leading-relaxed">
            ICALEPCS provided ample discussions and insights from other
            developers and engineers, which the AUX group is hoping to foster
            again during the 2nd annual workshop hosted February 2026 at
            Berkeley Lab.
          </p>

          <Image
            src="/ICALEPCS2025/icalepcs5.png"
            alt="ICALEPCS Group"
            className="rounded-lg shadow-md mx-auto"
            width={600}
            height={300}
          />
        </article>

        {/* Sidebar */}
        <aside className="md:w-1/3 flex-shrink-0">
          <div className="sticky top-16 bg-white border rounded-2xl p-6 shadow-sm space-y-6">
            <div>
              <p className="font-bold text-lg mb-4">Event Details</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400">Date</p>
                  <p className="font-medium">Sep 25, 2025</p>
                </div>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="font-bold text-lg mb-3">Contents</p>
              <ul className="space-y-2 text-[#1e88b6]">
                <li>
                  <a href="#overview" className="hover:underline">
                    Event Overview
                  </a>
                </li>
                <li>
                  <a href="#presentations" className="hover:underline">
                    Presentations
                  </a>
                </li>
                <li>
                  <a href="#poster" className="hover:underline">
                    Poster Session
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-t pt-4">
              <ul className="space-y-2 text-[#1e88b6]">
                <li>
                  <a href="#timeline" className="hover:underline">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#resources" className="hover:underline">
                    Related Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="px-8 md:px-16 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Timeline</h2>

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

      {/* Related Resources */}
      <section id="resources" className="px-6 md:px-16 pb-16 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Related Resources</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://indico.jacow.org/event/86/contributions/10099/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-xl border hover:shadow-md transition"
          >
            <p className="font-semibold mb-1">Madelyn Polzin — Modernizing Control Systems</p>
            <p className="text-sm text-gray-500">
              Presentation on modernizing accelerator control systems at Fermilab
            </p>
          </a>

          <a
            href="https://indico.jacow.org/event/86/page/360-bluesky-satellite-workshop"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-xl border hover:shadow-md transition"
          >
            <p className="font-semibold mb-1">Seij De Leon — Bluesky Workshop</p>
            <p className="text-sm text-gray-500">
              Presentation on web interfaces for beamline endstations
            </p>
          </a>

          <a
            href="https://indico.jacow.org/event/86/contributions/10382/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-xl border hover:shadow-md transition"
          >
            <p className="font-semibold mb-1">Tiffany Tran — AUX Group Overview</p>
            <p className="text-sm text-gray-500">
              Overview presentation on the AUX working group's mission
            </p>
          </a>

          <a
            href="https://www.figma.com/deck/H06yHFdWcQESEijfunRdGS/Mini-Oral?node-id=1-553&t=3dGYPWh0dX6teOcv-1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-xl border hover:shadow-md transition"
          >
            <p className="font-semibold mb-1">Mini-Oral Presentation Deck</p>
            <p className="text-sm text-gray-500">
              Figma slide deck for the AUX group overview
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
