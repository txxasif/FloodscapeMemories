"use client";
import Skeleton from "./skeleton";
export function LadingBar() {
  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </main>
  );
}
