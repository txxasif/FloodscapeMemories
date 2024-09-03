import { photoSectionData } from "@/helper/data";
import Image from "next/image";
import IntroText from "./ui/IntroText";

const PhotoSection = () => {
  return (
    <div className="font-[sans-serif] px-4 py-8 ">
      <IntroText
        bgColor="bg-none"
        borderColor="border-white"
        text="Photo Section"
      />
      <div className="lg:max-w-5xl sm:max-w-2xl mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 max-sm:gap-12 max-md:justify-center mt-16">
          {photoSectionData.map((member, index) => (
            <div key={index} className="flex items-center">
              <Image
                src={member.url}
                className="w-24 h-24 rounded-full"
                alt={`${member.name} profile`}
                width={100}
                height={100}
              />
              <div className="ml-6">
                <h4 className="text-white opacity-85 text-base font-bold">
                  {member.name}
                </h4>
                <p className="text-xs text-blue-600 mt-1">{member.khrapName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSection;
