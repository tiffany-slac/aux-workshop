import Image from "next/image";
import { MousePointer, Settings, Code } from "react-feather";

export default function HomePage() {
  return (
    <div>
      {/* First Section */}
      <section className="flex h-screen relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-[10%] -translate-y-1/2 w-[50vw] h-[70vh] bg-[#D4B060] flex justify-center items-center">
          <Image
            src="/uiux.jpeg"
            alt="UI/UX Design"
            width={800}
            height={600}
            className="object-contain max-w-[90%] max-h-[90%]"
          />
        </div>

        <div className="w-1/2 flex items-center p-5 -translate-y-[10%] z-10">
          <div className="max-w-md text-left ml-6">
            <p className="text-lg font-bold text-[#1e88b6] mb-2">
              Elevating User Experience
            </p>
            <h1 className="text-5xl font-bold text-black mb-2">
              Current UI/UX Standards at Accelerator Laboratories
            </h1>
            <p className="text-lg text-[#333] mb-5">
              Welcome to a Community of Guidance and Support
            </p>
            <a href="/event">
              <button className="bg-[#1e88b6] text-white text-base py-2 px-5 rounded hover:bg-[#1565a6] transition">
                Learn More
              </button>
            </a>
          </div>
        </div>

        <div className="w-1/2 bg-[#1e88b6]"></div>
      </section>

      {/* Second Section - Labs */}
      <section className="py-20 h-[75vh] bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center mb-10">
          Participating Laboratories
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-5">
          {["berkeley.jpg", "fnal.jpg", "inl.png", "slac.svg"].map(
            (logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={`/${logo}`}
                  alt={`${logo} logo`}
                  width={160}
                  height={100}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* Third Section - About */}
      <section className="flex py-20 h-[75vh] bg-white">
        <div className="w-1/4 mx-12 flex justify-center items-center">
          <Image
            src="/graphic.jpeg"
            alt="Workshop Graphic"
            width={300}
            height={300}
          />
        </div>

        <div className="w-2/3 mx-6 flex flex-col justify-center p-5">
          <div className="max-w-2xl text-left mb-6">
            <p className="text-lg font-bold text-[#1e88b6] mb-2">
              ABOUT THE WORKSHOP
            </p>
            <h1 className="text-5xl font-bold text-black mb-2">
              The Importance of UI/UX Design in Control Systems
            </h1>
            <p className="text-lg text-[#333]">
              Taking the time to focus on UI/UX isn’t an extra step—it’s the
              foundation of success. The best technology is only as powerful as
              its usability. By prioritizing human factors, we create systems
              that work *for people*.
            </p>
          </div>
        </div>
      </section>

      {/* Fourth Section - Audience */}
      <section className="flex py-20 h-[75vh] bg-gray-100">
        <div className="mx-6 flex flex-col justify-center p-5">
          <div className="text-left mb-6">
            <p className="text-lg font-bold text-[#1e88b6] mb-2">AUDIENCE</p>
            <h1 className="text-5xl font-bold text-black mb-4">
              Who's Involved?
            </h1>
            <p className="text-lg text-[#333] mb-8">
              A gathering of professionals to consolidate best practices for
              control systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cards */}
            {[
              {
                icon: <MousePointer size={64} className="text-[#1e88b6]" />,
                title: "UI/UX Experts",
                desc: "Designers focused on user experience for control systems.",
              },
              {
                icon: <Settings size={64} className="text-[#1e88b6]" />,
                title: "Control System Specialists",
                desc: "Experts working with research control systems.",
              },
              {
                icon: <Code size={64} className="text-[#1e88b6]" />,
                title: "Software Engineers",
                desc: "Engineers developing applications for operational excellence.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg"
              >
                {icon}
                <h2 className="text-xl font-semibold text-[#1e88b6] mt-4">
                  {title}
                </h2>
                <p className="text-md text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
