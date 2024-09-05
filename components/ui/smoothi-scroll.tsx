import React, { useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";

// Constants
const SECTION_HEIGHT = 1500;

interface ScheduleItemProps {
  title: string;
  date: string;
  location: string;
  url: string;
}

interface ParallaxImgProps {
  className: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}

interface ImageData {
  src: string;
  alt: string;
  start: number;
  end: number;
  className: string;
}

export const SmoothScrollHero: React.FC = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage: React.FC = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  ) as MotionValue<string>;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://res.cloudinary.com/dlqfvjmpm/image/upload/v1725435702/winter/dcx8j1wszdmlw3qhq5ye.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages: React.FC = () => {
  const images: ImageData[] = [
    {
      src: "https://res.cloudinary.com/dlqfvjmpm/image/upload/v1725435713/winter/dgi0jlfauiiahpfpkzur.jpg",
      alt: "An example of a space launch",
      start: -200,
      end: 200,
      className: "w-1/3",
    },
    {
      src: "https://res.cloudinary.com/dlqfvjmpm/image/upload/v1725435703/winter/ebgilz06zrlqurohbb4o.jpg",
      alt: "An example of a space launch",
      start: 200,
      end: -250,
      className: "mx-auto w-2/3",
    },
    {
      src: "https://res.cloudinary.com/dlqfvjmpm/image/upload/v1725435700/winter/altso1swqt7p7ocpboeg.jpg",
      alt: "Orbiting satellite",
      start: -200,
      end: 200,
      className: "ml-auto w-1/3",
    },
    {
      src: "https://res.cloudinary.com/dlqfvjmpm/image/upload/v1725435632/flood/wdtdmgaoxpgsikqmoez1.jpg",
      alt: "Orbiting satellite",
      start: 0,
      end: -500,
      className: "ml-24 w-5/12",
    },
    // Add more images here as needed
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      {images.map((img, index) => (
        <ParallaxImg
          key={index}
          src={img.src}
          alt={img.alt}
          start={img.start}
          end={img.end}
          className={img.className}
        />
      ))}
    </div>
  );
};

const ParallaxImg: React.FC<ParallaxImgProps> = ({
  className,
  alt,
  src,
  start,
  end,
}) => {
  const ref = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule: React.FC = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Memories
      </motion.h1>
      <ScheduleItem
        url="/memories/flood-memories"
        title="Flood"
        date="2024"
        location="Sonagazi"
      />
      <ScheduleItem
        url="/memories/winter-memories"
        title="Winter"
        date="2023"
        location="Sonagazi"
      />
    </section>
  );
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  title,
  date,
  url,
  location,
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <Link className="mb-1.5 text-xl text-zinc-50" href={url}>
          {title}
        </Link>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};

export default SmoothScrollHero;
