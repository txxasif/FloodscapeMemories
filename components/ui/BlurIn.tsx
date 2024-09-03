"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurInProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const BlurIn = ({ text, className, variant, duration = 1 }: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "font-display text-justify  tracking-[-0.02em] drop-shadow-sm  md:leading-[2rem] opacity-30"
      )}
    >
      {text}
    </motion.div>
  );
};

export default BlurIn;
