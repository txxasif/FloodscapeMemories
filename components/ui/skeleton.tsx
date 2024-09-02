import React from "react";

export default function Skeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-w-3 w-full h-96 aspect-h-2 rounded-lg bg-gray-200"></div>
    </div>
  );
}
