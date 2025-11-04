// app/components/ArticleCard.tsx
export default function ArticleCard({ article }: { article: any }) {
  return (
    <article className="border p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all bg-white">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="rounded-xl w-full h-60 object-cover mb-4"
        />
      )}
      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-3">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        className="text-blue-600 font-medium hover:underline"
      >
        Read full article →
      </a>
    </article>
  );
}
