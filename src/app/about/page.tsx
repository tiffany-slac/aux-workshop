"use client";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-[40vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          About
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl">
          Join us to explore the importance of UI/UX in control systems and
          software applications at national laboratories.
        </p>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              emoji: "🌐",
              title: "Networking",
              description:
                "Connect with professionals from various national laboratories and share insights on UI/UX practices.",
            },
            {
              emoji: "🛠️",
              title: "Hands-On Sessions",
              description:
                "Participate in interactive workshops that focus on practical applications of UI/UX in control systems.",
            },
            {
              emoji: "💡",
              title: "Innovative Solutions",
              description:
                "Explore cutting-edge solutions and discuss how UI/UX can enhance software applications.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 text-center shadow-xl rounded-2xl bg-gray-50 hover:shadow-2xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
