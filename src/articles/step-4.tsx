import Image from "next/image";
import Link from "next/link";

export default function Step4Wireframe() {
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
          <li className="text-gray-500">Step 4: Invest in HiFi Prototypes and Test</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-6">
        Step 4: Invest in HiFi Prototypes and Test
      </h1>

      <p className="leading-relaxed">
        All of the hard work that you put in place from defining your system
        objectives, documented the end-user process, and iterative wireframing
        should culminate into your high fidelity (HiFi) prototype for validation
        testing. At this stage, much of the design questions you’ve had should
        have been clarified and now you’re ready to develop a prototype that
        ‘feels’ like the actual system you’ve envisioned that can be validated
        through rigorous testing to validate that the system can be safely,
        effectively, and efficiently used for its intended purpose.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-3">In this article:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Why Invest in HiFi Prototypes and Validation Testing?</li>
          <li>What Goes into Making a HiFi Prototype?</li>
          <li>What Goes into Validation?</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Why Invest in HiFi Prototypes and Validation Testing?
        </h2>
        <p className="leading-relaxed mb-4">
          Validation testing provides assurance that your system can be safely,
          effectively, and efficiently used for its intended purpose. Having
          assurance is particularly necessary for high stakes environments, like
          accelerators, when the risk of poor usability can have real
          consequences. To validate your system, the prototype should be as
          close to the real thing as possible, and hence HiFi prototypes are
          needed.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          What Goes into Making a HiFi Prototype?
        </h2>
        <p className="leading-relaxed mb-4">
          The HiFi prototype is an aggregated result of your user research. This
          prototype looks almost like the real thing and includes functionality.
          The following aspects should be considered.
        </p>
        <p className="leading-relaxed mb-4">
          You should consider visual design aspects for the user interface (UI).
          This entails ensuring that the fonts, colors, icons, and other
          interface conventions follow standard conventions from the style
          guide. You should also ensure the UI layout matches the style guide
          and that the expected configuration of the monitor(s) and workstation
          match the intended system configuration. Using the intended hardware,
          or something faithfully represented, is a good idea here. You should
          build in navigation and workflows for key display pages. This should
          be done using the style guide and ensuring that all display pages can
          be navigated from and to each other following the navigation hierarchy
          determined in previous steps.
        </p>
        <p className="leading-relaxed mb-4">
          You should build in interactive behaviors for UI display elements.
          This entails ensuring that all control and display elements (e.g.,
          buttons, sliders, indicators, trends, etc.) respond like as-built
          control system. You should also ensure that the display element
          feedback update as they would like the as-built control system. If
          there is any control logic, you should make sure that is consistent to
          the requirements developed for the control system. For example, any
          alarm states should behave according to their assigned priority logic.
        </p>
        <p className="leading-relaxed mb-4">
          Finally, you should build in functional system behavior. This entails
          integrating the backend of the control system data feeds with the UI.
          You may consider using simulated (but realistic) data for final
          usability validation testing. For example, simulate the ability to
          trend accelerator data in a way that is realistic to expected
          conditions. It is also important to ensure that the feedback from any
          data feeds (i.e., from the accelerator equipment) update as they would
          for the as-built control system.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          What Goes into Validation?
        </h2>
        <p className="leading-relaxed mb-4">
          The first step is to develop your test plan. This is important because
          it provides a ‘blueprint’ what you will test. This test plan should
          identify critical tasks and workflows of interest. This entails those
          that your users will complete using the HiFi prototype. You may pick
          tasks/ workflows that are of highest consequence, notably difficult to
          perform, have the greatest change based on the proposed modification,
          or demonstrate critical functionality and interactions with the new
          control system. Your test plan should also include performance
          measures; these may include acceptance criteria too, which determine
          if your system can allow your users to successfully complete their
          tasks/ workflows. You can use success rates, completion times, or
          combination to address this. Other measures that may be useful include
          those that allow you to diagnose issues with the UI, that weren’t
          caught in earlier testing. These measures may include ratings of
          workload, usability, satisfaction, situation awareness, or
          self-reported feedback. It may also be useful to consider describing
          the testing environment and your HiFi prototype, particularly in
          describing any limitations of the prototype as compared to the
          as-built system; this ensures that any findings you have are not
          attributed to limitations in your prototype that you did not
          anticipate. Finally, your test plan should have a procedure that your
          team can use to ensure that you are consistently executing the test.
          This may include describing roles and responsibilities, as well as
          specific duties to be carried out (e.g., setting up the HiFi
          prototype).
        </p>
        <p className="leading-relaxed mb-4">
          Next, your testing should be approved by Institutional Review Board
          (IRB). This crucial in protecting the rights and welfare of human
          research participants. The IRB will review your test plan to ensure
          that it is considering the welfare of your participants.
        </p>
        <p className="leading-relaxed mb-4">
          Once the IRB is approved, you can then begin identifying and
          recruiting participants. At this point, pilot testing (‘stress
          testing’ your test plan) is important to make sure that you’ve thought
          of everything. If not, don’t worry. Your test plan can always be
          updated!
        </p>
        <p className="leading-relaxed mb-4">
          Once you’re ready for actual data collection, you can go ahead move
          forward to validating your design! This step should entail following
          your test plan. It’s important at this phase though to avoid
          interrupting your participants when completing their tasks during the
          test. Unlike earlier testing with wireframes where you’re interested
          in identifying design fixes and gaining their impressions, validation
          should be as close to the way users would go about their tasks as
          possible. This ensures that you are not biasing their behaviors.
        </p>
        <p className="leading-relaxed mb-4">
          Your results should be analyzed based on the acceptance criteria
          you’ve provided. You may consider documenting the results in some way
          to maintain traceability of your decisions to confirm that the system
          is ready to be used in real application. The level of documentation
          really depends on your time, resources, and needs.
        </p>
        <div className="flex justify-between items-center mt-12">
          <Link href="/resources/step-3">
            <p className="font-semibold text-blue-700 cursor-pointer hover:underline">
              &larr; Previous: Step 3
            </p>
          </Link>
          <Link href="/resources/step-5">
            <p className="font-semibold text-blue-700 cursor-pointer hover:underline">
              Next: Step 5 &rarr;
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
