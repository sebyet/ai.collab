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
    <div className="relative rounded-xl h-72 hover:translate-x-1 transition-all ease-in-out cursor-pointer">
      <Image
        unoptimized
        priority
        src={imageSrc}
        alt={imageAlt}
        fill
        className="rounded-xl object-cover"
      />
      <div className={`flex flex-col justify-end ${alignItems} relative z-10 bg-black bg-opacity-50 rounded-xl p-5 md:p-10 h-full`}>
        <div className="max-w-[700px] w-fit text-brand bg-background rounded-xl p-5 flex flex-col gap-3">
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
      <div className="flex flex-col gap-10">
        <ServiceCard 
          href="/services"
          imageSrc={"./service1.jpg"} 
          imageAlt={""} 
          title={"AI Discovery"} 
          description={"Explore the world of AI and its potential for your business."}    
          alignItems="items-start"    
        />
        <ServiceCard 
          href="/services"
          imageSrc={"./service2.jpg"} 
          imageAlt={""} 
          title={"AI Coaching"} 
          description={"Master popular AI tools through hands-on training."}    
          alignItems="items-end"    
        />
        <ServiceCard 
          href="/services"
          imageSrc={"./service3.jpg"} 
          imageAlt={""} 
          title={"AI Consulting"} 
          description={"Get expert advice on integrating AI into your organisation."}    
          alignItems="items-start"    
        />
        <ServiceCard 
          href="/services"
          imageSrc={"./service4.jpg"} 
          imageAlt={""} 
          title={"AI Development"} 
          description={"Create tailored AI solutions to meet your business challenges."}    
          alignItems="items-end"    
        />
        
     
       

       

      </div>
    </div>
  );
}