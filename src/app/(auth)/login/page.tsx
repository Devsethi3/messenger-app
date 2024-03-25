import React, { useState } from "react";
import AuthForm from "../_components/AuthForm";
import Image from "next/image";

const LoginPage = () => {

  return (
    <div className="w-full flex flex-col items-center h-screen bg-rose-50 justify-center">
      <Image src="/images/logo.png" width="50" height="50" alt="logo" />
      <h2 className="text-3xl text-center font-bold ">
        Sign in to your account
      </h2>
      <AuthForm />
    </div>
  );
};

export default LoginPage;
