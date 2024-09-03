import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface Props {
  max: number;
  value: number;
  min: number;
  gaugePrimaryColor: string;
  gaugeSecondaryColor: string;
  className?: string;
}

export default function AnimatedCircularProgressBar({
  max = 100,
  min = 0,
  value = 0,
  gaugePrimaryColor,
  gaugeSecondaryColor,
  className,
}: Props) {
  const circumference = 2 * Math.PI * 45;
  const currentPercent = Math.round(((value - min) / (max - min)) * 100);

  return (
    <div
      className={`relative h-40 w-40 text-2xl font-semibold ${className || ""}`}
      style={
        {
          "--circumference": `${circumference}`,
        } as React.CSSProperties
      }
    >
      <svg className="h-full w-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={gaugeSecondaryColor}
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={gaugePrimaryColor}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference - (currentPercent / 100) * circumference
          }
          transform="rotate(-90 50 50)"
          style={{
            transition: "stroke-dashoffset 0.5s ease-in-out",
          }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center  justify-center">
        {currentPercent}%
      </span>
    </div>
  );
}
