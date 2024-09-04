import { NextRequest, NextResponse } from "next/server";
import { uploadImagesToCloudinary } from "@/utils/cloduinary.utils";
import { v4 as uuidV4 } from "uuid";
import { Image, ImageProps } from "@/types";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import { UploadApiResponse } from "cloudinary";
import { getAllFloodImagesFromCloudinary } from "@/helper/getImagesHelper";

export async function GET() {
  const images = await getAllFloodImagesFromCloudinary();
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
export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();

  for (const file of body) {
    const profilePublicId = uuidV4();

    if (file.dataURL != null) {
      const uploadResult: UploadApiResponse = (await uploadImagesToCloudinary(
        file.dataURL,
        `${profilePublicId}`,
        true,
        true
      )) as UploadApiResponse;
      console.log(uploadResult.secure_url);
    }
  }

  return NextResponse.json({ message: "Done!" }, { status: 200 });
}
