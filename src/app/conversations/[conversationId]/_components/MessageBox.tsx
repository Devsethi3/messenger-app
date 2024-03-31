"use client";

import Avatar from "@/components/Avatar";
import { FullMessageType } from "@/types";
import clsx from "clsx";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface MessageBoxProps {
  data: FullMessageType;
  isLast: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {
  const session = useSession();
  const [ImageModalOpen, setImageModalOpen] = useState(false);

  const isOwn = session?.data?.user?.email === data.sender.email;
  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  const container = clsx("flex gap-3 p-4", isOwn && "justify-end");

  const avatar = clsx(isOwn && "order-2");

  const body = clsx("flex flex-col gap-2", isOwn && "items-end");

  const message = clsx(
    "text-sm w-fit overflow-hidden",
    isOwn
      ? "bg-primary text-white/90 rounded-b-lg rounded-tl-lg"
      : "bg-gray-100 dark:bg-secondary opacity-85 rounded-b-lg rounded-tr-lg",
    data.image ? "rounded-md p-0" : "py-2 px-3"
  );

  return (
    <>
      <div className={container}>
        <div className={avatar}>
          <Avatar user={data.sender} />
        </div>
        <div className={body}>
          <div className="flex items-center gap-1">
            <div className="text-sm text-gray-500 dark:text-gray-300">
              {data.sender.name}
            </div>
            <div className="text-xs text-gray-400">
              {format(new Date(data.createdAt), "p")}
            </div>
          </div>
          <div className={message}>
            <ImageModal
              src={data.image}
              isOpen={ImageModalOpen}
              onClose={() => setImageModalOpen(false)}
            />
            {data.image ? (
              <Image
                onClick={() => setImageModalOpen(true)}
                src={data.image}
                alt="image"
                height="288"
                width={288}
                className="object-cover cursor-pointer hover:scale-110 transition translate"
              />
            ) : (
              <div>{data.body}</div>
            )}
          </div>
          {isLast && isOwn && seenList.length > 0 && (
            <div
              className="
            text-xs 
            font-light 
            text-gray-500
            "
            >
              {`Seen by ${seenList}`}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MessageBox;
