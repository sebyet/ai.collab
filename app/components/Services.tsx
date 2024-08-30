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
        <AspectRatio ratio={16 / 9} className="bg-gray-50 rounded-xl">
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
              <div className="flex flex-row flex-wrap gap-5">
                {keyPoints.map((point: string, index: number ) => (
                  <div key={index} className="px-5 py-3 rounded-full bg-accent text-onAccent text-sm">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AspectRatio>
      </div>
    </>
  );
}

export default function Services() {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-32">
      <Typography variant="heading3">Services</Typography>
      <div className="flex flex-col gap-10">
        <ServiceCard 
          imageSrc="./service1.jpg"
          imageAlt=""
          title="AI Automations"
          description="Thanks to our business experience, we are particularly adept at designing automation workflows and developing autonomous agents. This expertise helps streamline processes and improve efficiency, ensuring that solutions are not only technically robust, but also aligned with your business objectives."
          keyPoints={
            ["Autonomous Agent", "Chatbot", "Voice assistant"]
          }
          alignItems="items-start"
        />
        <ServiceCard 
          imageSrc="./service3.jpg"
          imageAlt=""
          title="AI Applications"
          description="Using leading-edge technologies and programming frameworks, we create tailor-made systems that offer unrivalled flexibility, scalability and control. Our solid technical expertise ensures that these solutions are optimized for efficiency and can integrate seamlessly with your existing infrastructure, providing precisely what your business needs."
          alignItems="items-end"
          keyPoints={
            ["AI Apps", "AI Custom Integration"]
          }
        />
        <ServiceCard 
          imageSrc="./service4.jpg"
          imageAlt=""
          title="On demand & scalable support"
          description="We offer flexible, responsive support tailored to your project needs, whether starting from scratch or supporting ongoing initiatives. This approach guarantees flexibility and quality assurance, leaving you free to concentrate on your core business."
          alignItems="items-start"
          keyPoints={
            ["Agile", "Context focused"]
          }
        />
      </div>
    </div>
  );
}