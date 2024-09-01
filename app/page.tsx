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
export default function Home() {
  const { data: result = [], isPending } = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });
  if (isPending) {
    return null;
  }
  console.log(result);

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <Images images={result} />
    </main>
  );
}
