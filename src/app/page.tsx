import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="bg-gradient-to-br from-indigo-100 to-yellow-50 h-[90vh] flex flex-col items-center justify-center">
          <div className="mx-auto text-center">
            <h1 className="font-semibold text-xl sm:text-4xl lg:text-6xl">
              Chat in Realtime and Create Groups
              <span className="block text-[#884DEE]">
                With Drag-and-Drop Ease.
              </span>
            </h1>

            <p className="lg:mx-auto mx-4 text-sm lg:text-base my-12 max-w-xl text text-black/80 dark:text-white/80">
              Welcome to our chat application where you can chat in real-time
              and create groups with ease.
            </p>
            <div className="flex mt-8 items-center justify-center gap-8">
              <Link href="/dashboard">
                <Button variant="secondary">Create Your Form</Button>
              </Link>
              <Link href="/login">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
