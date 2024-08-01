import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { data } from '@/data/consulting';
import React from 'react';

const Benefit = () => {
  return (
    <div className="flex flex-col gap-10 py-20">
      <Typography variant="heading3">How can we help you?</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
        {data.map((card, index) => (
          <Card className=" bg-muted rounded-xl flex flex-col p-4 justify-between gap-20" key={index}>
            <CardHeader className='gap-5'>
              <div className="text-xl bg-onBrand p-5 w-fit rounded-xl">{card.icon}</div>
              <div className='w-full flex flex-col gap-3'>
                <Typography variant='heading4'>{card.title}</Typography>
                <Typography variant="paragraph">{card.description}</Typography>
              </div>
            </CardHeader>
            <CardContent>
              <Typography className="bg-brand text-onBrand p-3 rounded-xl flex gap-1 w-fit" variant="paragraph">{card.key}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Benefit;