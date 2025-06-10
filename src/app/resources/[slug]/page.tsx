// dynamic article page, renders based on slug
import { notFound } from "next/navigation";
import { articles } from "@/articles";

interface Props {
  params: { slug: string };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  const { Component } = article;
  return (
    <div className="p-6">
      <Component />
    </div>
  );
}
