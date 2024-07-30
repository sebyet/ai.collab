// app/components/VisionSection.tsx
import { Typography } from "@/components/ui/typography";

export default function VisionSection() {
  return (
    <div className="flex flex-col gap-10">
      <Typography variant="heading3">Vision</Typography>
      <div className="flex flex-col gap-3">
        <Typography className="text-lg lg:leading-loose" variant="blockquote">
        « We see a future where humans continually adapt to the evolution of AI, enabling strong cooperation that supercharges skills and unlocks unlimited possibilities for innovation and growth. »
        </Typography>
        <Typography className="font-semibold italic" variant="large">Sébastien</Typography>
      </div>
    </div>
  );
}
