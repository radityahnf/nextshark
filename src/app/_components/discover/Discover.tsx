import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryContent from "./CategoryContent";

export default function Discover() {
  return (
    <div className="flex flex-col lg:mx-[150px] mx-[20px] my-[20px]">
      <div className="mb-[40px]">
        <h1 className="mb-[10px] text-[28px]">Discover by Category</h1>
        <div className=" h-[3px] w-[89px] bg-gradient-to-r from-primaryOrange to-primaryPurple "></div>
      </div>

      <Tabs defaultValue="happening" className="w-full">
        <TabsList>
          <TabsTrigger value="happening">Happening Now</TabsTrigger>
          <TabsTrigger value="culture">Culture</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="opinion">Opinion</TabsTrigger>
        </TabsList>

        <TabsContent value="happening">
          <CategoryContent category="happening" />
        </TabsContent>
        <TabsContent value="culture">
          <CategoryContent category="Culture" />
        </TabsContent>
        <TabsContent value="business">
          <CategoryContent category="Business" />
        </TabsContent>
        <TabsContent value="opinion">
          <CategoryContent category="Opinion" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
