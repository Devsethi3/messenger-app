"use client";

import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick;
    }
  };
  return (
    <>
      <Link
        onClick={onClick}
        href={href}
        className={clsx(
          `group flex gap-x-3 text-sm leading-6 w-full font-semibold justify-center p-4 text-foreground hover:text-primary hover:bg-secondary`,
          active && "bg-secondary/30 text-primary"
        )}
      >
        <Icon className="h-6 w-6" />
      </Link>
    </>
  );
};

export default MobileItem;
