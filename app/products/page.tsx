import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { data } from "@/data/product";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Zap, Search, Lightbulb, Brain } from 'lucide-react';
import LatestProjectSection from "../components/LatestProjectSection";

const getIconForTitle = (title: string) => {
  switch (title.toLowerCase()) {
    case 'boost productivity':
      return <Zap className="w-20 h-20 text-brand" />;
    case 'explore opportunities':
      return <Search className="w-20 h-20 text-brand" />;
    case 'enhance creativity':
      return <Lightbulb className="w-20 h-20 text-brand" />;
    case 'improve decisions':
      return <Brain className="w-20 h-20 text-brand" />;
    default:
      return null;
  }
};

export default function Page() {
  return (
    <div className="flex flex-col mt-10 md:mt-20">
      <div className="flex flex-col gap-3 py-20 bg-gray-100 text-brand rounded-xl">
          <Typography className="max-w-4xl mx-auto text-center" variant="heading2">
            Supercharge peoples skills with intelligent and user friendly tools.
          </Typography>
          <Typography className="text-center mx-auto max-w-xl" variant="large">
            We strive to make AI helpful and simple to use, enabling everyone to benefit from its power.
          </Typography>
      </div>
      
        <div className="flex flex-col gap-10  mt-10 md:mt-20">
          <Typography variant="heading3">Our Goals</Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {data.map((card, index) => (
              <div className="flex flex-col gap-5 rounded-xl items-center text-center bg-muted p-10" key={index}>
                {getIconForTitle(card.title)}
                <Typography variant='heading4'>{card.title}</Typography>
                <Typography variant="paragraph">{card.description}</Typography>   
              </div>
            ))}
          </div>
        </div>
        <LatestProjectSection />
     
    </div>
  );
}