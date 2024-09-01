import Images from "@/components/Images";
import { getImages } from "@/helper/api";
export default async function Home() {
  const result = await getImages();
  if (!result) {
    return null;
  }

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <Images images={result} />
    </main>
  );
}
