// app/components/VisionSection.tsx
import { Typography } from "@/components/ui/typography";

export default function VisionSection() {
  return (
    <div className="flex flex-col gap-10">
      <Typography className="text-center font-medium text-4xl md:text-6xl md:leading-[85px]" variant="paragraph">
        We see a future where humans continually adapt to the evolution of AI, enabling strong cooperation that supercharges skills and unlocks new possibilities for innovation and growth.
      </Typography>
    </div>
  );
}
