"use client";
import Images from "@/components/Images";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { getImages } from "@/helper/api";
import { AnimatedLoadingBar } from "@/components/ui/AnimatedLoadingBar";
import { CurrentDirectory } from "@/components/CurrentDirectory";

export default function Home() {
  const { data: result = [], isPending } = useQuery({
    queryKey: ["flood"],
    queryFn: getImages,
  });
  if (isPending) {
    return <AnimatedLoadingBar />;
  }

  return (
    <main>
      <div className=" text-white px-4">
        <CurrentDirectory text="flood" />
      </div>
      <section className="mx-auto max-w-[1960px] p-4 mt-5">
        <Images images={result} />
      </section>
    </main>
  );
}
