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

export default function Home() {
  console.log(process.env.LOCAL_URL, "local host");

  const { data: result = [], isPending } = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
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
