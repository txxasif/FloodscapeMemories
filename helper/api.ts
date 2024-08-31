import { config } from "@/config";
import axios from "axios";
const host = "http://localhost:3000";
import { Image, ImageProps } from "@/types";
const axiosInstance = axios.create({
  baseURL: process.env.Backend_Url,
});

export async function uploadImages(data: Image[] | undefined) {
  console.log(`${host}/api/upload/images`);
  console.log(process.env.LOCAL_URL);

  return await axiosInstance.post(`${host}/api/upload/images`, data);
}

export async function getImages(): Promise<ImageProps[]> {
  return await axiosInstance
    .get(`${host}/api/upload/images`)
    .then((res) => res.data.data);
}
