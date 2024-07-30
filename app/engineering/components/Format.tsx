import { Card, CardHeader } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { Blocks, ClipboardList, Lightbulb, ScanSearch } from 'lucide-react';
import React from 'react';

const data = [
  {
    title: "Findings",
    description: "We evaluate your organization's AI awareness level and talk about your needs.",
  },
  {
    title: "Recommendations",
    description: "We act in three areas: teaching, integrating, or building AI solutions.",
  },
  {
    title: "Discussions",
    description: "We engage in collaborative sessions to refine and improve the implemented AI initiatives.",
  },
];


const Format = () => {
  return (
    <div className="flex flex-col gap-10 max-w-6xl mx-auto">
      <Typography variant="heading3">Delivered in a format that works</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((card, index) => (
          <Card className="border border-brand rounded-xl p-10 min-h-[500px] flex flex-col" key={index}>
              {index === 0 && <ScanSearch className='h-20 w-20 text-accent' />}
              {index === 2 && <Blocks className='h-20 w-20 text-accent' />}
              <div className={index == 1 ? "flex flex-col gap-3" : 'mt-auto flex flex-col gap-3'}>
                <Typography variant='heading4'>{card.title}</Typography>
                <Typography variant="paragraph">{card.description}</Typography>
              </div>
              {index === 1 && <Lightbulb className='mt-auto h-20 w-20 text-accent' />}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Format;