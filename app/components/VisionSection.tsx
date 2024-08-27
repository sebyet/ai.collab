// app/components/VisionSection.tsx
import { Typography } from "@/components/ui/typography";

export default function VisionSection() {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-32 text-brand">
      <Typography className="font-medium text-pretty text-4xl md:text-6xl md:leading-[85px]" variant="paragraph">
        We believe that by applying AI at key points in the customer journey, you can boost satisfaction, deepen engagement, and increase conversion rates, turning each interaction into a meaningful connection.
      </Typography>
    </div>
  );
}
