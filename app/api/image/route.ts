// import { getAllImagesFromCloudinary } from "@/helper/getImagesHelper";
// import { ImageProps } from "@/types";
// import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
// import { NextRequest, NextResponse } from "next/server";
// export async function GET(req: NextRequest, res: NextResponse) {
//   const pid = req.nextUrl.searchParams.get("pid");
//   console.log("pid", pid);

//   const images = await getAllImagesFromCloudinary();
//   let reducedImages: ImageProps[] = [];
//   let i = 0;
//   for (let result of images) {
//     reducedImages.push({
//       id: i,
//       height: result.height,
//       width: result.width,
//       public_id: result.public_id,
//       format: result.format,
//     });
//     i++;
//   }
//   const currentPhoto = reducedImages.find((img) => img.id === Number(pid));
//   console.log("currentPhoto", currentPhoto);
//   if (currentPhoto) {
//     currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);
//   } else {
//     return NextResponse.json({ message: "Not found" }, { status: 404 });
//   }
//   return NextResponse.json(
//     { message: "Done!", data: currentPhoto },
//     { status: 200 }
//   );
// }
