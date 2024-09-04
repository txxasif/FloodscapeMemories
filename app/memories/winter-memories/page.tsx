"use client";
import Images from "@/components/Images";
import { useQuery } from "@tanstack/react-query";

import { getWinterImages } from "@/helper/api";
import { AnimatedLoadingBar } from "@/components/ui/AnimatedLoadingBar";
import { CurrentDirectory } from "@/components/CurrentDirectory";

export default function Home() {
  const { data: result = [], isPending } = useQuery({
    queryKey: ["winter"],
    queryFn: getWinterImages,
  });
  if (isPending) {
    return <AnimatedLoadingBar />;
  }

  return (
    <main>
      <div className=" text-white px-4">
        <CurrentDirectory text="winter" />
      </div>
      <section className="mx-auto max-w-[1960px] p-4 mt-5">
        <Images images={result} />
      </section>
    </main>
  );
}
