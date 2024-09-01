import { getImageById } from "@/helper/api";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Carousel from "@/components/Carousel";
export default async function Page({
  params,
  searchParams,
}: {
  params: { photoId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const photoId = params.photoId;
  let index = Number(photoId);
  console.log(searchParams.photoId);

  // const { data: currentPhoto, isPending } = useQuery({
  //   queryKey: ["image", index],
  //   queryFn: () => getImageById(index),
  // });
  const currentPhoto = await getImageById(index);

  if (!currentPhoto) return null;
  const currentPhotoUrl = `https://res.cloudinary.com/dupffxzyk/image/upload/c_scale,w_2560/v1725073216/${
    currentPhoto!.public_id
  }.${currentPhoto!.format}`;

  return (
    <>
      <Head>
        <title>Next.js Conf 2022 Photos</title>
        <meta property="og:image" content={currentPhotoUrl} />
        <meta name="twitter:image" content={currentPhotoUrl} />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto!} index={index} />
      </main>
    </>
  );
}
