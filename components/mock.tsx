import Image from "next/image";

const data = [
  "/photo/0.jpg",
  "/photo/1.JPG",
  "/photo/2.JPG",
  "/photo/3.JPG",
  "/photo/4.JPG",
];

export default function PhotoGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-3xl">
            <div className="grid grid-cols-3 gap-4">
              {data.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Team photo ${index + 1}`}
                  className="w-full h-56 rounded-2xl object-cover"
                  width={200}
                  height={300}
                />
              ))}
              <img
                src="https://pagedone.io/asset/uploads/1696238737.png"
                alt="Team tailwind section"
                className="w-full h-56 rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
