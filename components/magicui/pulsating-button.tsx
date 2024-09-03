"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  pulseColor?: string;
  duration?: string;
  href?: string;
}

export default function PulsatingButton({
  className,
  children,
  href,
  pulseColor = "#0096ff",
  duration = "1.5s",
  ...props
}: PulsatingButtonProps) {
  return (
    <Link
      href={href ? href : "#"}
      className={cn(
        "relative text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-black bg-blue-500 dark:bg-blue-500 px-4 py-2",
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </Link>
  );
}
