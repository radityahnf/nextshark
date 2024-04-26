import TopStoriesSide from "./TopStoriesSide";
import TopStory from "./TopStory";
import { Separator } from "@/components/ui/separator";

export default function TopStories() {
  return (
    <div className="flex flex-col lg:mx-[150px]  my-[100px] mx-[20px] h-full ">
      <div className="flex flex-col-reverse lg:flex-row ">
        <div>
          <div>
            <h1 className="mb-[10px] text-[28px]">Top Stories</h1>
            <div className="h-[3px] w-[89px] bg-gradient-to-r from-primaryOrange to-primaryPurple"></div>
          </div>
          <div className="w-full ">
            <TopStoriesSide />
          </div>
        </div>

        <Separator
          orientation="vertical"
          className="lg:block w-[1px]  relative bg-black/20 mx-4"
        />
        <div className="w-full lg:w-2/3 ">
          <TopStory />
        </div>
      </div>
    </div>
  );
}
