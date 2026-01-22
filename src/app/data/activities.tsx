import React from "react";

export type Activity = {
  id: number;
  date: string;
  title: string;
  details: React.ReactNode;
};

export const activities: Activity[] = [
  {
    id: 5,
    date: "Dec 22, 2025",
    title: "[AUX Workshop 2026] Registration opens",
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
    title: "[AUX Workshop 2026] Indico site created",
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
    title: "[AUX Workshop 2026] Save-the-date announcement",
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
    title: "ICALEPCS Poster, mini-orals, and photo set published",
    details: (
      <div className="space-y-4">
        <p>
          Members of the AUX working group attended the 2025 ICALEPCS convention
          from three different national labs, providing talks on user experience
          and learning about the current state of UI/UX from other attendees.
        </p>

        <img
          src="/ICALEPCS2025/icalepcs1.png"
          alt="ICALEPCS 1"
          className="rounded-lg shadow-md"
        />

        <p>
          A GUI satellite meeting was held by Chris Roderick (CERN) on the
          weekend before the main conference, where participants from many
          facilities gave overview presentations on their lab’s adoption and
          techniques related to UI/UX. The AUX group presented for the first
          time on the beginnings of the working group, the common pain points
          that they have identified, and how the group plans to serve the
          community by crafting resources and hosting workshops.
        </p>

        <p>
          As the conference continued, working group members gave individual
          presentations related to software development and UI/UX at their
          respective labs.
        </p>

        <img
          src="/ICALEPCS2025/icalepcs2.png"
          alt="ICALEPCS 2"
          className="rounded-lg shadow-md"
        />

        <p>
          Madelyn Polzin shared her work at Fermilab focused on modernizing
          accelerator control systems and the importance of bringing in users to
          shape future developments.{" "}
          <a
            href="https://indico.jacow.org/event/86/contributions/10099/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e88b6] underline"
          >
            Link
          </a>
        </p>

        <p>
          Seij De Leon presented at the Bluesky community workshop on his work
          creating web interfaces for beamline endstations, where the
          development process has been expanded to include UX procedures learned
          from the AUX group.{" "}
          <a
            href="https://indico.jacow.org/event/86/page/360-bluesky-satellite-workshop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e88b6] underline"
          >
            Link
          </a>
        </p>

        <img
          src="/ICALEPCS2025/icalepcs3.png"
          alt="ICALEPCS 3"
          className="rounded-lg shadow-md"
        />
        <p>
          Rounding off the convention, Tiffany Tran gave an overview on the AUX
          group in the main ballroom to all general attendees, helping to spread
          word of the group’s mission and encourage participation in the next
          annual AUX workshop.{" "}
          <a
            href="https://indico.jacow.org/event/86/contributions/10382/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e88b6] underline"
          >
            Link
          </a>
          ,{" "}
          <a
            href="https://www.figma.com/deck/H06yHFdWcQESEijfunRdGS/Mini-Oral?node-id=1-553&t=3dGYPWh0dX6teOcv-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e88b6] underline"
          >
            Figma Deck
          </a>
        </p>

        <img
          src="/ICALEPCS2025/icalepcs4.png"
          alt="ICALEPCS Poster"
          className="rounded-lg shadow-md"
        />

        <p>
          Throughout the conference there were regular poster sessions where
          attendees could speak with each other directly. Maddie and Tiffany
          explained the AUX group’s goals and strategy for standardizing UI/UX
          at poster #94.
        </p>

        <p>
          ICALEPCS provided ample discussions and insights from other developers
          and engineers, which the AUX group is hoping to foster again during
          the 2nd annual workshop hosted February 2026 at Berkeley Lab.
        </p>

        <img
          src="/ICALEPCS2025/icalepcs5.png"
          alt="ICALEPCS 5"
          className="rounded-lg shadow-md"
        />
      </div>
    ),
  },
  {
    id: 1,
    date: "May 7, 2025",
    title: "Website launch",
    details: (
      <p>
        The official website has been launched, providing centralized access to
        workshop archives, documentation, and collaboration updates.
      </p>
    ),
  },
];
