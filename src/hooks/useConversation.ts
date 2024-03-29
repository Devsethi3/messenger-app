import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const params = useParams();

  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return;
    }

    return params.conversationId as string;
  }, [params?.conversationId]);

  const isOpen = useMemo(
    () => !!params?.conversationId,
    [params?.conversationId]
  );

  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [isOpen, conversationId] // Include conversationId as a dependency here
  );
};

export default useConversation;
