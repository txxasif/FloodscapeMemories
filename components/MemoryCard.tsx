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
            <div key={index}>
              <Link href="#_" className="flex-1">
                <div className="relative aspect-w-16 aspect-h-9 mb-4 sm:mb-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className={`rounded-xl ${image.rotateClass} hover:rotate-0 duration-500 hover:-translate-y-2 object-cover hover:scale-110 md:hover:scale-120 transform origin-bottom`}
                    width={400}
                    height={300}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedImages;
