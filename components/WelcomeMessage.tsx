"use client";
import React, { useEffect, useState } from "react";
import BlurFade from "./magicui/blur-fade";
import BoxReveal from "./magicui/box-reveal";
import { useRef } from "react";
import PulsatingButton from "./magicui/pulsating-button";

const WelcomeMessage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 600); // 0.5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
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
        <div className="flex justify-center w-full">
          {showButton ? (
            <PulsatingButton href="/memories">Explore Memories</PulsatingButton>
          ) : (
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <div className="px-2 py-2"> Explore Memories</div>
            </BoxReveal>
          )}
          ;
        </div>
      </div>
    </main>
  );
};

export default WelcomeMessage;
