import { Separator } from "@/components/ui/separator";
import { RxAvatar } from "react-icons/rx";
export default function Conversation() {
  return (
    <div className="mx-[10px]">
      <h1 className="my-[10px]  text-[28px] font-bold">Conversation</h1>
      <Separator
        orientation="horizontal"
        className="w-full bg-black/20 h-[1px]"
      />
      <div className="flex flex-row mt-[20px]">
        <p className="text-black/60">Commenting as</p>
        <p>&nbsp;</p>
        <p className="font-bold">Guest</p>
      </div>

      <div className="flex flex-row w-full my-[20px]">
        <div className="mr-2">
          <RxAvatar size={50} />
        </div>
        <input
          className="  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-black/60 placeholder:font-medium"
          placeholder="Be the first to comment..."
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center my-20 space-y-4">
        <p className="font-bold text-black/60">
          No one seems to have shared their thoughts on this topic yet
        </p>
        <p className="font-medium text-black/60 text-md">
          Leave a comment so your voice will be heard first.
        </p>
      </div>
      <Separator
        orientation="horizontal"
        className="w-full bg-black/20 h-[1px]"
      />
    </div>
  );
}
