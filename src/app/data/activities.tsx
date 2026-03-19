import React from "react";

export type Activity = {
  id: number;
  date: string;
  title: string;
  details: React.ReactNode;
};

export const activities: Activity[] = [
  {
    id: 6,
    date: "Feb 25-27, 2025",
    title: "AUX 2026 — Event",
    details: (
      <div className="space-y-4">
        <p>
          In late Feb 2026, staff from 11 different accelerator lab facilities
          gathered at the Advanced Light Source for a 3 day event, the
          “Accelerate UX Workshop”. What could bring together so many different
          participants from across the US and abroad? The answer is simple: a
          chance to improve the user experience for operators, scientists,
          engineers, researchers, and all others who work at accelerator labs.
        </p>
        <p>
          View the full article{" "}
          <a href="/events/aux2026" className="text-[#1e88b6] underline">
            here
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: 5,
    date: "Dec 22, 2025",
    title: "AUX 2026 — Registration opens",
    details: (
      <div className="space-y-4">
        <p>
          The Accelerate User Experience Working Group is pleased to announce
          that registration is now open for the upcoming UX Workshop, taking
          place February 25–27, 2026, at the Advanced Light Source, Lawrence
          Berkeley National Lab.
        </p>
        <p>
          <a
            href="https://indico.physics.lbl.gov/e/accelerateux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e88b6] underline break-words"
          >
            https://indico.physics.lbl.gov/e/accelerateux
          </a>
        </p>
        <p>
          Registration is limited, so we encourage you to sign up early using
          the Indico link provided above.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    date: "Dec 11, 2025",
    title: "AUX 2026 — Indico site created",
    details: (
      <p>
        An Indico site has been created to provide a shared place to view the
        timetable for the 2026 AUX Workshop.
      </p>
    ),
  },
  {
    id: 3,
    date: "Oct 27, 2025",
    title: "AUX 2026 — Save-the-date announcement",
    details: (
      <p>
        A save-the-date notice was sent to all of those who filled out the
        interest form, announcing the upcoming AUX Workshop.
      </p>
    ),
  },
  {
    id: 2,
    date: "Sept 29, 2025",
    title: "ICALEPCS 2025 — Poster, mini-orals, and photos",
    details: (
      <div className="space-y-4">
        <p>
          Members of the AUX working group attended the 2025 ICALEPCS convention
          from three different national labs, providing talks on user experience
          and learning about the current state of UI/UX from other attendees.
        </p>
        <p>
          View the full article{" "}
          <a href="/events/icalepcs2025" className="text-[#1e88b6] underline">
            here
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: 1,
    date: "May 7, 2025",
    title: "AUX 2025 — Website launch",
    details: (
      <p>
        The official website has been launched, providing centralized access to
        workshop archives, documentation, and collaboration updates.
      </p>
    ),
  },
];
