import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus } from "lucide-react";

const CardWhoToFollow: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-blue-900 p-4">
      <h2 className="font-bold">Who To Follow</h2>
      {/* CARD USER */}
      <div className="flex items-center justify-between rounded-md border border-gray-600 p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Chae</p>
        </div>
        <UserPlus />
      </div>
      <div className="flex items-center justify-between rounded-md border border-gray-600 p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Chae</p>
        </div>
        <UserPlus />
      </div>
      <div className="flex items-center justify-between rounded-md border border-gray-600 p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Chae</p>
        </div>
        <UserPlus />
      </div>
      {/* END CARD USER */}
    </div>
  );
};

export default CardWhoToFollow;
