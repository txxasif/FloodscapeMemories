import { ImageProps } from "@/types";
import cloudinary from "@/utils/cloudinary";

export async function getAllFloodImagesFromCloudinary(): Promise<ImageProps[]> {
  const results = await cloudinary.v2.search
    .expression(`folder:flood/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  return results.resources;
}
export async function getAllWinterImagesFromCloudinary(): Promise<
  ImageProps[]
> {
  const results = await cloudinary.v2.search
    .expression(`folder:winter/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  return results.resources;
}
