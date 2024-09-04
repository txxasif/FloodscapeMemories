"use client";
import React from "react";
import { FilleManager } from "@/components/FilleManager";
import BlurFade from "@/components/magicui/blur-fade";
import FolderCard from "@/components/ui/FolderCard";
import AnimatedCircularProgressBar from "@/components/magicui/animated-circular-progress-bar";
import AnimatedImages from "@/components/MemoryCard";
export default function Memories() {
  return (
    <div className="container">
      <AnimatedImages />
    </div>
    // <main className="w-full min-h-[80vh] flex flex-col   px-4">
    //   <div className="w-full flex justify-center mb-8">
    //     <h1 className="font-mono text-white text-5xl md:text-6xl lg:text-7xl text-center">
    //       File Manager
    //     </h1>
    //   </div>
    //   <div className="w-full">
    //     <FolderCard description="" title="Photos" />
    //   </div>

    //   <div className="w-full max-w-4xl flex items-center justify-center  shadow-lg rounded-lg p-4 md:p-8">
    //     {" "}
    //     <FilleManager />
    //   </div>
    // </main>
  );
}
