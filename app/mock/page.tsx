import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Mock</h1>
      <Link href={"/mock"} as={"/mockxx"}>
        Click
      </Link>
    </div>
  );
}
