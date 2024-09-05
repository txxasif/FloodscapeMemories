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
              <Image
                className=""
                src={"/logo-final.svg"}
                width={100}
                height={100}
                alt="logo"
              />
            </AnimatedImage>
          </Link>
        </CoolMode>
      </div>
    </header>
  );
};

export default Header;

// const Nav = () => {
//   return (
//     <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
//       <SiSpacex className="text-3xl mix-blend-difference" />
//       <button
//         onClick={() => {
//           document.getElementById("launch-schedule")?.scrollIntoView({
//             behavior: "smooth",
//           });
//         }}
//         className="flex items-center gap-1 text-xs text-zinc-400"
//       >
//         LAUNCH SCHEDULE <FiArrowRight />
//       </button>
//     </nav>
//   );
// };
