"use client";

import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon:Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return <li onClick={handleClick}>
    <Link href={href} className={clsx(`group flex gap-x-3 p-3 rounded-md text-sm leading-6 font-semibold text-gray-500 hover:text-primary hover:bg-secondary`,active && 'bg-secondary text-primary')}>
    <Icon className="w-6 h-6 shrink-0" />
        <span className="sr-only">{label}</span>
    </Link>
  </li>;
};

export default DesktopItem;
