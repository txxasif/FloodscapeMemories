import { Notifications } from "@/components/ui/Notification";
import Image from "next/image";
import PhotoSection from "@/components/PhotoSection";
import { BorderBeamWrapper } from "@/components/ui/BorderBeam";
export default function About() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 container ">
      <BorderBeamWrapper
        size={300}
        duration={10}
        delay={5}
        colorFrom="#3b82f6"
        colorTo="#8b5cf6"
        wrapperClassName="w-full overflow-hidden"
      >
        <PhotoSection />{" "}
      </BorderBeamWrapper>
      <Notifications />
      {/* <div className="mx-auto w-full max-w-2xl space-y-8">
        <Image
          src={"/cover.jpg"}
          alt="logo"
          width={500}
          height={480}
          sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
        />
      </div> */}
      <div></div>
    </main>
  );
}
