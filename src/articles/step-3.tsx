import Image from "next/image";
import Link from "next/link";

export default function Step3Wireframe() {
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
          <li className="text-gray-500">Step 3: Wireframe & Iterate</li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Step 3: Wireframe & Iterate</h1>

      <p className="leading-relaxed">
        You might find yourself wanting to jump into design and create a
        beautiful, polished product ready to implement, or in contrast, you may
        have a vision and see it coming together in the end. Unfortunately, both
        approaches can lead to error and time wasted.
      </p>
      <p className="leading-relaxed">
        Iterative design with user inclusion leads to lower cost and allows
        flexibility. Going straight into a final design without feedback makes
        it harder to deviate from the design the further along you are in the
        development process.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-3">In this article:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Why?</li>
          <li>What do we mean by wireframe?</li>
          <li>Multiple wireframes</li>
          <li>Iteration and incorporation of feedback</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Why?</h2>
        <p className="leading-relaxed">
          By starting with wireframes, you can implement feedback from users to
          ensure you are on the right path. When we develop our own design for
          an application, we could push our own way of organizing information
          without considering how others understand the application. With a
          wireframe, you are creating a high-level look—leaving out the
          specifics—to ensure needed information and functions are there and in
          a layout that is intuitive for users.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          What do we mean by wireframe?
        </h2>
        <Image
          src="/step30.png"
          alt="Diagram showing one wireframe"
          width={400}
          height={300}
          className="rounded-lg shadow-md mx-auto my-8"
        />
        <p className="leading-relaxed mb-4">
          Wireframes are a way to show the proposed layouts for a page. It
          allows you to get feedback on positioning and items necessary on the
          page. They are used to ensure you incorporated user workflows and get
          feedback on.
        </p>
        <p className="leading-relaxed mb-4">
          At this stage, you are creating low-fidelity designs and keeping
          illustrations minimal in regard to design details and embellishments.
          For instance, creating your designs in grayscale can help you
          concentrate on the content and structure without getting feedback on
          elements that take away from the core functionality of the
          application.
        </p>
        <p className="italic text-gray-600">
          E.g., if you show a wireframe with no decorative elements, you will
          get feedback on the layout and organization of the information. If you
          show a colorful and aesthetic prototype, you might get feedback on the
          design elements rather than the layout and movement through the
          application.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Multiple wireframes</h2>
        <Image
          src="/step31.png"
          alt="Diagram showing mutliple wireframes"
          width={600}
          height={500}
          className="rounded-lg shadow-md mx-auto my-8"
        />
        <p className="leading-relaxed">
          Before we get the design in front of users, it should be noted that
          you aren&apos;t limited to showing one design. Creating multiple
          layouts can help see what aspects users like or don&apos;t like, and
          you can learn how whether you matched the requirements to their
          workflow.
        </p>
        <p className="leading-relaxed">
          Once settled on a wireframe (with user input of course), you can move
          forward and iterate on the design that merges the best aspects from
          the multiple wireframes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Iteration</h2>
        <Image
          src="/step32.png"
          alt="Diagram showing iterations"
          width={800}
          height={500}
          className="rounded-lg shadow-md mx-auto my-8"
        />
        <p className="leading-relaxed mb-4">
          Once you show users your wireframe, you can iterate based on the
          feedback and work your way to designing something that supports users
          and meets their needs. This is also an opportunity to gain user
          confidence in the application you are building for them—especially if
          this is an application modernizing an existing application.
        </p>
        <p className="leading-relaxed mb-4">
          To help collect feedback from users, and if you&apos;re looking for
          something fun, you can create clickable prototypes to get feedback
          without incorporating more design elements. The benefit here is that
          you can test some of those buttons (and their landing) and workflows
          against your proposed layout structure before spending the effort in
          finalizing your design.
        </p>
        <p className="leading-relaxed mb-4">
          Once your design has been settled on, that is when you can progress
          into high-fidelity prototypes (Step 4) and incorporate more visual
          elements into your design.
        </p>
        <p className="leading-relaxed mb-4">
          This doesn&apos;t have to be time consuming. Actually, it will save
          you time and effort by modifying simple designs rather than
          implementing changes in a completely built out application. Walk on
          over to your user&apos;s office, send a message on your messenger, or
          initiate a quick screen share call. You only need 5 minutes, and if
          they give you more, you have their interest.
        </p>
        <div className="flex justify-between items-center mt-12">
          <Link href="/resources/step-2">
            <p className="font-semibold text-blue-700 cursor-pointer hover:underline">
              &larr; Previous: Step 2
            </p>
          </Link>
          <Link href="/resources/step-4">
            <p className="font-semibold text-blue-700 cursor-pointer hover:underline">
              Next: Step 4 &rarr;
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
