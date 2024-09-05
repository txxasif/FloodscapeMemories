import React from "react";

const FloodScape = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-black dark:bg-black">
      <div className="relative">
        {/* Transparent Text with stroke */}
        <h2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl text-transparent stroke-[2px] stroke-[#8338ec] dark:stroke-[#8338ec]">
          FloodScape
        </h2>
        {/* Animated Text */}
        <h2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl text-[#c19bf5] dark:text-[#c19bf5] animate-clip">
          FloodScape
        </h2>
      </div>
    </section>
  );
};

export default FloodScape;
