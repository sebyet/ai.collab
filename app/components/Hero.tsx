import React from 'react';

import Image from 'next/image';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'next-view-transitions';

const Hero = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 text-center">
        <Typography className="max-w-[600px] mx-auto border border-accent px-5 py-3 rounded-full" variant="large">
          Focus on what you do best<span className='hidden md:inline-block'>, no matter your companys size.</span>
        </Typography>
        <Typography className='max-w-[1000px] mx-auto' variant="heading1">
          We automate repetitive tasks<br></br> & boost business processes.
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