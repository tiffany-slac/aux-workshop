export type Activity = {
  id: number;
  date: string;
  title: string;
  details: string;
};

export const activities: Activity[] = [
  {
    id: 4,
    date: "Dec 11, 2025",
    title: "Indico site created",
    details:
      "An Indico site has been created to provide a shared place to view the timetable for the 2026 AUX Workshop.",
  },
  {
    id: 3,
    date: "Oct 27, 2025",
    title: "Save-the-date announcement for AUX Workshop",
    details:
      "A save-the-date notice was sent to all of those who filled out the interest form, announcing the upcoming AUX Workshop.",
  },
  {
    id: 2,
    date: "Sept 29, 2025",
    title: "ICALEPCS Poster, mini-orals, and photo set published",
    details:
      "All presentation materials and the curated photo set from ICALEPCS have been published and made available to the collaboration.",
  },
  {
    id: 1,
    date: "May 7, 2025",
    title: "Website launch",
    details:
      "The official website has been launched, providing centralized access to workshop archives, documentation, and collaboration updates.",
  },
];
