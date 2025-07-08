export default function Event1() {
  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl font-bold mb-1">Workshop Launch</h1>
        <p className="text-lg opacity-90">SLAC 2025</p>
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
            collaboration—one focused on practical, actionable design.
            We discussed everything from modernization strategies and
            user involvement to version control and interface consistency.
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
            <div key={index} className="flex items-start gap-5">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="https://via.placeholder.com/300x200"
            className="rounded-lg shadow-sm"
            alt="Gallery image"
          />
          <img
            src="https://via.placeholder.com/300x200"
            className="rounded-lg shadow-sm"
            alt="Gallery image"
          />
          <img
            src="https://via.placeholder.com/300x200"
            className="rounded-lg shadow-sm"
            alt="Gallery image"
          />
        </div>
      </section>

      {/* Related Resources */}
      <section className="px-8 md:px-16 py-10 border-t bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-blue-700">
          <li>
            <a href="#" className="hover:underline">
              View Poster
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Download Article
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
