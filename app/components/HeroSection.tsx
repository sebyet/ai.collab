import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col gap-3 md:hidden">
        <AspectRatio ratio={16 / 9} className="bg-gray-50 rounded-xl mt-10">
          <Image
            unoptimized
            priority
            src="/home.jpg"
            alt="AI Solutions"
            fill
            className="rounded-xl object-cover"
          />
        </AspectRatio>
        <div className="flex flex-col gap-3">
          <Typography className="text-brand" variant="heading1">
            AI Solutions that pushes your business forward
          </Typography>
          <Link href="/talk-to-us">
            <Button className="w-full text-wrap" size="lg" variant="accent">
              An AI Project in Mind? Book a Free Call
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <AspectRatio ratio={16 / 9} className="bg-gray-50 rounded-xl mt-10">
          <div className="relative rounded-xl h-full">
            <Image
              unoptimized
              priority
              src="/home.jpg"
              alt="AI Solutions"
              fill
              className="rounded-xl object-cover"
            />
            <div className="relative z-10 bg-black bg-opacity-50 rounded-xl p-5 md:p-10 h-full flex flex-col gap-5 justify-end">
              <Typography className="max-w-5xl text-onBrand" variant="heading1">
                AI solutions that push your business forward
              </Typography>
              <Link href="/#call">
                <Button className="w-fit" size="lg" variant="accent">
                An AI Project in Mind? Book a Free Call
                </Button>
              </Link>
            </div>
          </div>
        </AspectRatio>
      </div>
    </>
  );
}