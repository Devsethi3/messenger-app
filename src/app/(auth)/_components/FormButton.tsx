import clsx from "clsx";
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled: boolean;
}

const FormButton = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(
          `flex justify-center rounded-md px-4 py-2 font-medium focus-visible:outline focus-visible:outline-2 text-white focus-visible:outline-offset-2`,
          disabled && "opacity-50 cursor-default",
          fullWidth && "w-full",
          danger &&
            "bg-rose-600 hover:bg-rose-700 focus-visible:outline-rose-600",
          !secondary &&
            !danger &&
            "bg-primary hover:bg-primary focus-visible:outline-primary"
        )}
      >
        {children}
      </button>
    </>
  );
};

export default FormButton;
