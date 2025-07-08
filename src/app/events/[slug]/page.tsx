// dynamic events page, renders based on slug
import { notFound } from "next/navigation";
import { event } from "@/event";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const eventObj = event.find((a) => a.slug === slug);
  if (!eventObj) return notFound();

  const { Component } = eventObj;
  return <Component />;
}
