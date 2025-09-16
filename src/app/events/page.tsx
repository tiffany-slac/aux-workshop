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
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Events
        </h1>
        <p className="text-lg text-white max-w-2xl">
          This is an archive of our past and current event information.
        </p>
      </section>

      {/* Main Content */}
      <div>
        <section className="p-4 border-b-2 border-t-2">
          <p className="text-lg max-w-2xl">Upcoming Events</p>
        </section>

        <section className="p-6 space-y-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4 rounded-lg">
            <div className="w-full md:w-1/6 text-center">
              <p className="text-lg font-bold">2026</p>
              <p className="text-2xl uppercase text-gray-600">FEB</p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative w-64 md:w-80 lg:w-96 aspect-[4/3]">
                <Image
                  src="/lbnl-event.png"
                  alt="LBNL Campus"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1 italic text-center">
                Photo credit: Lawrence Berkeley Nat'l Lab
              </p>
            </div>
            <div className="w-full md:w-1/2 space-y-2">
              <h2 className="text-xl font-semibold">2026, hosted by LBNL</h2>
              <h3 className="text-md text-gray-500">February 25-27</h3>
              <p className="text-sm text-gray-600">
                6 Cyclotron Rd, Berkeley, CA 94720
              </p>
              <p className="text-sm text-gray-700">
                Information on our next event coming soon...
              </p>
              <Link
                href={`/events/2026`}
                className="mt-2 text-blue-600 hover:underline font-medium inline-block"
              >
                View Event Details →
              </Link>
            </div>
          </div>
        </section>
        <section className="p-4 border-b-2 border-t-2">
          <p className="text-lg max-w-2xl">Past Events</p>
        </section>

        <section className="p-6 space-y-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4 rounded-lg"
            >
              <div className="w-full md:w-1/6 text-center">
                <p className="text-lg font-bold">2025</p>
                <p className="text-2xl uppercase text-gray-600">Feb</p>
              </div>

              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="relative w-64 md:w-80 lg:w-96 aspect-[4/3]">
                  <Image
                    src="/slac-event.jpg"
                    alt="SLAC Campus"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1 italic text-center">
                  Photo credit: Olivier Bonin, SLAC National Accelerator
                  Laboratory
                </p>
              </div>
              <div className="w-full md:w-1/2 space-y-2">
                <h2 className="text-xl font-semibold">{event.name}</h2>
                <h3 className="text-md text-gray-500">February 26-28</h3>
                <p className="text-sm text-gray-600">
                  2575 Sand Hill Rd, Menlo Park, CA 94025
                </p>
                <p className="text-sm text-gray-700">
                  The Workshop Launch marked the first gathering...
                </p>
                <Link
                  href={`/events/${event.slug}`}
                  className="mt-2 text-blue-600 hover:underline font-medium inline-block"
                >
                  View Event Details →
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
