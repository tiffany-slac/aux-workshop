"use client";

export default function Aux2027() {
  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          2027, hosted by SLAC
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          3rd Annual Accelerate UX Workshop
        </p>
        <p className="text-sm text-gray-200 mt-2">
          Mar 3–5, 2027 · Menlo Park, CA
        </p>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-16 flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
        {/* Article */}
        <article className="md:w-2/3 space-y-10">
          {/* About */}
          <div id="about" className="space-y-4">
            <h2 className="text-3xl font-bold">About</h2>
            <p className="text-gray-700 leading-relaxed">
              A three-day event bringing together staff from accelerator labs to
              share experiences, learn modern UX practices, and collaborate.
              Organized by the Accelerate UX Working Group with members from ALS,
              SLAC, and Fermilab.
            </p>
          </div>

          {/* Goals as cards */}
          <div id="goals" className="space-y-4">
            <h2 className="text-2xl font-bold">Goals</h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Teach",
                  text: "Encourage the use of modern UX practices in software development at accelerator labs.",
                },
                {
                  title: "Build",
                  text: "Identify common needs and develop shared resources to make it easier to incorporate UX practices.",
                },
                {
                  title: "Grow",
                  text: "Expand our community to include more staff from other labs and international facilities.",
                },
              ].map((goal) => (
                <div
                  key={goal.title}
                  className="border rounded-xl p-5 hover:shadow-sm transition"
                >
                  <p className="font-semibold text-[#1e88b6] mb-1">
                    {goal.title}
                  </p>
                  <p className="text-gray-600 text-sm">{goal.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Is this for you — card grid */}
          <div id="who" className="space-y-4">
            <h2 className="text-2xl font-bold">Is this for you?</h2>
            <p className="text-gray-700 leading-relaxed">
              Open to anyone at an accelerator lab working in software
              development, GUI development, beamline or accelerator controls, or
              scientific analysis software.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "How do labs without dedicated UI/UX designers still implement good design?",
                "Want to share your own UI/UX practices and learn from others?",
                "Curious about the design systems and component libraries other labs are building?",
                "Want to learn the latest prototyping tools and how to use them?",
              ].map((q, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border rounded-xl p-5 text-sm text-gray-700 leading-relaxed"
                >
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div id="details" className="space-y-4">
            <h2 className="text-2xl font-bold">Details</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Dates", value: "Mar 3–5, 2027" },
                { label: "Location", value: "SLAC · Menlo Park, CA" },
                { label: "Indico Page", value: "TBA" },
              ].map((d) => (
                <div
                  key={d.label}
                  className="bg-gray-50 border rounded-xl p-5 text-center"
                >
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                    {d.label}
                  </p>
                  <p className="font-semibold text-gray-800">{d.value}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="md:w-1/3 flex-shrink-0">
          <div className="sticky top-16 bg-white border rounded-2xl p-6 shadow-sm space-y-6">
            <div>
              <p className="font-bold text-lg mb-4">Event Details</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400">Date</p>
                  <p className="font-medium">Mar 3–5, 2027</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">SLAC · Menlo Park, CA</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Indico Page</p>
                  <p className="font-medium">TBA</p>
                </div>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="font-bold text-lg mb-3">Contents</p>
              <ul className="space-y-2 text-[#1e88b6]">
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#goals" className="hover:underline">
                    Goals
                  </a>
                </li>
                <li>
                  <a href="#who" className="hover:underline">
                    Is this for you?
                  </a>
                </li>
                <li>
                  <a href="#details" className="hover:underline">
                    Details
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
