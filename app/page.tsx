import Images from "@/components/Images";
import { getImages } from "@/helper/api";
export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams.photoId);

  const result = await getImages();
  if (!result) {
    return null;
  }

  return (
    <main className="">
      <div>
        <Images images={result} pid={searchParams.photoId} />
      </div>
    </main>
  );
}
