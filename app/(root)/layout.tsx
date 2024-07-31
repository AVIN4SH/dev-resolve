import LeftSideBar from "@/components/shared/LeftSideBar";
import Navbar from "@/components/shared/navbar/Navbar";
import RightSideBar from "@/components/shared/RightSideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-[#fffcfa] dark:bg-dark-100">
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar />
      </div>
    </main>
  );
};

export default Layout;
