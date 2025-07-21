import Link from "next/link";

export default function Step1Wireframe() {
  return (
    <article className="max-w-4xl mx-auto p-8 space-y-8">
      <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex space-x-1">
          <li>
            <Link href="/resources/get-started">
              <p className="text-blue-700 hover:underline">Getting Started</p>
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-500">Step 1: Define System Objectives</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-6">
        Step 1: Define System Objectives
      </h1>

      <h2 className="text-2xl font-semibold mb-3">
        The Value and Purpose of Defining System Goals/Objectives in UX/Human
        Factors Redesign
      </h2>
      <p className="text-lg leading-relaxed">
        When embarking on a control system redesign (or initial design),
        defining clear system goals and objectives is foundational. It’s true
        that the design must be tailored to human use, but without the guidance
        of clearly defined system objectives, it is difficult to make the design
        functional. This step not only guides the design process but also
        ensures that the product meets user’s needs and organizational
        requirements. This essay/blog/step explores the foundational value
        provided by clearly defining system objectives at the beginning of the
        design process.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-3">In this article:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Establishing a Clear Vision</li>
          <li>Aligning Stakeholder Expectations</li>
          <li>Enhancing User Experience</li>
          <li>Facilitating Effective Decision-Making</li>
          <li>Measuring Success</li>
          <li>Conclusion</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Establishing a Clear Vision
        </h2>
        <p className="leading-relaxed mb-4">
          Defining system goals and objectives provides a clear vision for the
          redesign project. The objectives shape what the user must accomplish.
          Understanding what the user must accomplish supports development of
          measurable variables to test the adequacy of a design. The measures
          and performance observed to accomplish the objects guide the design
          team through each phase of the project. Without well-defined
          objectives, the purpose behind the control scheme, display, and system
          capability development may not be comprehensive, may require future
          reworking, or may require users to work around the system rather than
          be empowered by the system to accomplish their goals. Establishing a
          set of system objectives available to all current and future team
          members helps ensure every design decision aligns with the overarching
          objectives.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Aligning Stakeholder Expectations
        </h2>
        <p className="leading-relaxed mb-4">
          Making the system objectives available to all team members aligns the
          expectations of all stakeholders involved. This includes users,
          designers, developers, and business leaders. When everyone understands
          the project&apos;s goals, it fosters collaboration and reduces the risk of
          misunderstandings. Furthermore, communicating what each screen,
          function, or capability is trying to achieve increases the value of
          feedback from end users. Focusing the attention of subject matter
          experts or end users on what matters most in the design and eliciting
          their feedback will increase their buy-in as they see their feedback
          (when applicable) incorporated in the design.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Enhancing User Experience
        </h2>
        <p className="leading-relaxed mb-4">
          At the heart of any UX redesign is the goal of improving the user
          experience. By defining system objectives, the design team can
          prioritize user needs and ensure that the redesign addresses key
          usability issues. This user-centered approach applied under the focus
          of achieving system objectives is what separates a control system that
          empowers users to be successful and one that requires intimate
          knowledge, “tips and tricks”, or accumulates work-around methods so
          users can get their job done.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Facilitating Effective Decision-Making
        </h2>
        <p className="leading-relaxed mb-4">
          Clear goals and objectives serve as a benchmark for evaluating design
          decisions. When faced with multiple design options, the team can refer
          back to the established goals to determine which option best aligns
          with the project&apos;s objectives. Trade-off decisions are unavoidable.
          Clear objectives facilitates more informed and effective
          decision-making, ensuring that the final design is both functional and
          user-friendly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Measuring Success</h2>
        <p className="leading-relaxed mb-4">
          The defined objectives create a framework to continue evaluating
          performance and draw insights on what improvements to make. By setting
          specific targets, the team can track progress and evaluate the
          effectiveness of the new design. This data-driven approach allows for
          continuous improvement and ensures that the control system evolves to
          meet changing user needs and technological advancements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
        <p className="leading-relaxed mb-4">
          Defining system goals and objectives is a critical step in the
          UX/Human Factors redesign of a control system. It establishes a clear
          vision, aligns stakeholder expectations, enhances user experience,
          facilitates effective decision-making, and provides a framework for
          measuring success. By prioritizing this foundational step, design
          teams can create control systems that are not only functional but also
          intuitive and user-friendly, ultimately driving greater user
          satisfaction and organizational success.
        </p>
        <div className="flex justify-end items-center mt-12">
          <Link href="/resources/step-2">
            <p className="font-semibold text-blue-700 cursor-pointer hover:underline">
              Next: Step 2 &rarr;
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
