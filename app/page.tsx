import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
 import Services from "./components/Services";
import UseCases from "./components/UseCases";
import VisionSection from "./components/VisionSection";

export default function Index() {
  return (
    <div className="flex flex-col relative">
      <Hero />
      <UseCases/>
      <VisionSection />
      <Services/>
    </div>
  );
}