"use client";

import { useEffect, useState } from "react";

import AnimatedCircularProgressBar from "@/components/magicui/animated-circular-progress-bar";

export function AnimatedLoadingBar() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="mx-auto w-full p-4 mt-5 h-[80vh] flex items-center justify-center">
      <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={value}
        gaugePrimaryColor="rgb(79 70 229)"
        className="text-white"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      />
    </main>
  );
}
