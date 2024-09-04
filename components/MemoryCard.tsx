"use client";
import React from "react";
import Image from "next/image"; // Assuming you're using Next.js
import Link from "next/link";

const AnimatedImages: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-4 sm:px-8 md:px-12 mx-auto mt-4 md:mt-0 md:py-12 lg:py-24 space-y-6 md:space-y-24 h-svh flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Image Card Component */}
          {[
            {
              src: "https://res.cloudinary.com/dlqfvjmpm/image/upload/v1725435627/flood/azhluvaubhrnvcylgatu.jpg",
              alt: "Image 1",
              rotateClass: "rotate-6",
            },
            {
              src: "https://res.cloudinary.com/dlqfvjmpm/image/upload/v1725435706/winter/pygw6uolty0qdfyairce.jpg",
              alt: "Image 2",
              rotateClass: "-rotate-20",
            },
          ].map((image, index) => (
            <div
              key={index}
              className={` ${image.rotateClass} group   hover:rotate-0 duration-500 hover:-translate-y-2  hover:scale-110 md:hover:scale-120 transform origin-bottom`}
            >
              <Link href="#_" className={`flex-1 `}>
                <div className="relative aspect-w-16 aspect-h-9 mb-4 sm:mb-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className={`rounded-xl  object-cover`}
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100 ">
                    <AnimatedButton />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedButton: React.FC = ({ className }: { className?: string }) => {
  return (
    <button className="relative inline-block group">
      <span className="relative z-10 px-3.5 py-2 overflow-hidden font-medium leading-tight flex items-centrer justify-center text-indigo-600 transition-colors duration-300 ease-out border-2 border-indigo-600 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-indigo-600 group-hover:-rotate-180 ease"></span>
        <span className="relative text-base font-semibold">Button Text</span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-indigo-600 rounded-lg group-hover:mb-0 group-hover:mr-0 group-hover:mb-2"
        data-rounded="rounded-lg"
      ></span>
    </button>
  );
};

export default AnimatedImages;
