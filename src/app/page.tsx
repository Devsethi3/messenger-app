"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

const HomePage = () => {
  useGSAP(() => {
    gsap.from(".home-content", {
      y: 100,
      duration: 0.8,
      opacity: 0,
      stagger: 0.1,
    });
  }, []);
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const cursor = document.querySelector(".cursor");
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.inOut",
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* <div className="w-48 h-48 bg-white rounded-full absolute opacity-20 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div> */}

      <div className="overflow-hidden z-[100]">
        <div className="h-full">
          <div className="flex flex-col container items-center justify-center h-[90vh]">
            <div className="mx-auto text-center">
              <h1 className="font-semibold text-4xl sm:text-4xl lg:text-7xl">
                <span className="home-content block">
                  Chat in Real Time with Friends
                </span>
                <span className="block home-content text-primary">
                  Create Group for group chat
                </span>
              </h1>

              <p className="lg:mx-auto mx-4 home-content lg:text-base my-12 max-w-xl text text-black/80 dark:text-white/80">
                Connect with your friends and loved ones instantly with our
                real-time chat application. Whether you want to catch up, simply
                stay connected.
              </p>
              <div className="flex mt-8 items-center home-content justify-center gap-8">
                <Link href="/users">
                  <Button variant="secondary">Start Chatting</Button>
                </Link>
                <Link href="/login">
                  <Button>Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
