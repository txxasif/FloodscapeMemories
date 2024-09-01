import axios from "axios";
const host = "http://localhost:3000";
import { Image, ImageProps } from "@/types";
const axiosInstance = axios.create({
  baseURL: process.env.Backend_Url,
});

export async function uploadImages(data: Image[] | undefined) {
  console.log(`${host}/api/upload/images`);
  console.log(process.env.LOCAL_URL);

  return await axios.post(`${host}/api/upload/images`, data);
}

export async function getImages(): Promise<ImageProps[]> {
  return await axios
    .get(`${host}/api/upload/images`)
    .then((res) => res.data.data);
}
export async function getImageById(id: number): Promise<ImageProps> {
  console.log(id);

  const data = await axios
    .get(`${host}/api/image?pid=${id}`)
    .then((res) => res.data.data);
  console.log(data);

  return data;
}
