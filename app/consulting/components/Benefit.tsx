import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { data } from '@/data/consulting';
import React from 'react';

const Benefit = () => {
  return (
    <div className="flex flex-col gap-10 max-w-6xl mx-auto">
      <div className="flex flex-col gap-5">
       
          <Typography variant="heading3">
            Why team love audits
          </Typography>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((card, index) => (
          <Card className=" bg-muted rounded-3xl flex flex-col p-4 justify-between gap-20" key={index}>
            <CardHeader className='gap-5'>
              <div className='w-full flex flex-col gap-3'>
                <Typography variant='heading4'>{card.title}</Typography>
                <Typography variant="paragraph">{card.description}</Typography>
              </div>
            </CardHeader>
            <CardContent>
              <Typography className="bg-brand text-onBrand font-semibold p-3 rounded-md flex gap-1 w-fit" variant="paragraph">{card.key}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Benefit;