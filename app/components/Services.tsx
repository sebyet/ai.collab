// app/components/LatestProjectSection.tsx
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import React from 'react';

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  alignItems: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  alignItems,
  href,
}) => {
  return (
  <Link href={href}>
    <div className="relative rounded-xl h-[800px] hover:translate-x-1 transition-all ease-in-out cursor-pointer">
      <Image
        unoptimized
        priority
        src={imageSrc}
        alt={imageAlt}
        fill
        className="rounded-xl object-cover"
      />
      <div className={`flex flex-col justify-end ${alignItems} relative z-10 bg-black bg-opacity-50 rounded-xl p-5 md:p-10 h-full`}>
        <div className="w-full text-brand bg-background rounded-xl p-5 flex flex-col gap-3">
          <Typography variant="heading3">
            {title}
          </Typography>
          <Typography variant="paragraph">
            {description}
          </Typography>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default function Services() {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-32">
      <Typography variant="heading3">Services</Typography>
      <div className="grid grid-cols-2 gap-5">
        <ServiceCard 
          href="/services/discovery"
          imageSrc={"./service1.jpg"} 
          imageAlt={""} 
          title={"AI Discovery"} 
          description={"Explore the world of AI and its potential for your business."}    
          alignItems="items-start"    
        />
        <ServiceCard 
          href="/services/coaching"
          imageSrc={"./service2.jpg"} 
          imageAlt={""} 
          title={"AI Coaching"} 
          description={"Master popular AI tools through hands-on training."}    
          alignItems="items-end"    
        />
       
        
     
       

       

      </div>
    </div>
  );
}