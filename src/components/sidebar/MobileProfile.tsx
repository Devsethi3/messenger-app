"use client";

import React, { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import Avatar from "../Avatar";
import { User } from "@prisma/client";
import SettingsModal from "./SettingsModal";

interface MobileProfileProps {
  currentUser: User;
}

const MobileProfile: React.FC<MobileProfileProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div className="fixed justify-between flex w-full bottom-14 z-40 items-center bg-secondary/10 border-t py-2 px-4 lg:hidden">
        <ThemeSwitcher />
        <div
          onClick={() => setIsOpen(true)}
          className="cursor pointer hover:opacity-75 transition"
        >
          <Avatar user={currentUser} />
        </div>
      </div>
    </>
  );
};

export default MobileProfile;
