// app/components/LatestProjectSection.tsx
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

export default function LatestProjectSection() {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-20">
      <Typography variant="heading3">Latest Project</Typography>
      <div className="flex flex-col md:flex-row rounded-xl bg-gray-50">
        <Image
          className="rounded-xl"
          src="/demo.png"
          objectFit="contain"
          height={500}
          width={1000}
          alt="thumbnail"
          priority
        />
        <div className="flex flex-col gap-5 justify-center p-10">
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