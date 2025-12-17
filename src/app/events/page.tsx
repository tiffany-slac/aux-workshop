"use client";

import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: 1,
    name: "2025, hosted by SLAC",
    slug: "2025",
  },
];

export default function EventsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Events
        </h1>
        <p className="text-lg text-white max-w-2xl">
          This is an archive of our past and current event information.
        </p>
      </section>

      {/* Upcoming */}
      <section className="p-4 border-b-2 border-t-2">
        <p className="text-lg max-w-2xl">Upcoming Events</p>
      </section>

      <section className="p-6 flex flex-col items-center gap-6">
        <Link
          href="/events/2026"
          className="w-full max-w-3xl flex items-center gap-4 rounded-xl shadow hover:shadow-lg transition bg-white p-4"
        >
          {/* Image */}
          <div className="relative w-40 h-28 flex-shrink-0">
            <Image
              src="/lbnl-event.png"
              alt="LBNL Campus"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-xl text-gray-600 font-semibold">
              2026, hosted by LBNL
            </p>
            <p className="text-sm text-gray-500 mt-1">February 25–27</p>
            <p className="text-sm text-gray-500 mt-1">
              1 Cyclotron Road, Berkeley, CA
            </p>
            <p className="text-blue-600 text-sm mt-1">View Event Details →</p>
          </div>
        </Link>
      </section>

      {/* Past */}
      <section className="p-4 border-b-2 border-t-2">
        <p className="text-lg max-w-2xl">Past Events</p>
      </section>

      <section className="p-6 flex flex-col items-center gap-6">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.slug}`}
            className="w-full max-w-3xl flex items-center gap-4 rounded-xl shadow hover:shadow-lg transition bg-white p-4"
          >
            {/* Image */}
            <div className="relative w-40 h-28 flex-shrink-0">
              <Image
                src="/slac-event.jpg"
                alt="SLAC Campus"
                fill
                className="rounded-lg object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-xl text-gray-600 font-semibold">
                2025, hosted by SLAC
              </p>
              <p className="text-sm text-gray-500 mt-1">February 26–28</p>
              <p className="text-sm text-gray-500 mt-1">
                2575 Sand Hill Rd, Menlo Park, CA
              </p>
              <p className="text-blue-600 text-sm mt-1">View Event Details →</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
