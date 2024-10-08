import axios from "axios";
const host = "http://localhost:3000";
import { Image, ImageProps } from "@/types";
const axiosInstance = axios.create({
  baseURL: process.env.LOCAL_URL,
});

export async function uploadImages(data: Image[] | undefined) {
  console.log(`${host}/api/upload/images`);
  console.log(process.env.LOCAL_URL);

  return await axiosInstance.post(`${host}/api/upload/images`, data);
}
// https://floodscape-memories.vercel.app
export async function getImages(): Promise<ImageProps[]> {
  return await axiosInstance
    .get(`/api/images/flood`)
    .then((res) => res.data.data);
}
export async function getWinterImages(): Promise<ImageProps[]> {
  return await axiosInstance
    .get(`/api/images/winter`)
    .then((res) => res.data.data);
}

export async function getImageById(id: number): Promise<ImageProps> {
  console.log(id);

  const data = await axiosInstance
    .get(`${host}/api/image?pid=${id}`)
    .then((res) => res.data.data);
  console.log(data);

  return data;
}
