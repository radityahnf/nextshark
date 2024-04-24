import { useState, useEffect } from 'react';
import { News, Article } from '@/types/news';

export default function useRandomNews() {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchRandomNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/data/dataset_category.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch news, status: ${response.status}`);
      }
      const data: News = await response.json();
      const articlesWithImages = data.articles.filter(article => article.urlToImage);
      if (articlesWithImages.length > 0) {
        const randomIndex = Math.floor(Math.random() * articlesWithImages.length);
        setArticle(articlesWithImages[randomIndex]);
      } else {
        setError(new Error("No articles with images found in the dataset"));
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error('An error occurred while fetching the news'));
      }
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    fetchRandomNews();
  }, []);

  return { article, loading, error, fetchRandomNews };
}
