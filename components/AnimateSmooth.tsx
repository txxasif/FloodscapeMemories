"use client";
import { ChildrenPropsType } from "@/types";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedSection({ children }: ChildrenPropsType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
