import React from "react";

interface HeadingWithBorderProps {
  text: string; // The text to be displayed in the middle
  borderColor?: string; // The color of the border
  textColor?: string; // The color of the text
  bgColor?: string; // The background color of the text container
  className?: string; // Additional classes for customization
}

const IntroText: React.FC<HeadingWithBorderProps> = ({
  text,
  borderColor = "border-black",
  textColor = "text-white",
  bgColor = "bg-black",
  className = "",
}) => (
  <h2
    className={`flex  font-mono flex-row flex-nowrap items-center mt-24 ${className}`}
  >
    <span className={`flex-grow block border-t ${borderColor}`}></span>
    <span
      className={`flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium ${bgColor} ${textColor}`}
    >
      {text}
    </span>
    <span className={`flex-grow block border-t ${borderColor}`}></span>
  </h2>
);

export default IntroText;
