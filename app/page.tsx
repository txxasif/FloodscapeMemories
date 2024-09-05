"use client";
import { Notifications } from "@/components/ui/Notification";
import PhotoSection from "@/components/PhotoSection";
import WelcomeMessage from "@/components/WelcomeMessage";
import { Gallery } from "@/components/mock";
import React, { useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import FloodScape from "@/components/ui/water";

export default function About() {
  return (
    <main className=" flex flex-col min-h-screen   ">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <WelcomeMessage />
        <Gallery />
        <PhotoSection />
        <Notifications />
      </ReactLenis>
    </main>
  );
}
