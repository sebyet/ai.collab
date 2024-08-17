// app/components/VisionSection.tsx
import { Typography } from "@/components/ui/typography";

export default function VisionSection() {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-32 text-brand">
      <Typography className="font-medium text-pretty text-4xl md:text-6xl md:leading-[85px]" variant="paragraph">
        In a world where AI is revolutionizing industries, we believe in a balanced approach, bringing humans and AI together to create sustainable, transformative growth. 
      </Typography>
    </div>
  );
}
