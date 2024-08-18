import React from 'react';
import Image from 'next/image'; // Adjust import according to your project setup
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Typography } from '@/components/ui/typography';

// Define the prop types
interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ imageSrc, imageAlt, title, subtitle }) => (
  <AspectRatio ratio={2.35 / 1} className="bg-gray-50 rounded-xl">
    <div className="relative rounded-xl h-full">
      <Image 
        unoptimized 
        priority 
        src={imageSrc} 
        alt={imageAlt} 
        fill 
        className="rounded-xl object-cover" 
      />
      <div className="relative z-10 bg-black bg-opacity-50 rounded-xl p-5 md:p-10 h-full flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-3 text-onBrand">
          <div className="flex flex-col gap-1 text-center max-w-[800px] mx-auto">
            <Typography className="p-3 rounded-full bg-brand text-onBrand w-fit mx-auto" variant="small">
              {subtitle}
            </Typography>
            <Typography variant="heading2">
              {title}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </AspectRatio>
);

export default HeroSection;
