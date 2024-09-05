import { FuzzyOverlay } from "./ui/background/FuzzyOverlay";
import { AnimatedButton } from "./ui/button";

const WelcomeMessage = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
        <p className="text-center text-4xl md:text-6xl font-black text-neutral-50">
          Welcome to Floodscape Memories!
        </p>
        <p className="text-justify md:text-center  text-neutral-400">
          {`  Floodscape Memories, a special place where we, as a
                close-knit group of friends who feel like family, come together
                to preserve our shared experiences. This website holds the
                photos and memories from the flood that impacted Feni, a time
                when we banded together to help those in need. As we continue to
                build our story, we'll keep adding to this collection, ensuring
                that these moments stay with us for years to come.`}
        </p>
        <div className="flex items-center justify-center gap-3">
          <AnimatedButton text="Explore Memories" url="/memories" />
        </div>
      </div>
    </main>
  );
};

export default WelcomeMessage;
