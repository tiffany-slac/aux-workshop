"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Event2() {
  const scrollRef = useRef<HTMLDivElement>(null);
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
          Feb 25–27, 2026 • Berkeley, CA
        </p>
      </section>

      <section className="px-6 md:px-16 py-16 flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
        {/* Left: Article */}
        <article className="md:w-3/5 space-y-10">
          <Image
            src="/AUX2026/aux01.png"
            alt="AUX 1"
            className="rounded-lg shadow-md"
            width={800}
            height={400}
          />
          <h2 id="intro" className="text-3xl font-bold">Event Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            In late Feb 2026, staff from 11 different accelerator lab facilities
            gathered at the Advanced Light Source for a 3-day event, the
            “Accelerate UX Workshop”. What could bring together so many
            different participants from across the US and abroad? The answer is
            simple: a chance to improve the user experience for operators,
            scientists, engineers, researchers, and all others who work at
            accelerator labs.
          </p>

          <p className="text-gray-600 leading-relaxed">
            This three-day workshop was organized by the Accelerate UX Working
            Group (AUX-WG) which consists of software developers, user
            experience (UX) engineers, and human factors scientists from
            accelerator labs. The agenda included case studies, hands-on UI/UX
            training, panel sessions, group breakouts, and even a hackathon with
            ALS beamline and accelerator staff. Needless to say, it was a packed
            schedule.{" "}
            <Link
              href="https://indico.physics.lbl.gov/event/3289/"
              target="_blank"
              className="text-[#1e88b6] underline"
            >
              View full agenda
            </Link>
          </p>

          <Image
            src={images[1]}
            alt="AUX 2"
            className="rounded-lg shadow-md"
            width={800}
            height={400}
          />
          <h2 id="day1" className="text-2xl font-bold">Day 1</h2>
          <p className="text-gray-600 leading-relaxed">
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
            alt="AUX 3"
            className="rounded-lg shadow-md"
            width={800}
            height={400}
          />
          <h2 id="day2" className="text-2xl font-bold">Day 2</h2>
          <p className="text-gray-600 leading-relaxed">
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
            alt="AUX 4"
            className="rounded-lg shadow-md"
            width={800}
            height={400}
          />
          <h2 id="day3" className="text-2xl font-bold">Day 3</h2>
          <p className="text-gray-600 leading-relaxed">
            The final day included presentations of hackathon results, more case
            studies, and breakout sessions. Teams shared insights and gathered
            feedback directly from ALS staff, consolidating lessons learned from
            the previous two days.
          </p>

          <Image
            src={images[4]}
            alt="AUX 5"
            className="rounded-lg shadow-md"
            width={800}
            height={400}
          />
          <p id="conclusion" className="text-gray-600 leading-relaxed">
            The workshop concluded with a tour of the ALS, including several
            beamlines and the accelerator control room. Participants explored
            real-world interfaces, drawing inspiration to improve their own
            facilities. Overall, the ALS hosted a first-of-its-kind event that
            fostered cross-facility connections, taught fundamental UI/UX
            practices, and promoted a culture of thoughtful design across
            accelerator labs.
          </p>
        </article>

        {/* Right: Event Card */}
        <aside className="md:w-1/4 bg-white border rounded-2xl p-6 shadow-sm flex-shrink-0 h-fit sticky top-16">
          <div className="space-y-4">
            <p className="font-bold text-lg">Event Summary</p>
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
        </aside>
      </section>
    </main>
  );
}
