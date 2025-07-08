export default function Event2() {
  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl font-bold mb-1">Workshop 2</h1>
        <p className="text-lg opacity-90">2026</p>
      </section>

      {/* Event Info Section */}
      <section className="flex flex-col md:flex-row px-8 md:px-16 py-10 gap-10 border-b">
        {/* Left: Details */}
        <div className="md:w-3/5 space-y-4">
          <h2 className="text-2xl font-bold">Event Details</h2>
          <p className="text-base leading-relaxed">
            Description
          </p>
        </div>

        {/* Right: Date / Time / Location */}
        <div className="md:w-2/5 bg-gray-100 p-6 rounded-xl shadow-sm space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">Date</h3>
            <p className="text-gray-600">TBA</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Time</h3>
            <p className="text-gray-600">9:00 AM – 5:00 PM</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Location</h3>
            <p className="text-gray-600">TBA</p>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="px-8 md:px-16 py-10 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Agenda</h2>
        <div className="space-y-6">
          {[
            {
              date: "Day 1",
              summary:
                "Kick off with introductions, overview of the workshop’s goals, and participants’ mini presentations (background, lessons, and challenges).",
            },
            {
              date: "Day 2",
              summary:
                "Brainstorming groups or open sessions, white paper input, and component sketches.",
            },
            {
              date: "Day 3",
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
          <img src="https://via.placeholder.com/300x200" className="rounded-lg shadow-sm" alt="Gallery image" />
          <img src="https://via.placeholder.com/300x200" className="rounded-lg shadow-sm" alt="Gallery image" />
          <img src="https://via.placeholder.com/300x200" className="rounded-lg shadow-sm" alt="Gallery image" />
        </div>
      </section>

      {/* Related Resources */}
      <section className="px-8 md:px-16 py-10 border-t bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-blue-700">
          <li>
            <a href="#" className="hover:underline">Download Slides</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Watch Event Recording</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Speaker Bios</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
