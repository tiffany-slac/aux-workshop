import Image from "next/image";
import Link from "next/link";

export default function Step5Wireframe() {
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
          <li className="text-gray-500">Step 5: Record Design Decisions</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-6">
        Step 5: Record Design Decisions
      </h1>

      <p className="leading-relaxed">
        Design evolves through hundreds of choices. Some are major—like
        eliminating entire views. Others are subtle—like aligning a button based
        on user behavior. But each one leaves a footprint. And without
        documentation, those footprints fade fast.
      </p>
      <p className="leading-relaxed">
        Skipping this step may seem harmless, especially when deadlines are
        tight. But later, when teammates question a design choice or a user
        inquires about adding a new feature, having a clear record of why things
        are the way they are can save everyone time and confusion.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-3">In this article:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Why document design decisions?</li>
          <li>What to include</li>
          <li>Tools for capturing decisions</li>
          <li>Examples in practice</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Why document design decisions?
        </h2>
        <p className="leading-relaxed mb-4">
          Design documentation creates a trail of reasoning that helps you, your
          team, and future contributors understand not just what was built, but
          why. Without it, it’s easy to:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Revisit old debates and repeat past mistakes</li>
          <li>Lose alignment across teams</li>
          <li>Disregard tested user feedback</li>
          <li>Miss opportunities for smarter iteration</li>
        </ul>
        <p className="leading-relaxed mb-4">
          Say you decided to omit a live notification service from your
          application because your lab’s automatic network security kept
          flagging the notifier and terminating it during initial user testing.
          If that’s not recorded, someone may ask for it again later–without
          knowing it was already attempted and ruled out for valid reasons.
        </p>
        <p className="leading-relaxed mb-4">
          This step protects your decisions, clarifies your process, and sets
          the stage for future upgrades with context and confidence.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">What to include</h2>
        <p className="leading-relaxed mb-4">
          You don’t need to write a novel. But do aim for consistency and
          structure. A basic entry could include:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Date and contributors – When and who made the call</li>
          <li>Design element – What part of the system it applies to</li>
          <li>Decision made – What choice was taken</li>
          <li>Alternatives considered – What else was on the table</li>
          <li>
            Rationale – Why this direction made sense (e.g., user feedback, tech
            limitations)
          </li>
          <li>
            Evidence – Usability test notes, screenshots, links to mockups, etc.
          </li>
        </ul>
        <p className="leading-relaxed mb-4">
          You’re not just documenting what was done—you’re preserving why it was
          done. Suppose a new developer joins the team and proposes showing more
          significant figures on a control screen. If prior user testing
          revealed that fewer digits improved readability, your design record
          can quickly explain that choice—saving time, preventing rework, and
          reinforcing user-centered thinking.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Tools for capturing decisions
        </h2>
        <p className="leading-relaxed mb-4">
          Use whatever fits your workflow. The most important thing is that
          everyone can access and update the documentation easily.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>
            Design decision logs – Notion, Confluence, Google Docs, or wikis
          </li>
          <li>
            Inline notes – Use Figma’s comment features to anchor rationale in
            the visual
          </li>
          <li>Git-based docs – Place design notes near code in the repo</li>
        </ul>
        <p className="leading-relaxed mb-4">
          Your documentation doesn’t need to be perfect—it just needs to exist
          and be easy to find. If it vanishes after the first deployment, it
          won’t help the team when they need to figure out the next best feature
          to add. Maintaining consistent documentation across projects also
          builds team habits, making it second nature to record and reference
          design decisions as part of the workflow.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Examples in practice</h2>
        <p className="leading-relaxed">Example: Avoiding design whiplash</p>
        <p className="leading-relaxed mb-4">
          You were tasked with designing a control screen using a 3D interface.
          Partway through testing, a supervisor redirected the project to 2D due
          to scaling concerns. You made the switch. But at the end, someone
          forgets the conversation and wants 3D again. A documented note
          explains the decision and why it was made—saving you from rehashing
          the past.
        </p>
        <Image
          src="/step50.png"
          alt="Diagram showing step 5 example"
          width={300}
          height={300}
          className="rounded-lg shadow-md mx-auto my-8"
        />

        <p className="leading-relaxed">
          Example: Hitting pause (intentionally)
        </p>
        <p className="leading-relaxed mb-4">
          You’re developing a web browser UI for automated beamline alignment.
          It needs its own custom backend server to host the alignment scripts,
          which you’ll have to build yourself. Midway, you discover the
          underlying script is being refactored to directly support web
          UIs—saving you major time if you wait. You pause development. Weeks
          later, a new teammate joins and wants to finish off the project by
          developing the backend. A quick look at your design notes explains the
          delay and the rationale.
        </p>

        <Image
          src="/step51.png"
          alt="Diagram showing step 5 example"
          width={300}
          height={300}
          className="rounded-lg shadow-md mx-auto my-8"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Keep it Alive</h2>
        <p className="leading-relaxed">
          While presented as the last step in our general sequence, documenting
          decisions is something that should be done at all stages. This record
          isn’t a final step—it’s a living tool. Teams should:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Reference it during project reviews</li>
          <li>Use it when onboarding new members</li>
          <li>Revisit it when planning new features</li>
        </ul>
        <p className="leading-relaxed mb-4">
          Future you will thank present you for thinking ahead.
        </p>
        <Link href="/resources/step-4">
          <p className="font-semibold text-blue-700 cursor-pointer hover:underline">
            &larr; Previous: Step 4
          </p>
        </Link>
      </section>
    </article>
  );
}
