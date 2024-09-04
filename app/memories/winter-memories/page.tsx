"use client";
import Images from "@/components/Images";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { getWinterImages } from "@/helper/api";
import { AnimatedLoadingBar } from "@/components/ui/AnimatedLoadingBar";

export default function Home() {
  const { data: result = [], isPending } = useQuery({
    queryKey: ["images"],
    queryFn: getWinterImages,
  });
  if (isPending) {
    return <AnimatedLoadingBar />;
  }

  return (
    <main className="mx-auto max-w-[1960px] p-4 mt-5">
      <Images images={result} />
    </main>
  );
}
