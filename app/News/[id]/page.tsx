"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ArticlePage() {
  const searchParams = useSearchParams();
  const articleData = searchParams.get("data");
  const article = articleData ? JSON.parse(articleData) : null;

  if (!article) {
    return (
      <main className="news-container">
        <h1>Article not found</h1>
        <Link href="/News">← Back to News</Link>
      </main>
    );
  }

  return (
    <main className="news-container">
      <Link href="/News" className="back-link">← Back to News</Link>

      <article className="news-detail">
        {article.image_url && (
          <img
            src={article.image_url}
            alt={article.title}
            className="news-detail-image"
          />
        )}
        <h1>{article.title}</h1>
        <p className="news-meta">
          {article.source_name || "Unknown Source"} |{" "}
          {new Date(article.pubDate).toLocaleString()}
        </p>
        <p className="news-description">
          {article.description || "No detailed description available."}
        </p>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Read full article →
        </a>
      </article>
    </main>
  );
}
