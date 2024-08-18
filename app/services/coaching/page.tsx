import { Typography } from "@/components/ui/typography";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Format from "../components/Format";
import Topics from "../components/Topics";
import HeroSection from "../components/Hero";

const data = [
  {
    title: "Discover",
    description: "We assess your current level of AI knowledge and discuss your coaching needs to tailor our approach."
  },
  {
    title: "Coach",
    description: "We provide personalized coaching in three key areas: understanding AI tools, applying AI concepts to your workflow, and developing practical skills for effective implementation."
  },
  {
    title: "Review",
    description: "We review your learnings and achievements to set clear objectives for your future AI journey, providing a roadmap for future development and continuous improvement."
  }
];

export default function Page() {
  return (
    <div className="flex flex-col">
      <HeroSection 
        imageSrc={"/service2.jpg"} 
        imageAlt={""} 
        title={"Learn to use AI tools effectively to lead the future of your industry"} 
        subtitle={"UNLOCK A BETTER YOURSELF"}/>
      <Topics />
      <Format data={data}/>
    </div>
  );
}