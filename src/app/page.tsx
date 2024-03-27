import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="bg-[url(/paper.svg)] h-full">
          <div className="flex flex-col items-center justify-center h-[90vh]">
            <div className="mx-auto text-center">
              <h1 className="font-semibold text-4xl sm:text-4xl lg:text-7xl">
                Create Your Custom Forms
                <span className="block text-primary">
                  With Drag-and-Drop Ease.
                </span>
              </h1>

              <p className="lg:mx-auto mx-4 text-sm lg:text-base my-12 max-w-xl text text-black/80 dark:text-white/80">
                Streamline your data collection process effortlessly. Our
                intuitive drag-and-drop interface allows you to build custom
                forms tailored to your exact needs, without any coding required.
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
      </div>
    </>
  );
};

export default HomePage;
