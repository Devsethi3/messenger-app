import Image from "next/image";
import React from "react";

const EmptyState = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center">
      <div className="text-center items-center flex flex-col gap-y-5">
        <Image src="/images/begin-chat.svg" alt="chat panel" width={300} height={300} />
        <h2 className="mt-2 text-2xl font-semibold">
          Select a <span className="text-[#884DEE]">chat</span> or start a new <span className="text-[#884DEE]">conversation</span>
        </h2>
      </div>
    </div>
  );
};

export default EmptyState;
