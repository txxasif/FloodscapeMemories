import { NextRequest, NextResponse } from "next/server";
import { uploadImagesToCloudinary } from "@/utils/cloduinary.utils";
import { v4 as uuidV4 } from "uuid";
import { Image, ImageProps } from "@/types";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import { UploadApiResponse } from "cloudinary";
import { getAllWinterImagesFromCloudinary } from "@/helper/getImagesHelper";
import { config } from "@/config";

export async function GET() {
  const images = await getAllWinterImagesFromCloudinary();
  console.log(config.CLOUD_NAME);

  let reducedImages: ImageProps[] = [];
  let i = 0;
  for (let result of images) {
    reducedImages.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
      version: result.version,
    });
    i++;
  }

  const blurImagePromises = images.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedImages.length; i++) {
    reducedImages[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return NextResponse.json(
    { message: "Done!", data: reducedImages, images },
    { status: 200 }
  );
}
