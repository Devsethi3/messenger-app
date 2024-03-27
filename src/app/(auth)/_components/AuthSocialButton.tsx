import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}
const AuthSocialButton = ({ icon: Icon, onClick }: AuthSocialButtonProps) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="
        inline-flex
        w-full 
        justify-center 
        rounded-md 
        bg-white 
        dark:bg-secondary/20
        px-4 
        py-2 
        text-gray-500 
        dark:text-gray-300
        shadow-sm 
        border-[3px]
        hover:bg-gray-50 
        focus:outline-offset-0
      "
      >
        <Icon />
      </button>
    </>
  );
};

export default AuthSocialButton;
