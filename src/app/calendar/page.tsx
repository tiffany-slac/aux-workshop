"use client";
import Calendar from "@/components/Calendar";

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center px-4">
        <h1
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Calendar
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl">
          Zoom links to be added here for upcoming meetings.
        </p>
      </section>

      <section className="py-20 px-6 bg-white">
        <Calendar />
      </section>
    </main>
  );
}
