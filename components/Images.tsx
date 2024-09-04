"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { ImageProps } from "@/types";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useLastViewedPhoto } from "@/utils/useLastViewedPhoto";
import Modal from "./Modal";
import { usePidStore } from "@/store/pid-store";
import { config } from "@/config";

export default function Images({ images }: { images: ImageProps[] }) {
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();
  const lastViewedPhotoRef = useRef<HTMLDivElement>(null);
  const photoId = usePidStore((state) => state.pid);
  const setPid = usePidStore((state) => state.setPid);
  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      if (lastViewedPhotoRef.current) {
        lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      }
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);
  return (
    <>
      {photoId !== -10 ? (
        <Modal
          images={images}
          onClose={() => {
            setLastViewedPhoto(Number(photoId));
          }}
        />
      ) : null}
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {images.map(({ id, public_id, format, blurDataUrl, version }) => (
          <div
            key={id}
            ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
            //'http://res.cloudinary.com/dupffxzyk/image/upload/v1725073216/flood/bf33db7b-ec67-4d8f-af42-e5770cbabad9.png',
            onClick={() => setPid(id.toString())}
            className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <BlurFade inView>
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${config.CLOUD_NAME}/image/upload/c_scale,w_720/v${version}/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 10v172539640vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
              />{" "}
            </BlurFade>
          </div>
        ))}
      </div>
    </>
  );
}
//className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
