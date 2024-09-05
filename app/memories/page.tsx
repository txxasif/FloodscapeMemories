"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { SmoothScrollHero, Hero } from "@/components/ui/smoothi-scroll";

export default function Memories() {
  return (
    <div>
      <SmoothScrollHero />
    </div>
  );
}
