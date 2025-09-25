import Image from "next/image";
import Link from "next/link";
import { MousePointer, Settings, Code } from "react-feather";

export default function HomePage() {
  return (
    <div>
      {/* First Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center overflow-hidden h-[calc(100vh-5rem)]">
        <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-[10%] w-[50vw] h-[70vh] justify-center items-center z-10 rounded-lg overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/landingpage.png"
              alt="UI/UX Design"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Text content (fills left half on md+, full width on mobile) */}
        <div className="w-full md:w-1/2 flex items-center p-6 md:pl-16 z-20">
          <div className="max-w-md mx-auto md:mx-0">
            <p className="text-lg font-bold text-[#1e88b6] mb-2">
              Elevating User Experience
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-2">
              Current UI/UX Standards at Accelerator Laboratories
            </h1>
            <p className="text-base md:text-lg text-[#333] mb-5">
              Welcome to a Community of Guidance and Support
            </p>
            <Link href="/resources/get-started" passHref>
              <button className="bg-[#1e88b6] text-white text-base py-2 px-5 rounded hover:bg-[#1565a6] transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Blue background panel: only on desktop (right half) */}
        <div className="hidden md:block md:w-1/2 bg-[#1e88b6] h-full z-0" />

        {/* Mobile image: visible below text on small screens only */}
        <div className="md:hidden w-full h-64 flex items-center justify-center mt-12">
          <Image
            src="/landingpage.png"
            alt="UI/UX Design"
            width={700}
            height={420}
            className="object-contain"
          />
        </div>
      </section>
      {/* Second Section - Labs */}
      <section className="py-20 h-[75vh] bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center mb-10">
          Participating Laboratories
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-14 px-5">
          {["berkeley.png", "fnal.png", "inl.png", "slac.png"].map(
            (logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={`/${logo}`}
                  alt={`${logo} logo`}
                  width={160}
                  height={100}
                  className="object-cover"
                />
              </div>
            )
          )}
        </div>
      </section>
      {/* About Section */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="col-span-1 flex justify-center">
            <Image
              src="/graphic.png"
              alt="Workshop Graphic"
              width={300}
              height={300}
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-lg font-semibold text-[#1e88b6] mb-2 uppercase tracking-wide">
              About the Workshop
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Importance of UI/UX Design in Control Systems
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Taking the time to focus on UI/UX isn’t an extra step—it’s the
              foundation of success. The best technology is only as powerful as
              its usability. By prioritizing human factors, we create systems
              that work <em>for people</em>.
            </p>
          </div>
        </div>
      </section>
      {/* Google Form Section */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Workshop Interest Form
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Interested in joining our upcoming workshop? Fill out this form to
            let us know, and we’ll keep you updated with details and
            registration information.
          </p>

          <div className="w-full aspect-[9/16] md:aspect-[16/9] relative">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScFoTrVgCo8De1UYG7IZkDsIW_x6dOpkJ2dKOhed9sCH1yj_w/viewform"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="bg-gray-50 py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg font-semibold text-[#1e88b6] mb-2 uppercase tracking-wide">
            Audience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who’s Involved?
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            A gathering of professionals to consolidate best practices for
            control systems.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: <MousePointer size={48} className="text-[#1e88b6]" />,
                title: "UI/UX Experts",
                desc: "Designers focused on user experience for control systems.",
              },
              {
                icon: <Settings size={48} className="text-[#1e88b6]" />,
                title: "Control System Specialists",
                desc: "Experts working with research control systems.",
              },
              {
                icon: <Code size={48} className="text-[#1e88b6]" />,
                title: "Software Engineers",
                desc: "Engineers developing applications for operational excellence.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* What We Are Doing Section */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg font-semibold text-[#1e88b6] mb-2 uppercase tracking-wide">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            What We Are Doing
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
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
            ].map(({ emoji, title, description }, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{emoji}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
