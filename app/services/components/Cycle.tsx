import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { data } from '@/data/consulting';
import Image from "next/image";

import React from 'react';

const Cycle = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-20">
      <Typography variant="heading3">We accompany you through the AI product cycle</Typography>
      <div className="flex flex-col justify-between items-center md:flex-row rounded-xl bg-gray-200">
        <Image
          className="rounded-xl"
          src="/consulting.png"
          objectFit="contain"
          height={500}
          width={500}
          alt="thumbnail"
          priority
        />
        <div className="flex flex-col gap-5 justify-center p-10">
          <Typography variant="large">We guide you through every step of the way on your AI journey, as this image illustrates. We start by setting clear objectives, assessing feasibility, and developing an overall strategy. We then help you define your AI concept, choose the right technology, and ensure smooth scaling of your operations. Each step is designed to optimize your business results. We can intervene independently at any stage or support you throughout the entire AI product cycle.</Typography>
        </div>
      </div>
    </div>
  );
};

export default Cycle;