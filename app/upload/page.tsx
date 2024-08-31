"use client";
import { uploadImages } from "@/helper/api";
import { checkImage, readAsBase64 } from "@/utils/image-utils.service";
import React, { useState } from "react";
import { Image } from "@/types";
function MultipleImageUpload() {
  const [images, setImages] = useState<Image[] | undefined>([]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files!) as File[];
    const newImages = await Promise.all(
      files.map(async (file) => {
        const isValidImage = checkImage(file, "image");
        if (isValidImage) {
          const dataURL = await readAsBase64(file);
          return { name: file.name, dataURL };
        }
      })
    ).then((images) =>
      images.filter((image) => image !== null && image !== undefined)
    );
    newImages?.length ? setImages(newImages) : setImages([]);

    // Update state with base64 and validation data
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await uploadImages(images);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          title="Select multiple images to upload"
          type="file"
          multiple
          onChange={handleImageChange}
        />
        <button type="submit">Upload Images</button>
      </form>
    </div>
  );
}

export default MultipleImageUpload;
