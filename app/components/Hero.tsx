import React from 'react';

import Image from 'next/image';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';

const Hero = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 text-center">
        <Typography className="max-w-[600px] mx-auto border border-accent px-5 py-3 rounded-full text-xs md:text-lg" variant="large">
          Focus on what you do best<span className='hidden md:inline-block'>, no matter your companys size.</span>
        </Typography>
        <Typography className='max-w-[1200px] mx-auto' variant="heading1">
          We transform your business processes using AI to save you time and boost performance.
        </Typography>
        <Link href="/#call">
          <Button className="w-fit" size="lg" variant="default">
            Lets discover use cases together in a 15min call.
          </Button>
        </Link>
      </div>
      <Image
        className="mx-auto rounded-xl"
        unoptimized
        priority
        src={"/home.jpg"}
        height={1000}
        width={1000}
        alt="thumbnail"
      />
    </div>
  );
};

export default Hero;