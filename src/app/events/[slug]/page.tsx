// dynamic events page, renders based on slug
import { notFound } from "next/navigation";
import { event } from "@/event";

interface Props {
  params: { slug: string };
}

export default function EventPage({ params }: Props) {
  const eventObj = event.find((a) => a.slug === params.slug);
  if (!eventObj) return notFound();

  const { Component } = eventObj;
  return <Component />;
}

