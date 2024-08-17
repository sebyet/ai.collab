import HeroSection from "./components/HeroSection";
import LatestProjectSection from "./components/LatestProjectSection";
import RotatingLogo from "./components/RotatingLogo";
import Services from "./components/Services";
import VisionSection from "./components/VisionSection";

export default function Index() {
  return (
    <div className="flex flex-col relative">
      <HeroSection />
      <VisionSection />
      <Services/>
    </div>
  );
}