import Link from "next/link";
import "./news.css";

import DrawerNavigation  from "../components/DrawerNavigation"; 

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const res = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_0d57e28b401341848bd6a2b430233be5&q=india",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch latest news articles");

  const data = await res.json();
  const articles = data.results || [];

  return (
    <main className="news-container">
      <h1 className="news-heading">📰 Latest News from India</h1>

      {articles.length === 0 ? (
        <p className="no-news">No news available right now.</p>
      ) : (
        <div className="news-grid">
          {articles.map((article: any, index: number) => (
            <article key={index} className="news-card">
              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.title || "News Image"}
                  className="news-image"
                />
              )}
              <h2 className="news-title">
                <Link
                  href={{
                    pathname: `/News/${index}`,
                    query: { data: JSON.stringify(article) },
                  }}
                >
                  {article.title}
                </Link>
              </h2>
              <p className="news-description">
                {article.description?.slice(0, 120) ||
                  "No description available."}
              </p>
              <div className="news-meta">
                <span>{article.source_name || "Unknown Source"}</span>
                <span>{new Date(article.pubDate).toLocaleString()}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
