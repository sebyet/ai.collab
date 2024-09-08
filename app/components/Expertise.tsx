// app/components/VisionSection.tsx
import { Typography } from "@/components/ui/typography";

export default function VisionSection() {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-32 text-brand">
      <Typography className="font-medium text-pretty text-xl md:text-6xl md:leading-[85px]" variant="paragraph">
        We have a strong business background coupled with key software engineering skills, enabling us to identify the areas where AI can bring the most value to your business and implement the optimal solution.
      </Typography>
    </div>
  );
}
