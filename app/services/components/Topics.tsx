import React from 'react';
import { Typography } from '@/components/ui/typography';

const aiTopics: string[] = [
  "Crafting Effective Prompts for AI Tools",
  "Leveraging AI for Creative Writing",
  "Power Your Business Intelligence with AI",
  "Enhance Risk Assessment with AI",
  "Generate Ideas with AI-Powered Creativity",
  "Solve Problems Creatively with AI",
  "Streamline Document Analysis with AI",
  "Summarize Data Efficiently Using AI",
  "Forecast Financials with AI Tools",
  "Segment Customers Effectively with AI"
];

const Topics = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-20">
      <Typography variant="heading3">What could you learn with us?</Typography>
      <div className="relative overflow-hidden">
        <div className="flex animate-carousel">
          {aiTopics.map((topic, index) => (
            <div key={index} className="flex-none w-fit bg-brand rounded-xl px-5 py-3 text-onBrand mx-2">
              <Typography variant='large'>{topic}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
