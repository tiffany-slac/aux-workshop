"use client";

import Image from "next/image";

const team = [
  {
    name: "Seij De Leon",
    title: "Software Developer",
    lab: "Lawrence Berkeley National Laboratory",
    image: "/Seij.png",
  },
  {
    name: "Madelyn Polzin",
    title: "User Experience Engineer",
    lab: "Fermi National Accelerator Laboratory",
    image: "/Maddie.png",
  },
  {
    name: "Tiffany Tran",
    title: "Software Developer",
    lab: "SLAC National Accelerator Laboratory",
    image: "/Tiffany.png",
  },
  {
    name: "Rachael Hill",
    title: "Human Factors Scientist",
    lab: "Idaho National Laboratory",
    image: "/Rachael.png",
  },
  {
    name: "Zachary Spielman",
    title: "Human Factors Scientist",
    lab: "Idaho National Laboratory",
    image: "/Zach.png",
  },
  {
    name: "Casey Kovesdi",
    title: "Human Factors Scientist",
    lab: "Idaho National Laboratory",
    image: "/Casey.png",
  },
  {
    name: "Tasha Summers",
    title: "Department Head",
    lab: "SLAC National Accelerator Laboratory",
    image: "/Tasha.png",
  },
  {
    name: "Katya Le Blanc",
    title: "Senior Human Factors Scientist",
    lab: "Idaho National Laboratory",
    image: "/Katya.png",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center px-4">
        <h1
          className="text
        -5xl md:text-6xl font-bold text-white mb-4"
        >
          About Us
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl">
          The Accelerate User eXperience Working Group (AUX-WG)
        </p>
      </section>

      {/* Team Profiles */}
      <section className="py-20 px-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <div className="relative mb-4 h-56 w-40 overflow-hidden rounded-3xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.title}</p>
              <p className="text-sm text-blue-700 font-medium">{member.lab}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
