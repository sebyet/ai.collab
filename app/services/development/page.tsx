import { Typography } from "@/components/ui/typography";
import Benefit from "../components/Projects";
import Format from "../components/Format";
import HeroSection from "../components/Hero";
import Projects from "../components/Projects";

export const data = [
  {
    title: "Business needs",
    description: "Identify business objectives, specific needs, and AI opportunities to create a focused and effective AI strategy."
  },
  {
    title: "Incremental Development",
    description: "Develop an initial prototype for early validation, followed by step-by-step deliverables to ensure gradual and manageable implementation."
  },
  {
    title: "Review and Improvement",
    description: "Continuously assess the AI solution's performance and impact, making iterative improvements based on feedback and performance metrics."
  }
];

export default function Page() {
  return (
    <div className="flex flex-col">
     <HeroSection 
        imageSrc={"/service4.jpg"} 
        imageAlt={""} 
        title={"Create tailored AI solutions to meet your unique business challenges"} 
        subtitle={"ACCELERATE GROWTH"}/> 
      <Projects/>
      <Format data={data}/>
    </div>
  );
}