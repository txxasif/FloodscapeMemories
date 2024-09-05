"use client";
import Image from "next/image";
import Link from "next/link";
import { CoolMode } from "@/components/magicui/cool-mode";
import React, { ReactNode } from "react";

interface AnimatedImageProps {
  children: ReactNode;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="animate-fade-in-out">{children}</div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex  justify-center text-white py-5 px-4">
      <div>
        <CoolMode>
          <Link href={"/"}>
            <AnimatedImage>
              {" "}
              <p className="text-center text-6xl font-black text-neutral-50">
                Floodscape
              </p>
            </AnimatedImage>
          </Link>
        </CoolMode>
      </div>
    </header>
  );
};

export default Header;
