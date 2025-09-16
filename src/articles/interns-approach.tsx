"use client";

import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";

export default function InternsApproach() {
//   const [headings, setHeadings] = useState<
//     { id: string; text: string; level: number }[]
//   >([]);

//   useEffect(() => {
//     // Grab all h2 and h3 headings
//     const elems = Array.from(
//       document.querySelectorAll("article h2, article h3")
//     );
//     setHeadings(
//       elems.map((el) => ({
//         id: el.id,
//         text: el.textContent || "",
//         level: el.tagName === "H2" ? 2 : 3,
//       }))
//     );
//   }, []);

  return (
    // <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-8">
      <article className="max-w-4xl mx-auto p-8 space-y-8">
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex space-x-1">
            <li>
              <Link href="/resources">
                <p className="text-blue-700 hover:underline">Resources</p>
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-500">An Intern's Approach</li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold mb-6">ReactEDM - UX Procedure</h1>

        <p className="text-lg leading-relaxed">
          This is a blog post showing how the 5 steps from the AUX group were
          utilized throughout the development process of a web based interface
          that provides an MEDM control screen interface.
        </p>

        <section id="step1">
          <h2 className="text-2xl font-semibold mb-3">
            Step 1 Define System Objectives
          </h2>
          <p className="italic text-gray-600 mb-4">
            The objectives defined are bound by the system being designed or
            redesigned. This establishes alignment between team members on what
            the outcome should accomplish.
          </p>
          <h2 className="text-2xl text-gray-600 font-semibold mb-3">
            Implementation
          </h2>
          <p className="leading-relaxed mb-4">
            For this project, I aimed to render ADL files in the web browser so
            as to eliminate the tedious process of building MEDM from source.
            MEDM is the frontend application for the EPICS control system, and
            it is quite old. MEDM uses ADL files to display control interfaces,
            and my project renders ADL files in the browser for ease of use.
          </p>
          <p className="leading-relaxed mb-4">
            Being able to use ADL files in the web browser allows anyone to use
            common control interfaces from any computer and have a modern look
            and feel to it.
          </p>
          <p className="leading-relaxed mb-4">
            This application should be able to support any ADL file by being
            able to parse a documented list of components that MEDM supports.
          </p>
          <p className="leading-relaxed mb-4">
            The system objectives were defined in the project given to me
            through the ASPIRES internship program, and the scope of the project
            was refined as the project progressed. The objective was to recreate
            the functionality of ADL files in a web browser while giving them a
            modernized design, ensuring none of their original capabilities were
            lost.
          </p>
        </section>

        <section id="step2">
          <h2 className="text-2xl font-semibold mb-3">
            Step 2 Document End User Process
          </h2>
          <p className="italic text-gray-600 mb-4">
            The end-user process refers to how the objectives are achieved by
            those who interact with the system. This establishes a record of how
            to achieve the objectives useful for designing a better system.
          </p>
          <h2 className="text-2xl text-gray-600 font-semibold mb-3">
            Implementation
          </h2>
          <h3 className="text-xl text-gray-600 font-semibold mb-3">
            Developing requirements
          </h3>
          <p className="leading-relaxed mb-4">
            To help refine the scope of the project and to get feedback from
            potential end users of this application, I began writing a
            requirements document. This described the background of the project,
            as well as features and use cases that beamline users would want in
            the software. I also conducted interviews with experienced MEDM
            users to understand their needs and expectations, incorporating
            their input into the document.
          </p>
          <Image
            src="/intern1.png"
            alt="Diagram showing one wireframe"
            width={400}
            height={300}
            className="rounded-lg mx-auto my-8"
          />
          <p className="leading-relaxed mb-4">
            A big part of documenting end-user processes was getting common
            control screens for different setups. These were the ADL files that
            scientists most commonly worked with at the ALS, and were good
            starting points for recreating in my app. I first started with a
            simple ADL file that just took some inputs and had some buttons and
            a dropdown.
          </p>
          <Image
            src="/intern2.png"
            alt="Diagram showing one wireframe"
            width={400}
            height={300}
            className="rounded-lg mx-auto my-8"
          />
          <p className="leading-relaxed mb-4">
            This gave me a good idea of typical widgets in ADL files.
          </p>
          <h3 className="text-xl text-gray-600 font-semibold mb-3">
            First User Interview
          </h3>
          <p className="leading-relaxed mb-4">
            To understand what features beamline scientists needed, I spoke with
            an experienced end-user who had extensive experience using MEDM for
            area detectors, as well as my mentor, who had had experience with
            MEDM. Since I was building on an existing GUI framework, I already
            had a basic understanding of the final product's structure. These
            conversations with scientists helped me identify ways to modernize
            MEDM and improve its accessibility for end users.
          </p>
          <p className="leading-relaxed mb-4">
            The conversation was structured so that the end users showed me a
            typical way they used MEDM, and ways they wish they could use my
            product. Whilst talking with them, I took notes on the specific
            complaints and discussed possible solutions to them. Over the course
            of the conversation, I developed a list of requirements for the UI
            of my software.
          </p>
          <Image
            src="/intern3.png"
            alt="Diagram showing one wireframe"
            width={400}
            height={300}
            className="rounded-lg mx-auto my-8"
          />
          <Image
            src="/intern4.png"
            alt="Diagram showing one wireframe"
            width={400}
            height={300}
            className="rounded-lg mx-auto my-8"
          />
          <h3 className="text-xl text-gray-600 font-semibold mb-3">
            Second User Interview
          </h3>
          <p className="leading-relaxed mb-4">
            I spoke to a scientist from the Argonne National Laboratory who had
            a lot of experience with control screens to get a sense of what they
            would want in a browser-based control screen. In this meeting, I
            began by asking them what control interfaces they use, and what they
            like and don’t like about them. I also brought the requirements
            document to document their answers.
          </p>
          <p className="leading-relaxed mb-4">
            This project focuses on rendering premade, static control screens
            (like those for detectors) rather than creating custom ones. For
            this reason, I asked them if they typically use the same control
            screens for most applications or if they are ever changing and
            custom.
          </p>
          <p className="leading-relaxed mb-4">
            I then discussed possible useful features for the control screen and
            asked if they would be helpful for the user. All of their answers
            were recorded in the requirements document so that we had an idea of
            what end users want and don’t want.
          </p>
          <p className="leading-relaxed mb-4">
            Additionally, this step was done in the middle of making wireframes,
            so I showed them some possible styling for the end product and got
            their opinions on its user friendliness whilst documenting what they
            liked and disliked.
          </p>
        </section>

        <section id="step3">
          <h2 className="text-2xl font-semibold mb-3">
            Step 3 Wireframe and Iterate
          </h2>
          <p className="italic text-gray-600 mb-4">
            The objective here is to begin designing the new system using the
            knowledge collected. Finding errors in the design at this point is
            good and informs each iteration until it is difficult to find issue.
          </p>
          <p className="leading-relaxed mb-4">
            This step was straightforward for my project since the ADL files
            already define the GUI structure, I only needed to interpret the
            styling elements. I mocked up several different options for the GUI
            styles, as well as began to think about an alternative to windowed
            applications (this needed to be in a web browser so we can’t
            necessarily open windows).
          </p>
          <Image
            src="/intern5.png"
            alt="Diagram showing one wireframe"
            width={400}
            height={300}
            className="rounded-lg mx-auto my-8"
          />
          <p className="leading-relaxed mb-4">
            After completing this step, I created multiple design variations for
            each component found in ADL files. I then conducted user interviews
            to gather feedback and determine which designs were most effective.
          </p>
          <Image
            src="/intern6.png"
            alt="Diagram showing one wireframe"
            width={400}
            height={300}
            className="rounded-lg mx-auto my-8"
          />
        </section>

        <section id="step4">
          <h2 className="text-2xl font-semibold mb-3">
            Step 4 Invest in a High Fidelity Prototype and Test
          </h2>
          <p className="italic text-gray-600 mb-4">
            The visual prototype is an aggregated result of Step 1-3. This
            prototype looks almost like the real thing and includes
            functionality. It will need more rigorous testing to ensure
            usability and performance expectations are met.
          </p>
          <h2 className="text-2xl text-gray-600 font-semibold mb-3">
            Implementation
          </h2>
          <p className="leading-relaxed mb-4">
            Having a fairly well-completed requirements document, an already
            defined GUI, and armed with my low-fidelity prototype, I began
            finalizing my Figma mockup.
          </p>
          <p className="leading-relaxed mb-4">
            The styles chosen are based off of the survey results from
            scientists around the ALS. I then expanded the style to other ADL
            files, especially ones that are common with area detectors, like
            simDetector.adl. This would serve as the default styling variant for
            the final product.
          </p>
          <p className="leading-relaxed mb-4">
            Because of all of the previous user interviews and time spent making
            prototypes, I was confident that this final mockup would not need
            substantial changes down the road. By doing the laborious work now,
            future iterations can be more concrete and won’t need significant
            change.
          </p>
          <p className="leading-relaxed mb-4">
            The objective of this high-fidelity prototype was to make sure the
            component looked appealing to work with, to detail features as they
            relate to the GUI, and to show off the possibilities to other
            scientists.
          </p>
          <Image
            src="/intern7.png"
            alt="Diagram showing one wireframe"
            width={400}
            height={300}
            className="rounded-lg mx-auto my-8"
          />
          <p className="leading-relaxed mb-4">
            Finally, to display the results of my project, I made a scientific
            poster describing the process and background of why it was made.
          </p>
          <Image
            src="/intern8.png"
            alt="Diagram showing one wireframe"
            width={400}
            height={300}
            className="rounded-lg mx-auto my-8"
          />
        </section>

        <section id="step5">
          <h2 className="text-2xl font-semibold mb-3">
            Step 5 Record Design Decisions
          </h2>
          <p className="italic text-gray-600 mb-4">
            Provide a record of how the design was created and why each design
            decision was made. This document serves as the platform for the next
            design iteration as well as communicates the benefits of UX! You now
            know how to perfectly design your system with zero flaws and perfect
            performance. Congratulations!
          </p>
        </section>
      </article>

    //   {/* TOC Sidebar (desktop only) */}
    //   {headings.length > 0 && (
    //     <aside className="hidden md:block w-64 flex-shrink-0 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto border-l border-gray-200 pl-6">
    //       <h3 className="text-lg font-semibold mb-4">On This Page</h3>
    //       <ul className="space-y-2">
    //         {headings.map(({ id, text, level }) => (
    //           <li key={id} className={level === 3 ? "pl-4" : ""}>
    //             <a
    //               href={`#${id}`}
    //               className="text-gray-700 hover:text-blue-700 block"
    //             >
    //               {text}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </aside>
    //   )}
    // </div>
  );
}
