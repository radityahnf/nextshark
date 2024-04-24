import TopStoriesSide from "./TopStoriesSide";
import TopStory from "./TopStory";
import { Separator } from "@/components/ui/separator";

export default function TopStories() {
  return (
    <div className="flex flex-col mx-[150px] my-[20px]">
      <div>
        <h1 className="mb-[10px] text-[28px]">Top Stories</h1>
        <div className=" h-[3px] w-[89px] bg-gradient-to-r from-primaryOrange to-primaryPurple "></div>
      </div>

      <div className="flex flex-row">
        <div className="w-1/3">
          <TopStoriesSide />
        </div>
        <Separator orientation="vertical" className="w-[1px] h-100 bg-black/20 mx-4" />
        <div className="w-2/3">
            <TopStory />
        </div>
      </div>
    </div>
  );
}
