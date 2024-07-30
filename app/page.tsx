import HeroSection from "./components/HeroSection";
import LatestProjectSection from "./components/LatestProjectSection";
import RotatingLogo from "./components/RotatingLogo";
import VisionSection from "./components/VisionSection";

export default function Index() {
  return (
    <div className="flex flex-col gap-20 relative">
      <div className="hidden lg:block absolute right-0 top-0">
        <RotatingLogo />
      </div>
      <HeroSection />
      <VisionSection />
      <LatestProjectSection />
    </div>
  );
}