import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { data } from "@/data/product";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Zap, Search, Lightbulb, Brain } from 'lucide-react';

const getIconForTitle = (title: string) => {
  switch (title.toLowerCase()) {
    case 'boost productivity':
      return <Zap className="w-20 h-20 text-brand" />;
    case 'explore opportunities':
      return <Search className="w-20 h-20 text-accent" />;
    case 'enhance creativity':
      return <Lightbulb className="w-20 h-20 text-brand" />;
    case 'improve decision making':
      return <Brain className="w-20 h-20 text-accent" />;
    default:
      return null;
  }
};

export default function Page() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto gap-10 relative px-0">
        <Typography className="max-w-xl text-brand mx-auto text-center" variant="heading2">
         This is a title for the story page with more than a line
        </Typography>
      
      <div className="flex flex-col gap-20 max-w-6xl mx-auto">
        <div className="flex flex-col gap-10">
          <Typography variant="heading3">Our Goal</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {data.map((card, index) => (
            <div className="flex flex-col gap-5 items-center text-center" key={index}>
              {getIconForTitle(card.title)}
              <Typography variant='heading4'>{card.title}</Typography>
              <Typography variant="paragraph">{card.description}</Typography>
              
            </div>
          ))}
        </div>
        </div>
        <div className="flex flex-col gap-10">
          <Typography variant="heading3">Our Latest Project</Typography> 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          <Image
          className="mt-auto"
          unoptimized
          priority
          src={"/demo.png"}
          height={1500}
          width={1500}
          alt="thumbnail" />
          <div className="flex flex-col gap-5 my-auto">
            <Typography variant="heading3">Problem</Typography>
            <Typography variant="paragraph">Born in La Réunion, my journey into the digital world started with a focus on marketing and sales.<br/> A few years later, my interest in digital product development transformed into a passion for creating and solving problems with great user experiences.</Typography>
            <Button className="w-fit" >Discover</Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}