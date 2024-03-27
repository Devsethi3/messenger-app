import React from "react";
import AuthForm from "../_components/AuthForm";
import Image from "next/image";

const LoginPage = () => {

  return (
    <div className="w-full flex flex-col bg-gradient-to-b from-blue-100 to-yellow-100 items-center h-screen justify-center">
      <Image src="/images/logo.png" width="50" height="50" alt="logo" />
      <h2 className="text-3xl my-2 text-center font-semibold ">
        Sign in to your account
      </h2>
      <AuthForm />
    </div>
  );
};

export default LoginPage;
