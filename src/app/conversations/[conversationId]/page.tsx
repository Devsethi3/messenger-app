import getConversationById from "@/actions/getConversationById";
import getMessages from "@/actions/getMessages";
import EmptyState from "@/components/EmptyState";
import React from "react";
import Header from "./_components/Header";
import Body from "./_components/Body";
import Form from "./_components/Form";

interface IParams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);
  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="lg:pl-80 h-screen">
        <div className="h-full flex flex-col">
          <Header conversation={conversation} />
          <Body initialMessages={messages} />
          <Form />
        </div>
      </div>
    </>
  );
};

export default ConversationId;
