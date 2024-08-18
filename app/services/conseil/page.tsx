import { Typography } from "@/components/ui/typography";
import Benefit from "../components/Projects";
import Format from "../components/Format";
import HeroSection from "../components/Hero";
import Cycle from "../components/Cycle";

const data = [
  {
    title: "Study",
    description: "We conduct in-depth analysis to understand your business needs, AI opportunities, and the market landscape, laying a solid foundation for success."
  },
  {
    title: "Act",
    description: "We help you implement AI solutions, guiding you through each step to ensure effective deployment and alignment with your strategic goals."
  },
  {
    title: "Refine",
    description: "We continuously assess and refine your AI strategy and implementation, making iterative improvements to maximize impact and adaptability."
  }
];

export default function Page() {
  return (
    <div className="flex flex-col">
      <HeroSection 
        imageSrc={"/service3.jpg"} 
        imageAlt={""} 
        title={"Benefit from a global vision of the AI power and its implementation process"} 
        subtitle={"BE ACCOMPANIED"}/> 
      <Cycle/>
      <Format data={data}/>
    </div>
  );
}