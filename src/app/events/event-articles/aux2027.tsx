"use client";

export default function Aux2027() {

  return (
    <main className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="h-[30vh] bg-[#1e88b6] flex flex-col justify-center px-8 md:px-16 text-white">
        <h1 className="text-4xl font-bold mb-1">AUX Workshop 3</h1>
        <p className="text-lg opacity-90">3rd Annual Accelerate UX Workshop — February 24–26, 2027</p>
      </section>

      {/* Event Info Section */}
      <section className="grid md:grid-cols-3 gap-12 px-8 md:px-16 py-16 border-b">
        {/* Left */}
        <div className="md:col-span-2 max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold">Event Overview</h2>

          <p className="text-base leading-relaxed">
            The 3rd Annual Accelerate UX Workshop will take place February 24–26, 2027. More details coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
