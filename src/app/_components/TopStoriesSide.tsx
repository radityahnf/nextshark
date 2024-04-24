import Image from "next/image";
import Link from "next/link";
import {  useState } from "react";
import useFetchAllNews from "@/hooks/useAllNews";
import { Separator } from "@/components/ui/separator";

export default function TopStoriesSide() {
  const { news, loading, error, fetchAllNews } = useFetchAllNews();
  const [visibleCount, setVisibleCount] = useState(5);

  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 5);
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
  
  

  return (
    <div className="overflow-y-auto max-h-[800px] mt-10">
      {news!.articles.slice(0, visibleCount).map((article, index) => (
        <div>
          <Separator
              orientation="horizontal"
              className="w-100 bg-black/20 h-[1px] my-6"
            />
          <Link key={article.title ||index} href={article.url}>
          <div className="flex flex-row items-center mb-4">
            <div className="mr-4 relative w-40 max-w-40 h-40 max-h-40 min-w-40">
              <Image
                alt={article.description || "Image description not available"}
                src={article.urlToImage}
                layout="fill"
                className="rounded-lg "
                objectFit="contain"
                style={{objectFit:"cover"}}
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-sm bg-gradient-to-r from-primaryOrange to-primaryPurple inline-block text-transparent bg-clip-text">
                {article.category}
              </h1>
              <p className="font-semibold">{article.title}</p>
              <p className="underline text-secondaryPurple">{calculateReadingTime(article.content)} min read</p>
            </div>
          </div>
        </Link>
        </div>
        
      ))}
      {visibleCount < news!.articles.length && (
        <button onClick={handleShowMore} className="px-4 py-2 mt-4 w-full bg-white text-black border-2 rounded-md hover:bg-black hover:text-white ">
          Show More
        </button>
      )}
    </div>
  );
}
