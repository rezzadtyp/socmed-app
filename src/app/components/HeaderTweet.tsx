"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";

const HeaderTweet: React.FC = () => {
  const [tweet, setTweet] = useState("");

  return (
    <section>
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Textarea
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
          placeholder="What's in your mind?"
          style={{ resize: "none" }}
          maxLength={200}
        />
      </div>
      <p className="my-1 text-right text-xs">{tweet.length}</p>
      <div className="flex justify-end">
        <Button size="icon">
          <Send width={20} height={20} />
        </Button>
      </div>
      <Separator className="my-4" />
    </section>
  );
};

export default HeaderTweet;
