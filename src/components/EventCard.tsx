"use client";

import Image from "next/image";
import Link from "next/link";
import { EventItem } from "../app/data/events";

export default function EventCard({
  event,
  onClick,
}: {
  event: EventItem;
  onClick?: () => void;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-xl shadow hover:shadow-lg transition bg-white p-4">
      <div className="w-40 flex-shrink-0">
        <div className="relative w-full h-28">
        {event.useGradient || !event.image ? (
          <div className="w-full h-full rounded-lg bg-gradient-to-r from-[#1E88B6] to-[#D4B060] flex items-center justify-center">
            {event.type === "virtual" && (
              <svg
                className="w-10 h-10 text-white opacity-80"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                />
              </svg>
            )}
          </div>
        ) : (
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="rounded-lg object-cover"
          />
        )}
        </div>
        {event.imageCredit && (
          <p className="text-[10px] text-gray-400 italic mt-1 text-center">
            Photo: {event.imageCredit}
          </p>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className={`text-xl font-semibold ${event.status === "cancelled" ? "line-through text-gray-400" : "text-gray-600"}`}>
          {event.title}
        </p>
        <p className={`text-sm mt-1 ${event.status === "cancelled" ? "line-through text-gray-400" : "text-gray-500"}`}>
          {event.date}
        </p>
        <p className={`text-sm mt-1 ${event.status === "cancelled" ? "line-through text-gray-400" : "text-gray-500"}`}>
          {event.location}
        </p>
        {event.status === "cancelled" && event.cancelledReason && (
          <p className="text-sm text-red-400 mt-1">
            Cancelled — {event.cancelledReason}
          </p>
        )}
        {event.status !== "cancelled" && event.slug ? (
          <p className="text-blue-600 text-sm mt-1">View Event Details →</p>
        ) : event.status !== "cancelled" && event.meetingLink ? (
          <p className="text-blue-600 text-sm mt-1">Register / Join Zoom →</p>
        ) : null}
      </div>
    </div>
  );

  if (event.slug) {
    return (
      <Link href={`/events/${event.slug}`} className="w-full max-w-3xl block">
        {inner}
      </Link>
    );
  }

  if (event.meetingLink) {
    return (
      <a
        href={event.meetingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-3xl block"
      >
        {inner}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="w-full max-w-3xl text-left cursor-pointer"
      >
        {inner}
      </button>
    );
  }

  return <div className="w-full max-w-3xl">{inner}</div>;
}
