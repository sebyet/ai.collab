import React from 'react';

import Image from 'next/image';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const items = [
  { keyFact: "15%", text: "minimum time saved/day*" },
  { keyFact: "40%", text: "reduced decision-making time*" },
  { keyFact: "30%", text: "average cost reduction*" },
]

const Hero = () => {
  return (
    <div className='flex flex-col gap-5  md:gap-10'>
      <div className="flex flex-col gap-10 bg-muted py-10 md:py-20 rounded-xl">
        <div className="flex flex-col gap-5 text-center">
          <Typography className="max-w-[600px] mx-auto border-2 border-accent bg-onBrand px-5 py-3 rounded-full text-xs md:text-lg" variant="large">
            Focus on what you do best<span className='hidden md:inline-block'>, no matter your companys size.</span>
          </Typography>
          <Typography className='max-w-[1200px] mx-auto' variant="heading1">
            We transform your business processes using AI to save you time and boost performance.
          </Typography>
          <Link href="/#call">
            <Button className="w-fit" size="lg" variant="default">
              Lets discover use cases<span className='hidden md:inline-block'>&nbsp;together</span>
            </Button>
          </Link>
        </div>
      </div>
      <Carousel  opts={{loop: true }} className="w-full max-w-full flex flex-col gap-3">
        <CarouselContent>
            {items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="bg-brand flex flex-col justify-center min-h-[250px] items-center rounded-xl p-5 md:p-10">
                      <Typography className="text-onBrand text-7xl" variant="large">{item.keyFact}</Typography>
                      <Typography className='text-onBrand' variant="small">{item.text}</Typography> 
                  </CardContent>
                </Card>
            </CarouselItem>
            ))}
        </CarouselContent>
        <Typography variant='small'>* current average estimate based on studies on the use of AI in companies</Typography>
    </Carousel>
    </div>
  );
};

export default Hero;