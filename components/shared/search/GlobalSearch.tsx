"use client";

import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden ">
      <div className="background-light800_darkgradient relative flex min-h-14 grow items-center gap-1 rounded-xl px-4">
        <Image
          src={"/assets/icons/search.svg"}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search globally"
          value=""
          onChange={() => {}}
          className="paragraph-regular no-focus placeholder  border-none shadow-none outline-none placeholder:text-gray-600 placeholder:dark:text-white/75"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
