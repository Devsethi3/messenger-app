"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <header className="border-b sticky top-0 z-10">
        <div className="h-[10vh] dark:bg-[#030712] flex items-center bg-[#ffffff] backdrop-blur-md">
          <div className="flex items-center justify-between container">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.png" width={35} height={35} alt="logo" />
              <h1 className="text-2xl lg:text-3xl font-bold">NexChat</h1>
            </Link>

            <div
              className={`nav-menu ${
                isOpen ? "show-menu" : "nav-menu"
              } flex items-center gap-52`}
            >
              <nav aria-label="Global">
                <ul className="flex nav-list items-center gap-12">
                  <IoMdClose
                    onClick={() => setIsOpen(!isOpen)}
                    className="nav-close block md:hidden text-white w-10 h-10 cursor-pointer p-2 hover:bg-[#9f68ff] rounded-full"
                  />
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/">Pricing</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              {session ? (
                <Image
                  src={session.user?.image || "/images/placeholder.jpg"}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <Button onClick={() => router.push("/login")}>Login</Button>
              )}
              <div className="block md:hidden">
                <Button
                  onClick={() => setIsOpen(!isOpen)}
                  variant="secondary"
                  className="px-2"
                >
                  <HiMenu className="text-xl" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
