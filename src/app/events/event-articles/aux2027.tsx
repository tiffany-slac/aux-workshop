"use client";

export default function Aux2027() {
  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          AUX Workshop 3
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          3rd Annual Accelerate UX Workshop
        </p>
        <p className="text-sm text-gray-200 mt-2">Feb 24–26, 2027</p>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-16 flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
        {/* Article */}
        <article className="md:w-2/3 space-y-6">
          <h2 id="overview" className="text-3xl font-bold">
            Event Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The 3rd Annual Accelerate UX Workshop will take place February
            24–26, 2027. More details coming soon.
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
                  <p className="font-medium">Feb 24–26, 2027</p>
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
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
