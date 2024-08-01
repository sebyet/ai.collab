/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@/components/ui/typography";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Story",
};

export default function Page() {
  return (
    <div className="flex flex-col mt-10 md:mt-20">
      <div className="flex flex-col gap-3 py-20 bg-gray-50 text-brand rounded-xl">
          <Typography className="max-w-3xl mx-auto text-center" variant="heading2">
            AI can make a real difference and and help people.
          </Typography>
          <Typography className="text-center mx-auto max-w-xl" variant="large">
            Driven by a love for technology and helping others, we believe AI can transform businesses and make a real difference.          
          </Typography>
      </div>
      <div className="flex flex-col gap-10  mt-10 md:mt-20">
        <div className="flex flex-col gap-3">
          <Typography variant="heading3">Problem</Typography>
          <Typography variant="paragraph">
            In today's rapidly evolving technology landscape, artificial intelligence is no longer a futuristic concept - it's here, and it's transforming industries at an unprecedented pace. However, one major challenge remains: integrating AI into human workflows and decision-making processes remains difficult.
          </Typography>
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="heading3">Solution</Typography> 
          <Typography variant="paragraph">
            At Apprendrai, we embrace the fact that the true potential of AI lies not in replacing humans, but in augmenting and enhancing human capabilities. Our mission is to meet these challenges head on, creating AI engineering solutions and products that foster a harmonious and productive relationship between humans and AI.
          </Typography>
        </div>
      </div>
    </div>
  );
}