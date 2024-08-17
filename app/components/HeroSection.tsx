// app/components/Hero.tsx
import { Typography } from "@/components/ui/typography";
import { data } from "@/data/home";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
    <AspectRatio ratio={16 / 9} className="bg-gray-50 rounded-xl">
      <div className="relative rounded-xl h-full">
        <Image unoptimized priority src="/home.jpg" alt="" fill className="rounded-xl object-cover" />
        <div className="relative z-10 bg-black bg-opacity-50 rounded-xl p-5 md:p-10 h-full flex flex-col gap-3 justify-end">
        <Typography className="max-w-5xl text-onBrand" variant="heading1">
          AI services that bring,
          <br />
          Humans & AI, Together, Forward.
          <br />
          Accelerating Business Growth.
        </Typography>
        </div>
      </div>
    </AspectRatio></>
  );
}