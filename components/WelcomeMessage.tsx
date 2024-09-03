import React from "react";

const WelcomeMessage = () => {
  return (
    <main>
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden  sm:rounded-lg">
            <div className="p-6  border-gray-700 sm:px-20">
              <div className="mt-6 text-xl text-white">
                Welcome to Floodscape Memories!
              </div>
              <div className="mt-6 text-white opacity-80 text-justify">
                {`  Welcome to Floodscape Memories, a special place where we, as a
                close-knit group of friends who feel like family, come together
                to preserve our shared experiences. This website holds the
                photos and memories from the flood that impacted Feni, a time
                when we banded together to help those in need. As we continue to
                build our story, we'll keep adding to this collection, ensuring
                that these moments stay with us for years to come.`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WelcomeMessage;
