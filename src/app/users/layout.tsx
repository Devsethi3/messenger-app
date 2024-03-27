import getUsers from "@/actions/getUsers";
import Sidebar from "@/components/sidebar/Sidebar";
import UserList from "./_components/UserList";
import NextTopLoader from "nextjs-toploader";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}
