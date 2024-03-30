"use client";

import useConversation from "@/hooks/useConversation";
import useRoutes from "@/hooks/useRoutes";
import MobileItem from "./MobileItem";
import MobileProfile from "./MobileProfile";
import { User } from "@prisma/client";

interface MobileProfileProps {
  currentUser: User;
}

const MobileFooter: React.FC<MobileProfileProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <>
      <MobileProfile currentUser={currentUser!} />
      <div className="fixed justify-between flex w-full bottom-0 z-40 items-center bg-secondary/10 border-t lg:hidden">
        {routes.map((route) => (
          <MobileItem
            key={route.href}
            href={route.href}
            active={route.active}
            icon={route.icon}
            onClick={route.onClick}
          />
        ))}
      </div>
    </>
  );
};

export default MobileFooter;
