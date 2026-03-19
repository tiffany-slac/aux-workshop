import { notFound } from "next/navigation";
import { events } from "@/app/data/events";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);
  if (!event) return notFound();

  let Content = null;

  try {
    const mod = await import(`@/app/events/event-articles/${slug}`);
    Content = mod.default;
  } catch (err) {
    Content = null;
  }

  return <main>
    {Content ? <Content /> : (
      <p className="text-gray-500">
        Detailed event article coming soon.
      </p>
    )}
  </main>;
}
