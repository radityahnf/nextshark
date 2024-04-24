import { useState, useEffect } from 'react';
import { News } from '@/types/news';

export default function useFetchAllNews() {
  const [news, setNews] = useState<News>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/data/dataset_category.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch news, status: ${response.status}`);
      }
      const data = await response.json();
      setNews(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNews();
  }, []);

  return { news, loading, error, fetchAllNews };
}
