// app/components/VisionSection.tsx
import { Typography } from "@/components/ui/typography";

export default function VisionSection() {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-32 text-brand">
      <Typography className="font-medium text-pretty text-3xl md:text-6xl md:leading-[85px]" variant="paragraph">
        We specialize in building AI solutions that are strongly integrated into your business context. From AI assistants to complex applications, we can deliver robust and scalable solutions.      
      </Typography>
    </div>
  );
}
