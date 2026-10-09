"use client";

import Image from "next/image";

export default function Aux2026() {
  const agenda = [
    {
      date: "Feb 25",
      summary:
        "UI/UX basics, prototyping, and AI tools — lectures by Madelyn Polzin, hands-on Figma tutorial by Tiffany Tran, and AI prototyping demos by Seij De Leon.",
    },
    {
      date: "Feb 26",
      summary:
        "Case studies from attendee labs, panel session, and the start of the hackathon pairing ALS staff with workshop attendees for UX interviewing and prototype design.",
    },
    {
      date: "Feb 27",
      summary:
        "Hackathon result presentations, additional case studies, breakout sessions, and a tour of the ALS accelerator control room and beamlines.",
    },
  ];

  const images = [
    "/AUX2026/aux1.png",
    "/AUX2026/aux2.png",
    "/AUX2026/aux3.png",
    "/AUX2026/aux4.png",
    "/AUX2026/aux5.png",
  ];

  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          2026, hosted by LBNL
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          2nd Annual Accelerate UX Workshop
        </p>
        <p className="text-sm text-gray-200 mt-2">
          Feb 25–27, 2026 · Berkeley, CA
        </p>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-16 flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
        {/* Article */}
        <article className="md:w-2/3 space-y-6">
          <Image
            src="/AUX2026/aux01.png"
            alt="AUX Workshop 2026"
            className="rounded-lg shadow-md mx-auto"
            width={600}
            height={300}
          />

          <h2 id="intro" className="text-3xl font-bold">
            Event Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In late Feb 2026, staff from 11 different accelerator lab facilities
            gathered at the Advanced Light Source for a 3-day event, the
            "Accelerate UX Workshop". What could bring together so many
            different participants from across the US and abroad? The answer is
            simple: a chance to improve the user experience for operators,
            scientists, engineers, researchers, and all others who work at
            accelerator labs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This three-day workshop was organized by the Accelerate UX Working
            Group (AUX-WG) which consists of software developers, user
            experience (UX) engineers, and human factors scientists from
            accelerator labs. The agenda included case studies, hands-on UI/UX
            training, panel sessions, group breakouts, and even a hackathon with
            ALS beamline and accelerator staff. Needless to say, it was a packed
            schedule.{" "}
            <a
              href="https://indico.physics.lbl.gov/event/3289/"
              target="_blank"
              className="text-[#1e88b6] underline"
            >
              View full agenda
            </a>
          </p>

          <Image
            src={images[1]}
            alt="AUX Workshop Day 1"
            className="rounded-lg shadow-md mx-auto"
            width={600}
            height={300}
          />

          <h2 id="day1" className="text-2xl font-bold">
            Day 1
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The first day consisted of event organizers teaching attendees the
            basics of UI/UX, prototyping, and AI tools. Madelyn Polzin (UX
            Engineer, FermiLab) gave a beginner-friendly lecture on what UX is,
            and then dove into how design systems and style guides can create
            cohesive interfaces. Tiffany Tran (Software Developer, SLAC) led a
            hands-on tutorial for Figma prototyping software, showcasing the
            value of prototyping before starting to code. Seij De Leon (Software
            Developer, ALS) had attendees try out various AI prototyping
            software that can create fully functional interfaces with simple
            text prompts. By the end of the first day, attendees had learned how
            to perform modern UI/UX techniques and develop prototypes, which
            would come in handy for the rest of the workshop.
          </p>

          <Image
            src={images[2]}
            alt="AUX Workshop Day 2"
            className="rounded-lg shadow-md mx-auto"
            width={600}
            height={300}
          />

          <h2 id="day2" className="text-2xl font-bold">
            Day 2
          </h2>
          <p className="text-gray-700 leading-relaxed">
            On the second day, attendees presented case studies from specific
            projects and efforts at their labs. Topics ranged from UX lessons
            related to alarms, decoding user experience from UI analytics, and
            UX lessons from conversational AI deployed at beamlines. An
            insightful panel session with Madelyn Polzin followed. In the
            afternoon, the hackathon began, pairing ALS staff with teams of 2–3
            attendees to practice UX interviewing and prototype design. For
            many, creating a visual prototype was a new but invaluable
            experience.
          </p>

          <Image
            src={images[3]}
            alt="AUX Workshop Day 3"
            className="rounded-lg shadow-md mx-auto"
            width={600}
            height={300}
          />

          <h2 id="day3" className="text-2xl font-bold">
            Day 3
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The final day included presentations of hackathon results, more case
            studies, and breakout sessions. Teams shared insights and gathered
            feedback directly from ALS staff, consolidating lessons learned from
            the previous two days.
          </p>

          <Image
            src={images[4]}
            alt="AUX Workshop Conclusion"
            className="rounded-lg shadow-md mx-auto"
            width={600}
            height={300}
          />

          <h2 id="conclusion" className="text-2xl font-bold">
            Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The workshop concluded with a tour of the ALS, including several
            beamlines and the accelerator control room. Participants explored
            real-world interfaces, drawing inspiration to improve their own
            facilities. Overall, the ALS hosted a first-of-its-kind event that
            fostered cross-facility connections, taught fundamental UI/UX
            practices, and promoted a culture of thoughtful design across
            accelerator labs.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="md:w-1/3 flex-shrink-0">
          <div className="sticky top-16 bg-white border rounded-2xl p-6 shadow-sm space-y-6">
            <div>
              <p className="font-bold text-lg mb-4">Event Details</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400">Date</p>
                  <p className="font-medium">Feb 25–27, 2026</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Berkeley, CA</p>
                </div>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="font-bold text-lg mb-3">Contents</p>
              <ul className="space-y-2 text-[#1e88b6]">
                <li>
                  <a href="#intro" className="hover:underline">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#day1" className="hover:underline">
                    Day 1: UX Basics
                  </a>
                </li>
                <li>
                  <a href="#day2" className="hover:underline">
                    Day 2: Case Studies & Hackathon
                  </a>
                </li>
                <li>
                  <a href="#day3" className="hover:underline">
                    Day 3: Results & Tour
                  </a>
                </li>
                <li>
                  <a href="#conclusion" className="hover:underline">
                    Conclusion
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
            href="https://indico.physics.lbl.gov/event/3289/"
            target="_blank"
            className="p-6 bg-white rounded-xl border hover:shadow-md transition"
          >
            <p className="font-semibold mb-1">Full Agenda</p>
            <p className="text-sm text-gray-500">
              View the complete workshop agenda on Indico
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
