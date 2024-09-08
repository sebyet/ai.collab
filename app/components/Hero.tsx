import React from 'react';

import Image from 'next/image';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';

const Hero = () => {
  return (
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
  );
};

export default Hero;