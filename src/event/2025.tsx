export default function Event1() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-6 text-white">
        <h1 className="text-4xl font-bold mb-2">Workshop Launch</h1>
        <p className="text-lg">SLAC 2025</p>
      </section>

      {/* Event Info Section */}
      <section className="flex flex-col md:flex-row p-6 gap-8 border-b">
        {/* Left: Details */}
        <div className="md:w-3/5 space-y-4">
          <h2 className="text-2xl font-bold">Event Details</h2>
          <p>
            The Workshop Launch marked the first gathering of our UI/UX
            committee, bringing together members from FNAL, INL, IBL, and SLAC.
            After connecting at accelerator conferences and sharing common
            challenges, we realized that many labs were struggling to bridge the
            gap between operators and engineers when designing control systems.
            We saw a lack of guidance tailored to the unique needs of
            accelerator environments—where safety, usability, and efficiency are
            critical. This workshop became our starting point: a space to define
            shared goals, explore human factors in design, and rethink how
            standard UI/UX practices could be adapted to better serve our users
            in high-stakes, technical settings.
          </p>
          <p>
            Over three days, we laid the groundwork for a new kind of
            collaboration—one focused on practical, actionable design.
            Participants discussed everything from modernization strategies and
            user involvement to version control and interface consistency. In
            the short term, the workshop helped us shape the structure of future
            events and identify the most pressing topics. Looking ahead, we aim
            to grow a lasting community of practice that shares lessons, tools,
            and approaches to improve UI/UX in accelerator labs across the
            country.
          </p>
        </div>

        {/* Right: Date / Time / Location */}
        <div className="md:w-2/5 bg-gray-100 p-4 rounded-lg space-y-4">
          <div>
            <h3 className="font-semibold">Date</h3>
            <p>Feb 26-28, 2025</p>
          </div>
          <div>
            <h3 className="font-semibold">Time</h3>
            <p>9:00 AM – 5:00 PM</p>
          </div>
          <div>
            <h3 className="font-semibold">Location</h3>
            <p>2575 Sand Hill Rd, Menlo Park, CA 94025</p>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="p-ea6 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Agenda</h2>
        <div className="space-y-4">
          {[
            { date: "Feb 26", summary: "Kick off with introductions, overview of the workshop’s goals, and participants’ mini presentations (background, lessons, and challenges)." },
            { date: "Feb 27", summary: "Brainstorming groups or open sessions, white paper input, and component sketches." },
            { date: "Feb 28", summary: "Wrap-up with next steps, goal-setting, and optional tours or excursions." },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#1e88b6] text-white rounded-full flex items-center justify-center text-lg font-bold">
                {item.date}
              </div>
              <p className="text-md">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://via.placeholder.com/300x200" className="rounded" />
          <img src="https://via.placeholder.com/300x200" className="rounded" />
          <img src="https://via.placeholder.com/300x200" className="rounded" />
        </div>
      </section>

      {/* Related Resources */}
      <section className="p-6 border-t mt-8">
        <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Download Slides
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Watch Event Recording
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Speaker Bios
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
