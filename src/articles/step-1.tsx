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

      <p className="text-lg leading-relaxed"></p>
      <p className="text-lg leading-relaxed"></p>

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
        <p className="leading-relaxed mb-4"></p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          What do we mean by wireframe?
        </h2>
        <p className="leading-relaxed mb-4"></p>
        <p className="leading-relaxed mb-4"></p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Multiple wireframes</h2>
        <p className="leading-relaxed mb-4"></p>
        <p className="leading-relaxed mb-4"></p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Iteration</h2>
        <p className="leading-relaxed mb-4"></p>
        <p className="leading-relaxed mb-4"></p>
        <p className="leading-relaxed mb-4"></p>
        <p className="leading-relaxed mb-4"></p>
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
