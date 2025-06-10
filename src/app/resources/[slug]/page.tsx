// dynamic article page, renders based on slug
import { notFound } from "next/navigation";
import { articles } from "@/articles";

interface Props {
  params: { slug: string };
}

export default async function ArticlePage({ params }: Props) {
  // Await params
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();

  const { Component } = article;
  return <Component />;
}
