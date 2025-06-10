// resources landing page (cards of articles)
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { articles } from "@/articles";
import { Search } from "@mui/icons-material";

export default function ResourcesPage() {
  const router = useRouter();
  const gradients = [
    "bg-gradient-to-r from-[#1E88B6] to-[#D4B060]",
    "bg-gradient-to-r from-[#D4B060] to-[#1E88B6]",
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <div>
      {/* Top Hero Section */}
      <section className="h-[40vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Resources</h1>
        <p className="text-lg text-white max-w-2xl">How-to Guides</p>
      </section>

      {/* Search and Filter */}
      <div className="mx-6 p-4 flex justify-between items-center">
        <div className="relative w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 pl-10 w-full"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2"
        >
          <option>All</option>
          {/* Add category filtering here if you add categories to your article metadata */}
        </select>
      </div>

      {/* Articles Grid */}
      <div className="mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {displayedArticles.map((article, index) => (
          <div
            key={article.slug}
            onClick={() => router.push(`/resources/${article.slug}`)}
            className={`border rounded-lg shadow-lg cursor-pointer ${
              gradients[index % gradients.length]
            } text-white`}
          >
            <div className="h-40 flex items-center justify-center text-xl font-bold" />
            <div className="p-4 bg-white text-gray-700 rounded-b-lg">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center p-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 mx-1 ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
