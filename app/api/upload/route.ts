import { NextResponse } from "next/server";
import { NextRequest, NextResponse as NextResponseType } from "next/server";
import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest): Promise<NextResponseType> {
  console.log("hi");

  const body = await req.formData();
  console.log(body);

  return NextResponse.json({ message: "Done!" }, { status: 200 });
}

export async function GET(req: NextRequest): Promise<NextResponseType> {
  console.log("hi");
  return NextResponse.json({ message: "Done!" }, { status: 200 });
}
