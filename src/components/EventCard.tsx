"use client";

import Image from "next/image";
import Link from "next/link";
import { EventItem } from "../app/data/events";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="w-full max-w-3xl flex items-center gap-4 rounded-xl shadow hover:shadow-lg transition bg-white p-4"
    >
      <div className="relative w-40 h-28 flex-shrink-0">
        {event.useGradient ? (
          <div className="w-full h-full rounded-lg bg-gradient-to-r from-[#1E88B6] to-[#D4B060]" />
        ) : (
          <Image
            src={event.image!}
            alt={event.title}
            fill
            className="rounded-lg object-cover"
          />
        )}
      </div>

      <div className="flex-1">
        <p className="text-xl text-gray-600 font-semibold">{event.title}</p>
        <p className="text-sm text-gray-500 mt-1">{event.date}</p>
        <p className="text-sm text-gray-500 mt-1">{event.location}</p>
        <p className="text-blue-600 text-sm mt-1">View Event Details →</p>
      </div>
    </Link>
  );
}
