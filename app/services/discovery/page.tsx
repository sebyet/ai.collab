import { Typography } from "@/components/ui/typography";
import Benefit from "../components/Projects";
import Format from "../components/Format";
import HeroSection from "../components/Hero";
import Questions from "../components/Questions";

const data = [
  {
    title: "Explore AI Tools",
    description: "We help you explore and understand various AI tools available in the market, identifying which ones align with your needs and goals."
  },
  {
    title: "Identify Opportunities",
    description: "We work with you to identify key opportunities where AI can be leveraged to enhance your business processes and outcomes."
  },
  {
    title: "Develop a Strategy",
    description: "We assist in developing a strategic plan for integrating AI into your operations, ensuring you have a clear path forward for effective implementation."
  }
];


export default function Page() {
  return (
    <div className="flex flex-col">
      <HeroSection 
        imageSrc={"/service1.jpg"} 
        imageAlt={""} 
        title={"Discover the world of AI and explore its potential for your business"} 
        subtitle={"MAKE THE STEP"}/>
      <Questions/>
      <Format data={data}/>
    </div>
  );
}