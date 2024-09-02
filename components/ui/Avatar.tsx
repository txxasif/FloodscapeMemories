"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarCirclesProps {
  className?: string;
  avatarUrl: string;
}

const AvatarCircles = ({ className, avatarUrl }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      <Image
        className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
        src={avatarUrl}
        width={40}
        height={40}
        alt={`Avatar`}
      />
    </div>
  );
};
export const AvatarForPhotoSection = ({
  className,
  avatarUrl,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      <Image
        className="h-52 w-56 rounded-full border-2 border-white dark:border-gray-800"
        src={avatarUrl}
        width={250}
        height={250}
        alt={`Avatar`}
      />
    </div>
  );
};

export default AvatarCircles;
