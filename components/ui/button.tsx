"use client";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { motion } from "framer-motion";

export const WetPaintButton = () => {
  return (
    <div className="relative w-64 h-64 bg-gray-900 flex flex-col items-center justify-center">
      <motion.div className="relative">
        <motion.button
          className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Wet Paint Button
        </motion.button>

        <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ y: 0 }}
              animate={{ y: 60 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeIn",
                delay: index * 0.5,
              }}
            >
              <motion.div
                className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full"
                animate={{
                  scaleY: [1, 1.5, 1],
                  scaleX: [1, 0.7, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export const FallingPaintButton = () => {
  const dropColors = ["#818cf8", "#6366f1", "#4f46e5"]; // Different shades of indigo

  return (
    <div className="relative w-64 h-96 bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
      <motion.button
        className="relative z-10 bg-indigo-500 text-white font-bold py-3 px-6 rounded-md shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Wet Paint Button
      </motion.button>

      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 right-0 flex justify-center"
          initial={{ y: -100 }}
          animate={{ y: "100%" }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: index * 1.5,
          }}
        >
          <motion.div
            className="w-1 rounded-full"
            style={{
              background: dropColors[index],
              filter: "url(#goo)",
              height: 20 + index * 10,
            }}
            animate={{
              scaleY: [1, 1.2, 1],
              scaleX: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      ))}

      <svg width="0" height="0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>
    </div>
  );
};
export const PaintDripButton = () => {
  return (
    <div className="relative w-64 h-96 bg-gray-900 flex flex-col items-center justify-start pt-12">
      <motion.button
        className="relative bg-indigo-500 text-white font-bold py-3 px-6 rounded-md shadow-lg overflow-visible"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Wet Paint Button
        <motion.div
          className="absolute -bottom-1 left-1/2 w-1/2 h-40 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-b-full"
            style={{ filter: "url(#goo)" }}
          >
            <motion.div
              className="absolute bottom-0 left-1/2 w-4 h-4 -ml-2 bg-indigo-400 rounded-full"
              animate={{
                y: [0, 150],
                scaleX: [1, 1.2, 0.8, 1],
                scaleY: [1, 0.8, 1.2, 1],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.button>

      <svg width="0" height="0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>
    </div>
  );
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90":
              variant === "default",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export const AnimatedButton = ({
  text,
  className,
  url,
}: {
  text: string;
  className?: string;
  url?: string;
}) => {
  return (
    <Link
      href={url ? url : "#"}
      className={`relative inline-block group ${className}`}
    >
      <span className="relative z-10 px-3.5 py-2 overflow-hidden font-medium leading-tight flex items-center justify-center text-indigo-600 transition-colors duration-300 ease-out border-2 border-indigo-600 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        {/* Adjusted the dimensions and position of the background */}
        <span className="absolute inset-0 w-full h-full transition-all duration-300 origin-center -translate-x-full translate-y-0 bg-indigo-600 group-hover:translate-x-0 ease"></span>
        <span className="relative text-base font-semibold">{text}</span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-indigo-600 rounded-lg group-hover:mb-0 group-hover:mr-0 "
        data-rounded="rounded-lg"
      ></span>
    </Link>
  );
};
