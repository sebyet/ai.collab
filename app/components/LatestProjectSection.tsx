// app/components/LatestProjectSection.tsx
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

export default function LatestProjectSection() {
  return (
    <div className="flex flex-col gap-10">
      <Typography variant="heading3">Latest Project</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
        <Image
          className="mt-auto rounded-xl"
          src="/demo.png"
          height={1500}
          width={1500}
          alt="thumbnail"
          priority
        />
        <div className="flex flex-col gap-5 my-auto border border-accent rounded-xl w-full h-full justify-center p-10">
          <Typography variant="heading3">AskCV.xyz - Get actionable insights from CVs.</Typography>
          <Typography variant="paragraph">Use our intelligent CV tool to benefit from advanced analysis and intelligent content recommendations. Speed up the selection process, save time and find the best talent for your company.</Typography>
          <Link href={"https://askcv.xyz"}>
            <Button className="w-full">Discover AskCV</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}