import Images from "@/components/Images";
import { getImages } from "@/helper/api";
export default async function Home() {
  const result = await getImages();
  if (!result) {
    return null;
  }

  return (
    <main className="">
      <div>
        <Images images={result} />
      </div>
    </main>
  );
}
