import { ImageProps } from "@/types";
import cloudinary from "@/utils/cloudinary";

export async function getAllImagesFromCloudinary(): Promise<ImageProps[]> {
  const results = await cloudinary.v2.search
    .expression(`folder:flood/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  return results.resources;
}
