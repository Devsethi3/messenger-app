import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "./_components/ConversationList";
import getConversations from "@/actions/getConversations";
import getUsers from "@/actions/getUsers";
import NextTopLoader from "nextjs-toploader";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <NextTopLoader
        color="#6366F1"
        crawlSpeed={200}
        height={4}
        crawl={true}
        easing="ease"
      />
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
