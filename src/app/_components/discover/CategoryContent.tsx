import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useFetchNewsByCategory from "@/hooks/useNewsByCategory";
import { Separator } from "@radix-ui/react-separator";

function CategoryContent({ category }: { category: string }) {
  const { news, loading, error, fetchNewsByCategory } =
    useFetchNewsByCategory(category);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    fetchNewsByCategory();
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 1250;
    let totalChars = content.length;

    const extraCharsMatch = content.match(/\[\+(\d+) chars\]$/);
    if (extraCharsMatch) {
      totalChars += parseInt(extraCharsMatch[1], 10);
    }

    const time = Math.ceil(totalChars / wordsPerMinute);
    return Math.max(time, 1);
  };

  const timeSincePublished = (publishedAt) => {
    const publicationDate = new Date(publishedAt);
    const now = new Date();
    const millisecondsElapsed = now - publicationDate;
    const daysElapsed = Math.floor(millisecondsElapsed / (1000 * 60 * 60 * 24));

    if (daysElapsed < 1) return "Today";
    if (daysElapsed === 1) return "1 day ago";
    if (daysElapsed > 30) return publishedAt.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    return `${daysElapsed} days ago`;
  };

  return (
    <div className=" mt-2">
      {news &&
        news.articles.slice(0, visibleCount).map((article, index) => (
          <Link key={index} href={article.url}>
            <Separator
              orientation="horizontal"
              className="w-100 bg-black/20 h-[1px] my-4"
            />
            <div className="flex flex-row items-center ">
              <div className="mr-4 relative w-100 max-w-100 h-40 max-h-40 min-w-100">
                <Image
                  alt={article.description || "Image description not available"}
                  src={article.urlToImage}
                  className="rounded-md"
                  width={290}
                  height={180}
                />
              </div>
              <div className="space-y-10">
                <div className="flex flex-row">
                  <h1 className="text-md bg-gradient-to-r from-primaryOrange to-primaryPurple inline-block text-transparent bg-clip-text">
                    {article.category}
                  </h1>
                  <p className="text-sm ml-2">
                    {timeSincePublished(article.publishedAt)}
                  </p>
                </div>

                <p className="font-semibold text-lg">{article.title}</p>
                <p className="underline text-secondaryPurple text-lg">
                  {calculateReadingTime(article.content)} min read
                </p>
              </div>
            </div>
          </Link>
        ))}
      {visibleCount < (news?.articles.length || 0) && (
        <button
          onClick={handleShowMore}
          className="px-4 py-2 mt-4 w-full bg-white text-black border-2 rounded-md hover:bg-black hover:text-white"
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default CategoryContent;
