"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CoolMode } from "@/components/magicui/cool-mode";

const Header = () => {
  return (
    <header className="flex  justify-between text-white py-5 px-4">
      <div>
        <CoolMode>
          <Link href={"/"}>
            <Image
              className=""
              src={"/logo-final.svg"}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
        </CoolMode>
      </div>
      <div className="flex space-x-3 ml-3">
        <CoolMode>
          <Link className="  hover:text-white" href={"/about"}>
            About Us
          </Link>
        </CoolMode>
        <Link href={"#"}>Photo Gallery</Link>
      </div>
    </header>
  );
};

export default Header;
