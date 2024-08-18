import React from 'react';
import { Typography } from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';

const aiQuestions: string[] = [
  "Which AI tools or solutions are most relevant for our company's specific needs?",
  "How can AI drive tangible business value for our organization?",
  "What are the potential risks and ethical considerations of adopting AI?",
  "How will AI impact our existing workforce and organizational structure?",
  "What's our strategy for staying competitive as AI rapidly evolves?",
];

const Questions = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-20">
      <Typography variant="heading3">We can help you answer the following questions</Typography>
      <div className="flex flex-col gap-10 bg-muted p-10 rounded-xl">
        {aiQuestions.map((question, index) => (
        
            <div key={index} className='flex flex-col gap-10'>
              <Typography className="text-3xl" variant={"large"}>{question}</Typography>
              {index < aiQuestions.length - 1 && <Separator/>}
            </div>
            
        ))}
      </div>
    </div>
  );
};

export default Questions;
