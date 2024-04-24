import { useState, useEffect } from "react";
import { News, Article } from "@/types/news";

export default function useFetchNewsByCategory(category: string) {
  const [news, setNews] = useState<News>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNewsByCategory = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/data/dataset_category.json");
      if (!response.ok) {
        throw new Error(`Failed to fetch news, status: ${response.status}`);
      }
      const data: News = await response.json();
      let filteredArticles = data.articles
      if (category !== "happening") {
         filteredArticles = data.articles.filter(
          (article: Article) => article.category === category
        );
      } else {
        filteredArticles = data.articles.slice(10,20);
      }
      setNews({ ...data, articles: filteredArticles });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsByCategory();
  }, [category]);

  return { news, loading, error, fetchNewsByCategory };
}
