import Image from "next/image";
import Link from "next/link";

export default function Step2Wireframe() {
  return (
    <article className="max-w-4xl mx-auto p-8 space-y-8">
      <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex space-x-1">
          <li>
            <Link href="/resources">
              <p className="text-blue-700 hover:underline">Resources</p>
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources/get-started">
              <p className="text-blue-700 hover:underline">Getting Started</p>
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-500">Step 2: Document End-User Process</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-6">
        Step 2: Document End-User Process
      </h1>

      <p className="leading-relaxed">
        Now that you understand your system objectives and potentially the
        modernization/upgrade goals of your organization, it’s time to perform
        basic user research and document your end-user process.
      </p>
      <p className="leading-relaxed">
        Designing human-system interfaces (HSIs) for particle accelerator
        control rooms presents a unique challenge due to the system’s
        complexity, experimental nature, and the expert users operating them.
        This article outlines a user-centered design process rooted in UX best
        practices and tailored to the needs of primary end users (i.e.,
        operators) and additional end users such as physicists and engineers.
        The purpose of prioritizing end user needs and behaviors from the
        beginning is to improve usability, reduce error, and increase task
        comprehension and performance in high-stakes, high-variation
        environments.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-3">In this article:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Why Accelerator HSI design is Different</li>
          <li>
            Understand the Functional Purpose and Environment of the Control
            Room
          </li>
          <li>Task Modeling and Workflows </li>
          <li>Interface Prototype and Testing </li>
          <li>Record Design Decisions </li>
          <li>Conclusion</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Why Accelerator HSI design is Different
        </h2>
        <p className="leading-relaxed mb-4">
          Unlike traditional web-based HSI design, particle accelerator control
          interfaces are not typical software systems because they must
          support real-time monitoring and adjustment of hundreds of machine
          parameters. Additionally, the software systems of particle
          accelerators must support a variety of experts (who often create their
          own tools and scripts) as well as encompasses highly experimental
          workflows, where procedures can shift daily.
        </p>
        <p className="leading-relaxed mb-4">
          Therefore, although you can follow a similar roadmap of the end-user
          process for web-based design, it is essential to tailor UX methods to
          domain-specific cognitive and operational demands.
        </p>
        <figure className="my-8 text-center">
          <Image
            src="/step20.png"
            alt="Steps of End-User Process"
            width={800}
            height={500}
            className="rounded-lg mx-auto"
          />
          <figcaption className="mt-2 text-sm text-gray-600 italic">
            Figure 1: Steps of End-User Process
          </figcaption>
        </figure>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          1. Understand the Functional Purpose and Environment of the Control
          Room (System and User Identification and Exploration)
        </h2>
        <p className="leading-relaxed mb-4">
          To design HSIs for a complex system such as an accelerator, you must
          first understand the system’s ecosystem such as important decision
          points (i.e., what decisions users make and when), operational
          communication (i.e., how they collaborate inside and outside the
          control room), and what shortcuts they use or create to perform their
          tasks as intuitively and efficiently as possible.
        </p>
        <p className="leading-relaxed mb-4">
          Potential methods to help achieve a deeper understanding of the system
          are operational observations (i.e., shadowing operators during
          shifts). This is especially important during frequent tasks such as
          startup tuning and beam delivery phases.
        </p>
        <p className="leading-relaxed mb-4">
          Key observations should include operational scenarios wherein main
          system objectives are achieved. It is also important to capture
          incident troubleshooting or experiment setup to identify potential
          barriers and bottlenecks to achieving system objectives.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          2. Task Modeling and Workflows
        </h2>
        <p className="leading-relaxed mb-4">
          Once a baseline understanding of high-level system and user objectives
          have been defined and recorded, a deeper exploration into operational
          tasks can be developed via workflows. In addition to operational
          observations, end-user interviews are helpful in diver a little deeper
          into operations to uncover workflows and therefore better understand
          the end-user’s process.
        </p>
        <p className="leading-relaxed mb-4">
          Task analysis is a common and helpful method used to identify how
          users currently perform tasks as well as reveal their mental models,
          decision-making processes, and potential pain points. By breaking down
          tasks, you can pinpoint where errors are likely to occur, either due
          to user limitations or system design flaws. The insights gained from
          task analysis guide design improvements and ensure that systems are
          intuitive and minimize the potential for errors.
        </p>
        <p className="leading-relaxed mb-4">
          From the task analysis, you can develop specific and/or general user
          requirements. User requirements are used to guide the design and
          ensure both intuitive design principles and specific use cases are
          accounted for and accommodated throughout the system.
        </p>
        <figure className="my-8 text-center">
          <Image
            src="/step21.png"
            alt="General Task Analysis Process"
            width={800}
            height={500}
            className="rounded-lg mx-auto my-8"
          />
          <figcaption className="mt-2 text-sm text-gray-600 italic">
            Figure 2: General Task Analysis Process
          </figcaption>
        </figure>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          3. Interface Prototype and Testing
        </h2>
        <p className="leading-relaxed mb-4">
          The most important takeaway for centering the end-user through
          prototyping and testing is to create iterative, co-design with
          end-users throughout the entire process (i.e., collecting consistent
          end-user feedback and incorporating it into the design as often as
          possible).
        </p>
        <p className="leading-relaxed mb-4">
          You can accomplish this by setting aside time for qualitative
          walk-throughs of each design iteration with end-users. During the
          wireframe stage, it’s important to focus on overall layout and
          included content (e.g., does the layout and included content support
          proper task workflow). When the design progresses to more
          high-fidelity prototypes, it’s important to focus on more specific
          design components (e.g., does the design of this button support task
          comprehension).
        </p>
        <p className="leading-relaxed mb-4">
          If you have the time and resources, you can also perform more formal
          quantitative testing by collecting performance metrics (e.g., accuracy
          and timing). For example, if you identified a specific bottleneck in a
          workflow, you can develop a scenario test wherein an end-user runs
          through the bottleneck task with the old design and new design.
          Through timing and accuracy data, you can demonstrate that the new
          design supports more rapid and accurate processing compared to the old
          design.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          4. Record Design Decisions
        </h2>
        <p className="leading-relaxed mb-4">
          Throughout the iterative design process, it’s important to record the
          basis and rationale for your design decisions. The purpose of
          recording design decisions is twofold: to ensure traceability and
          system continuity over time. Knowledge retention in long-lifecycle
          systems is essential for system resilience. If decisions aren’t
          recorded, future personnel might unknowingly reverse critical design
          logic, repeat earlier mistakes, or even waste time developing existing
          solutions.
        </p>
        <p className="leading-relaxed mb-4">
          To become disciplined in design decision documentation, it helps to
          use a consistent format throughout the entire process (e.g., user
          requirements or style guide). It is also very helpful to accompany any
          text records with screenshots and visuals.
        </p>
        <p className="leading-relaxed mb-4">
          After design decisions have been recorded, revisit them often to not
          only refresh yourself on critical design logic and solutions, but also
          to identify opportunities for continuous improvement. After all, the
          chance to understand and document the end-user process isn’t a one
          time accomplishment, but rather an opportunity to transform your
          culture into one that continually embraces end-user involvement and
          design improvement.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
        <p className="leading-relaxed mb-4">
          Understanding and documenting the end-user process for accelerator HSI
          design is essential to ensure the design evolves based on real user
          (i.e., operator) needs, workflows, and constraints. The documentation
          and process itself should reflect an iterative, human-centered design
          cycle that adequately captured user involvement from concept, to
          evaluation, to deployment.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-3">References</h2>
        <p className="italic text-gray-600">
          Norman, D.A. (2013). The Design of Everyday Things.
        </p>
        <br></br>
        <p className="italic text-gray-600">
          Nielsen, J. (1994). 10 Usability Heuristics for User Interface Design.
        </p>
        <br></br>
        <p className="italic text-gray-600">
          Endsley, M.R. (1995). Toward a Theory of Situation Awareness in
          Dynamic Systems.
        </p>
        <br></br>
        <p className="italic text-gray-600">
          Woods, D.D., & Hollnagel, E. (2006). Joint Cognitive Systems: Patterns
          in Cognitive Systems Engineering.
        </p>
        <br></br>
        <div className="flex justify-between items-center mt-12">
          <Link href="/resources/step-1">
            <p className="font-semibold text-blue-700 cursor-pointer hover:underline">
              &larr; Previous: Step 1
            </p>
          </Link>
          <Link href="/resources/step-3">
            <p className="font-semibold text-blue-700 cursor-pointer hover:underline">
              Next: Step 3 &rarr;
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
