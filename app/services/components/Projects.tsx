import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { data } from '@/data/consulting';
import React from 'react';

const Projects = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-20">
      <Typography variant="heading3">What can we develop for you?</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
        {data.map((card, index) => (
          <Card className=" bg-muted rounded-xl flex flex-col p-4 justify-center gap-10" key={index}>
            <CardHeader className='gap-5'>
              <div className='w-full flex flex-col items-center justify-center gap-5'>
                <Typography className='text-center text-brand' variant='large'>{card.title}</Typography>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;