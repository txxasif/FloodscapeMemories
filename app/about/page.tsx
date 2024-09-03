import { Notifications } from "@/components/ui/Notification";
import PhotoSection from "@/components/PhotoSection";
import WelcomeMessage from "@/components/WelcomeMessage";
import Mock from "@/components/mock";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen   ">
      <WelcomeMessage />
      <PhotoSection />
      <Notifications />
      <Mock />
    </main>
  );
}
