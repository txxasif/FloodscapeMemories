import React from "react";
import { FilleManager } from "@/components/FilleManager";

export default function Memories() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center  px-4">
      <div className="w-full flex justify-center mb-8">
        <h1 className="font-mono text-white text-5xl md:text-6xl lg:text-7xl text-center">
          File Manager
        </h1>
      </div>
      <div className="w-full max-w-4xl flex items-center justify-center  shadow-lg rounded-lg p-4 md:p-8">
        <FilleManager />
      </div>
    </main>
  );
}
