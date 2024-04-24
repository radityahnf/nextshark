import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import useRandomNews from "@/hooks/useRandomNews";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function TopStory() {
  const { article, loading, error, fetchRandomNews } = useRandomNews();

  

  const timeSincePublished = (publishedAt) => {
    const publicationDate = new Date(publishedAt);
    const now = new Date();
    const millisecondsElapsed = now - publicationDate;
    const daysElapsed = Math.floor(millisecondsElapsed / (1000 * 60 * 60 * 24));

    if (daysElapsed < 1) return "Today";
    if (daysElapsed === 1) return "1 day ago";
    if (daysElapsed > 30)
      return publishedAt.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    return `${daysElapsed} days ago`;
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

  const cleanContent = (content) => {
    return content.replace(/\[\+\d+\schars\]$/, "");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading the story: {error.message}</p>;
  if (!article) return <p>No story available.</p>;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-6">
        <div className="mr-2">
          <RxAvatar size={50} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p>By&nbsp;</p>
            <p className="font-bold">{article.author}</p>
          </div>
          <p>{timeSincePublished(article.publishedAt)}</p>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">{article.title}</h1>
        {article.urlToImage && (
          <div className="relative mr-4 w-full h-96 my-4">
            <Image
              alt={article.description || "Image description not available"}
              src={article.urlToImage}
              layout="fill"
              className="rounded-lg"
            />
          </div>
        )}
        <p className="text-lg">{cleanContent(article.content)}</p>
        <Link href={article.url}>
          <div className="flex justify-end mt-8 mb-4">
            <p className="underline text-secondaryPurple">
              {calculateReadingTime(article.content)} min read
            </p>
          </div>
        </Link>
      </div>

      <Separator
        orientation="horizontal"
        className="w-100 bg-black/20 h-[1px]"
      />
    </div>
  );
}
