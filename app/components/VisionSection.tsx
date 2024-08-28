// app/components/VisionSection.tsx
import { Typography } from "@/components/ui/typography";

export default function VisionSection() {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-32 text-brand">
      <Typography className="font-medium text-pretty text-3xl md:text-6xl md:leading-[85px]" variant="paragraph">
        We specialize in both low-code and custom-coded solutions. Using tools like Voiceflow, FlowiseAI, and Make.com, we enable rapid development. For complex needs, we employ advanced JavaScript frameworks and libraries like LangChain and Langbase to deliver scalable AI solutions.
      </Typography>
    </div>
  );
}
