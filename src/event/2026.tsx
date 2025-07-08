export default function Event2() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-6 text-white">
        <h1 className="text-4xl font-bold mb-2">Workshop 2</h1>
        <p className="text-lg">2026</p>
      </section>

      {/* Event Info Section */}
      <section className="flex flex-col md:flex-row p-6 gap-8 border-b">
        {/* Left: Details */}
        <div className="md:w-3/5 space-y-4">
          <h2 className="text-2xl font-bold">Event Details</h2>
          <p>
            The Workshop
          </p>
        </div>

        {/* Right: Date / Time / Location */}
        <div className="md:w-2/5 bg-gray-100 p-4 rounded-lg space-y-4">
          <div>
            <h3 className="font-semibold">Date</h3>
            <p>TBA</p>
          </div>
          <div>
            <h3 className="font-semibold">Time</h3>
            <p>9:00 AM – 5:00 PM</p>
          </div>
          <div>
            <h3 className="font-semibold">Location</h3>
            <p>TBA</p>
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
