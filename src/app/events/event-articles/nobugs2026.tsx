"use client";

import { useRef } from "react";

export default function Nobugs2026() {
  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl font-bold mb-1">NOBUGS 2026, hosted by XFEL</h1>
        <p className="text-lg opacity-90">Satellite Workshop</p>
      </section>

      {/* Event Info Section */}
      <section className="grid md:grid-cols-3 gap-12 px-8 md:px-16 py-16 border-b">
        {/* Left */}
        <div className="md:col-span-2 max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold">Event Overview</h2>

          <p className="text-base leading-relaxed">
            The AUX group's next event will be hosting a satellite meeting in
            September at NOBUGS 2026 in Hamburg, Germany. Following the success
            of this year’s event, the team is excited to refine its hands-on
            training to better serve and support the accelerator community.
          </p>
          <p className="text-base leading-relaxed">
            The satellite workshop will be a half-day event tentatively scheduled for Friday 09/25/2026 morning.
          </p>
        </div>
      </section>
    </main>
  );
}
