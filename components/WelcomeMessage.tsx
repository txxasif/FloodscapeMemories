"use client";
import React from "react";
import BlurFade from "./magicui/blur-fade";
import BoxReveal from "./magicui/box-reveal";
import { useRef } from "react";
import type { ConfettiRef } from "@/components/magicui/confetti";
import Confetti from "@/components/magicui/confetti";

const WelcomeMessage = () => {
  return (
    <main>
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden  sm:rounded-lg">
            <div className="p-6  border-gray-700 sm:px-20">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-6 text-xl text-white">
                  Welcome to Floodscape Memories!
                </div>
              </BoxReveal>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-6 text-white opacity-80 text-justify">
                  {`  Welcome to Floodscape Memories, a special place where we, as a
                close-knit group of friends who feel like family, come together
                to preserve our shared experiences. This website holds the
                photos and memories from the flood that impacted Feni, a time
                when we banded together to help those in need. As we continue to
                build our story, we'll keep adding to this collection, ensuring
                that these moments stay with us for years to come.`}
                </div>
              </BoxReveal>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export function ConfettiDemo({ text }: { text: string }) {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        {text}
      </span>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}

export default WelcomeMessage;
