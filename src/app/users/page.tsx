"use client";
import EmptyState from "@/components/EmptyState";
import React from "react";

const UsersPage = () => {
  return (
    <>
      <div className="hidden lg:block lg:pl-80 h-screen">
        <EmptyState />
      </div>
    </>
  );
};

export default UsersPage;
