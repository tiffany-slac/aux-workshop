export type EventStatus = "upcoming" | "past" | "cancelled";
export type EventType = "in-person" | "virtual";

export type EventItem = {
  id: number;
  title: string;
  date: string;
  location: string;
  slug?: string;
  image?: string;
  imageCredit?: string;
  useGradient?: boolean;
  status: EventStatus;
  type: EventType;
  meetingLink?: string;
  cancelledReason?: string;
};

export const events: EventItem[] = [
  {
    id: 13,
    title: "Collaborator Meeting #7",
    date: "October 28, 2026",
    location: "Zoom",
    status: "past",
    type: "virtual",
  },
  {
    id: 12,
    title: "Collaborator Meeting #6",
    date: "September 30, 2026",
    location: "Zoom",
    status: "cancelled",
    cancelledReason: "NOBUGS 2026",
    type: "virtual",
  },
  {
    id: 11,
    title: "Collaborator Meeting #5",
    date: "August 26, 2026",
    location: "Zoom",
    status: "past",
    type: "virtual",
  },
  {
    id: 10,
    title: "Collaborator Meeting #4",
    date: "July 29, 2026",
    location: "Zoom",
    status: "past",
    type: "virtual",
  },
  {
    id: 9,
    title: "Collaborator Meeting #3",
    date: "June 24, 2026",
    location: "Zoom",
    status: "past",
    type: "virtual",
  },
  {
    id: 8,
    title: "Collaborator Meeting #2",
    date: "May 27, 2026",
    location: "Zoom",
    status: "past",
    type: "virtual",
  },
  {
    id: 7,
    title: "Collaborator Meeting #1",
    date: "April 29, 2026",
    location: "Zoom",
    status: "past",
    type: "virtual",
  },
  {
    id: 6,
    title: "Collaborator Meeting — Recurring Series",
    date: "Monthly (recurring every last Wednesday of the month)",
    location: "Zoom",
    status: "upcoming",
    type: "virtual",
    meetingLink:
      "https://stanford.zoom.us/meeting/register/ehBC6BHiRWqC7qSM8lp4SQ",
  },
  {
    id: 4,
    title: "AUX 2027, hosted by SLAC",
    date: "February 24–26",
    location: "SLAC National Accelerator Laboratory",
    slug: "aux2027",
    image: "/slac-event2.jpg",
    imageCredit: "Olivier Bonin, SLAC National Accelerator Laboratory",
    status: "upcoming",
    type: "in-person",
  },
  {
    id: 5,
    title: "NOBUGS 2026, hosted by XFEL",
    date: "September 25",
    location: "DESY Campus, Hamburg, Germany",
    slug: "nobugs2026",
    image: "/desy.png",
    status: "past",
    type: "in-person",
  },
  {
    id: 3,
    title: "AUX 2026, hosted by LBNL",
    date: "February 25–27",
    location: "1 Cyclotron Road, Berkeley, CA",
    slug: "aux2026",
    image: "/AUX2026/aux0.png",
    imageCredit: "Lawrence Berkeley Nat'l Lab",
    status: "past",
    type: "in-person",
  },
  {
    id: 2,
    title: "ICALEPCS 2025, hosted by ANL",
    date: "September 25",
    location: "17 E Monroe St, Chicago, IL",
    slug: "icalepcs2025",
    image: "/ICALEPCS2025/icalepcs0.jpg",
    status: "past",
    type: "in-person",
  },
  {
    id: 1,
    title: "AUX 2025, hosted by SLAC",
    date: "February 26–28",
    location: "2575 Sand Hill Rd, Menlo Park, CA",
    slug: "aux2025",
    image: "/slac-event.jpg",
    imageCredit: "Olivier Bonin, SLAC National Accelerator Laboratory",
    status: "past",
    type: "in-person",
  },
];
