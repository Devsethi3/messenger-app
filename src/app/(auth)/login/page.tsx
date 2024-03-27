import React from "react";
import AuthForm from "../_components/AuthForm";
import Image from "next/image";

const LoginPage = () => {

  return (
    <div className="w-full flex flex-col bg-gradient-to-b from-blue-100 dark:from-emerald-900 to-yellow-100 dark:to-violet-900 items-center h-screen justify-center">
      <Image src="/images/logo.png" width="50" height="50" alt="logo" />
      <h2 className="text-2xl my-2 text-center font-semibold ">
        Sign in to your account
      </h2>
      <AuthForm />
    </div>
  );
};

export default LoginPage;
