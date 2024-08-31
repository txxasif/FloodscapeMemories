import { NextRequest, NextResponse } from "next/server";
import cloudinary, { UploadApiResponse } from "cloudinary";
import { uploadImagesToCloudinary } from "@/utils/cloduinary.utils";
import { v4 as uuidV4 } from "uuid";
import { Image, ImageProps } from "@/types";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";

cloudinary.v2.config({
  cloud_name: "dupffxzyk",
  api_key: "591129579995744",
  api_secret: "BTZApkKI71IdYFDD9JJgiz65w3o",
});

export async function GET() {
  const results = await cloudinary.v2.search
    .expression(`folder:flood/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  console.log(results.resources);

  let reducedResults: ImageProps[] = [];
  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }
  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return NextResponse.json(
    { message: "Done!", data: reducedResults },
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
