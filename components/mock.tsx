import Image from "next/image";
import IntroText from "./ui/IntroText";
const data = [
  "/photo/0.jpg",
  "/photo/1.JPG",
  "/photo/2.JPG",
  "/photo/3.JPG",
  "/photo/4.JPG",
  "/photo/5.JPG",
];
export default function Mock() {
  return (
    <section className="py-24 ">
      <IntroText bgColor="bg-none" borderColor="border-white" text="Photos" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center  lg:flex-row md:mt-20">
          <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
              <Image
                src={data[0]}
                alt="Team tailwind section"
                className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
                width={400}
                height={300}
              />
              <Image
                src={data[1]}
                alt="Team tailwind section"
                className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
                width={400}
                height={300}
              />
              <Image
                src={data[2]}
                alt="Team tailwind section"
                className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
                width={400}
                height={300}
              />
              <Image
                src={data[3]}
                alt="Team tailwind section"
                className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
                width={400}
                height={300}
              />
              <Image
                src={data[4]}
                alt="Team tailwind section"
                className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
                width={400}
                height={300}
              />
              <Image
                src={data[5]}
                alt="Team tailwind section"
                className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
