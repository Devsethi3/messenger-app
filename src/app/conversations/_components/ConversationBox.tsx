"use client";

import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { FullConversationType } from "@/types";
import useOtherUser from "@/hooks/useOtherUser";
import { useSession } from "next-auth/react";
import { useCallback, useMemo } from "react";
import clsx from "clsx";
import Avatar from "@/components/Avatar";
import AvatarGroup from "@/components/AvatarGroup";

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected,
}) => {
  const router = useRouter();
  const otherUser = useOtherUser(data);
  const session = useSession();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data.id, router]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }
    const seenArray = lastMessage.seen || [];

    if (!userEmail) {
      return false;
    }
    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [userEmail, lastMessage]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return "Sent an Image";
    }

    if (lastMessage?.body) {
      return lastMessage.body;
    }
    return "Started a conversation";
  }, [lastMessage]);

  return (
    <>
      <div
        onClick={handleClick}
        className={clsx(
          `
        w-full 
        relative 
        flex 
        items-center 
        space-x-3 
        p-3 
        hover:bg-neutral-100
        rounded-lg
        transition
        cursor-pointer
        `,
          selected ? "bg-neutral-100" : "bg-white"
        )}
      >
        {data.isGroup ? (
          <AvatarGroup users={data.users} />
        ) : (
          <Avatar user={otherUser!} />
        )}
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <div className="flex justify-between items-center mb-1">
              <p className="text-md font-medium text-gray-900">
                {data.name || otherUser.name}
              </p>
              {lastMessage?.createdAt && (
                <p
                  className="
                  text-xs 
                  text-gray-400 
                  font-light
                "
                >
                  {format(new Date(lastMessage.createdAt), "p")}
                </p>
              )}
            </div>
            <p
              className={clsx(
                `
              truncate 
              text-sm
              `,
                hasSeen ? "text-gray-500" : "text-black font-medium"
              )}
            >
              {lastMessageText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationBox;
