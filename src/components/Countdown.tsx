"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-02-26T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-4 bg-white rounded-xl shadow-lg p-3 w-full max-w-md mx-auto flex items-center space-x-4">
      <p className="text-sm font-semibold text-gray-600 whitespace-nowrap">
        Next event in
      </p>
      <div className="flex space-x-2">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-gray-50 rounded-lg shadow-sm px-3 py-2 flex items-center min-w-[70px]"
          >
            <p className="text-xl font-bold text-[#1e88b6] mr-1">{value}</p>
            <p className="text-xs font-medium text-gray-600">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
