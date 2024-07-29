import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { data } from "@/data/product";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Zap, Search, Lightbulb, Brain } from 'lucide-react';
import { BenchNine } from "next/font/google";
import Benefit from "./components/Benefit";
import Format from "./components/Format";

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
    <div className="flex flex-col max-w-6xl mx-auto gap-20 relative px-0">
        <Typography className="max-w-xl text-brand mx-auto text-center" variant="heading2">
         This is a title for the story page with more than a line
        </Typography>
        <Benefit/>
        <Format/>
    
    </div>
  );
}