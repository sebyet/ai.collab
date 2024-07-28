import { Typography } from "@/components/ui/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Story",
};

export default function Page() {
  return (
    <div className="mt-10 flex flex-col gap-20">
       <div className="flex flex-col gap-5 text-center justify-center items-center max-w-4xl mx-auto">
        <Typography variant="heading2">
          Unlocking the roadmap to a better version of your product.
        </Typography>
      </div>
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
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