"use client";

export default function Nobugs2026() {
  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          NOBUGS 2026, hosted by XFEL
        </h1>
        <p className="text-lg md:text-xl opacity-90">Satellite Workshop</p>
        <p className="text-sm text-gray-200 mt-2">
          Sep 25, 2026 · Hamburg, Germany
        </p>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-16 flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
        {/* Article */}
        <article className="md:w-2/3 space-y-6">
          <h2 id="overview" className="text-3xl font-bold">
            Event Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            On September 25, 2026, the Accelerate UX (AUX) Working Group hosted
            a satellite workshop at NOBUGS 2026 in Hamburg, Germany, bringing
            together scientists, software developers, and other professionals to
            explore practical approaches to improving user experience (UX) in
            scientific software.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The three-hour workshop combined real-world case studies, interactive
            exercises, and group discussions to demonstrate how UX principles can
            be applied to software development across research facilities.
          </p>

          <h2 id="case-studies" className="text-2xl font-bold">
            Learning from Real-World UX Challenges
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The workshop began with two case studies highlighting how
            user-centered design can guide the modernization of existing
            scientific applications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Madelyn Polzin presented Fermilab's efforts to modernize its Beam
            Position Monitor (BPM) plotting applications. Rather than
            maintaining multiple similar applications, the team explored
            consolidating them into a single interface. Through user research,
            workflow observations, and iterative prototyping, the project
            demonstrated how understanding user needs can help reduce cognitive
            load and simplify complex workflows.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Tiffany Tran followed with a case study on redesigning SCORE, a
            legacy Python application at SLAC. Instead of directly replicating
            the existing interface in React, the team first examined how users
            interacted with the application, identified pain points, and mapped
            workflows to better organize information and actions. The
            presentation emphasized that modernization is not simply about
            updating an application's appearance, but about improving how
            effectively it supports the people using it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Both case studies reinforced the importance of involving users
            throughout the design process, gathering feedback early, and making
            intentional design decisions before implementation.
          </p>

          <h2 id="exercises" className="text-2xl font-bold">
            Putting UX Principles into Practice
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Following the presentations, participants moved into hands-on
            activities designed to apply these concepts.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The first exercise, <strong>Bad UX Detective</strong>, challenged
            participants to identify common usability problems in example
            interfaces. Working in small groups, attendees examined problematic
            design patterns, discussed potential improvements, and considered how
            to prioritize fixes when development time and resources are limited.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The activity encouraged conversations about the challenges of
            maintaining consistent interfaces, incorporating user feedback, and
            establishing effective UX practices within different facilities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The second exercise focused on <strong>variant testing</strong>,
            introducing participants to a practical method for comparing
            interface designs and gathering user feedback. Using AI-generated
            Figma mockups, participants worked in pairs to practice asking
            questions, evaluating design alternatives, and understanding user
            preferences.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Rather than relying solely on assumptions when choosing between
            designs, the exercise demonstrated how even simple user interviews
            and comparisons can provide valuable insights to guide development
            decisions. No prior Figma experience was required, making the
            activity accessible to participants from different technical
            backgrounds.
          </p>

          <h2 id="conclusion" className="text-2xl font-bold">
            Building Better Software Together
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Throughout the workshop, a recurring theme was that good UX is a
            collaborative effort. Developers, designers, scientists, and
            operators each bring valuable perspectives that can help shape more
            intuitive and effective software.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The workshop concluded by revisiting the importance of understanding
            user workflows, questioning existing interface conventions, and
            testing design decisions before committing to implementation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As part of the broader NOBUGS conference, the satellite workshop
            also provided an opportunity to connect with an international
            community facing many of the same challenges in scientific software
            development.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Accelerate UX Working Group plans to continue these
            conversations through community meetings, shared resources, and
            future workshops, including its next annual workshop planned for
            February 2027.
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
                  <p className="font-medium">Sep 25, 2026</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Hamburg, Germany</p>
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
                  <a href="#case-studies" className="hover:underline">
                    Real-World UX Challenges
                  </a>
                </li>
                <li>
                  <a href="#exercises" className="hover:underline">
                    UX Principles in Practice
                  </a>
                </li>
                <li>
                  <a href="#conclusion" className="hover:underline">
                    Building Better Software Together
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-t pt-4">
              <ul className="space-y-2 text-[#1e88b6]">
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

      {/* Related Resources */}
      <section id="resources" className="px-6 md:px-16 pb-16 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Related Resources</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://www.figma.com/deck/juh8VkDFaMZmTWdhWkQNm7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-xl border hover:shadow-md transition"
          >
            <p className="font-semibold mb-1">
              Redesigning SCORE — Case Study Slides
            </p>
            <p className="text-sm text-gray-500">
              Tiffany Tran's presentation on modernizing a legacy Python
              application at SLAC
            </p>
          </a>

          <a
            href="https://seijdeleon.github.io/baduxdetective/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-xl border hover:shadow-md transition"
          >
            <p className="font-semibold mb-1">Bad UX Detective</p>
            <p className="text-sm text-gray-500">
              Interactive exercise for identifying common usability problems
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
