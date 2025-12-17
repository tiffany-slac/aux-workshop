"use client";

import Link from "next/link";

export default function Event2() {
  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          2026, hosted by LBNL
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          2nd Annual Accelerator UX Workshop
        </p>
      </section>

      {/* Event Info Section */}
      <section className="px-8 md:px-16 py-10 space-y-6 md:space-y-0 md:flex md:gap-10">
        {/* Left: About the Event */}
        <div className="md:w-3/5 space-y-4">
          <h2 className="text-2xl font-bold">About the Event</h2>
          <p className="text-base leading-relaxed">
            At this 3-day event, you will meet with your peers to discuss the
            current state of UI/UX at accelerator facilities and help foster a
            growing community.
          </p>
          <p className="text-base leading-relaxed">
            Are you interested in joining the 2nd annual Accelerator UX
            Workshop? Fill out our interest form to be notified when
            registration opens. Please note that due to limited space,
            registration will be limited to 30 participants.
          </p>

          <Link
            href="https://forms.gle/CsyuJcwiUb4sSN9d9"
            target="_blank"
            className="inline-block mt-4 px-5 py-2 bg-[#1e88b6] text-white rounded hover:bg-[#1565a6] transition mr-4"
          >
            Interest Form
          </Link> 

          <Link
            href="https://indico.physics.lbl.gov/event/3289/"
            target="_blank"
            className="inline-block mt-4 px-5 py-2 bg-[#1e88b6] text-white rounded hover:bg-[#1565a6] transition"
          >
            Indico Site
          </Link>
          
        </div>

        {/* Right: Event Details */}
        <div className="md:w-2/5 bg-gray-100 p-6 rounded-xl shadow-sm space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">Where</h3>
            <p className="text-gray-600">
              1 Cyclotron Road, Berkeley, CA 94720
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">When</h3>
            <p className="text-gray-600">February 25th–27th, 2026</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Registration Cost</h3>
            <p className="text-gray-600">Free</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Contact</h3>
            <p className="text-gray-600">auxworkshop@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
