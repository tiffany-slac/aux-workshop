"use client";

import EventCard from "../../components/EventCard";
import { events } from "../data/events";

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const pastEvents = events.filter((e) => e.status === "past");
  
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
        {upcomingEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>

      {/* Past */}
      <section className="p-4 border-b-2 border-t-2">
        <p className="text-lg max-w-2xl">Past Events</p>
      </section>

      <section className="p-6 flex flex-col items-center gap-6">
        {pastEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </main>
  );
}
