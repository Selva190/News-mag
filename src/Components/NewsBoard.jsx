import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch news articles:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest<span className="badge bg-danger"> News </span></h2>
      {loading && <p className="text-center">Loading articles...</p>}
      {error && <p className="text-center text-danger">Error fetching articles: {error}</p>}
      {!loading && !error && articles.map((news) => (
        <NewsItem key={news.url} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  )
}

export default NewsBoard
