import { Typography } from "@/components/ui/typography";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Story",
};

export default function Page() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto gap-10 relative px-0">
        <Typography className="max-w-xl text-brand mx-auto text-center" variant="heading2">
         This is a title for the story page with more than a line
        </Typography>
      
      <div className="flex flex-col gap-10 max-w-6xl mx-auto">
        <div className="flex flex-col gap-3">
          <Typography variant="heading3">Problem</Typography>
          <Typography variant="paragraph">Born in La Réunion, my journey into the digital world started with a focus on marketing and sales.<br/> A few years later, my interest in digital product development transformed into a passion for creating and solving problems with great user experiences.</Typography>
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="heading3">Solution</Typography> 
          <Typography variant="paragraph">I am based in Freiburg im Breisgau, Germany, contributing to Haufe Akademies e-commerce evolution. Passionate about solving real-world challenges through digital solutions, I am looking for freelance opportunities in Product Engineering, Software Development, and User Experience Optimisation.</Typography>
        </div>
      </div>
    </div>
  );
}