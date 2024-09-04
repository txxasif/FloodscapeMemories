import React from "react";
import Image from "next/image"; // Assuming you're using Next.js

const AnimatedImages: React.FC = () => {
  return (
    <section className="bg-zinc-50 overflow-hidden">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Image Card Component */}
          {[
            {
              src: "https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Image 1",
              rotateClass: "rotate-6",
            },

            {
              src: "https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              alt: "Image 4",
              rotateClass: "-rotate-12",
            },
          ].map((image, index) => (
            <a href="#_" key={index} className="flex-1 mb-4 sm:mb-0">
              <Image
                src={image.src}
                alt={image.alt}
                className={`rounded-xl ${image.rotateClass} hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom`}
                layout="responsive"
                width={500}
                height={300}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedImages;
