import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";
import { string } from "zod";

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  alignItems: string;
  keyPoints: any;
}

function ServiceCard({
  imageSrc,
  imageAlt,
  title,
  description,
  alignItems,
  keyPoints,
}: ServiceCardProps) {
  return (
    <>
      <div className="flex flex-col gap-3 md:hidden">
        <AspectRatio ratio={16 / 9} className="bg-gray-50 rounded-xl md:hidden">
          <Image
            unoptimized
            priority
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-xl object-cover"
          />
        </AspectRatio>
        <div className="w-full text-brand bg-background rounded-xl flex flex-col gap-3">
          <Typography variant="heading3">{title}</Typography>
          <Typography variant="paragraph">{description}</Typography>
          <Link className="w-full" href="/talk-to-us">
            <Button className="w-full" variant="default">
              Learn more via a free call
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="bg-gray-50 rounded-xl relative h-[600px]">
          <Image
            unoptimized
            priority
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-xl object-cover"
          />
          <div
            className={`flex flex-col justify-end ${alignItems} relative z-10 bg-black bg-opacity-50 rounded-xl p-5 md:p-10 h-full`}
          >
            <div className="w-full text-brand bg-background rounded-xl p-5 flex flex-col gap-3">
              <Typography variant="heading3">{title}</Typography>
              <Typography variant="paragraph">{description}</Typography>
              <div className="flex flex-row flex-wrap gap-3">
                {keyPoints.map((point: string, index: number ) => (
                  <div key={index} className="px-5 py-3 rounded-full bg-accent text-onAccent text-sm">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Services() {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-32">
      <Typography variant="heading3">Services</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ServiceCard 
          imageSrc="./service1.jpg"
          imageAlt=""
          title="AI Automations"
          description="We design robuts automation workflows and autonomous agents aligned with your business objectives."
          keyPoints={
            ["Autonomous Agent", "Chatbot"]
          }
          alignItems="items-start"
        />
        <ServiceCard 
          imageSrc="./service3.jpg"
          imageAlt=""
          title="AI Applications"
          description="We create scalable tailor-made AI first applications that offer an enjoyable user experience."
          alignItems="items-end"
          keyPoints={
            ["AI Apps", "AI Custom Integration"]
          }
        />
      </div>
    </div>
  );
}