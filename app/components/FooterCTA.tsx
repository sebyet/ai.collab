"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export function FooterCTA() {
  const pathname = usePathname();

  return (
    <div className="max-w-6xl gap-10 mx-auto border border-border rounded-xl text-center py-14 md:px-24 md:py-20 mb-32 mt-24 flex items-center flex-col bg-brand text-onBrand">
      <Typography variant="heading3" className="text-6xl lg:text-8xl font-medium">
        Unlock with AI,
        <br />
        A Better Yourself.
      </Typography>
      {!pathname.includes("talk-to-us") &&
        <Link href="/talk-to-us">
          <Button size="lg" variant="accent">
            Talk to us
          </Button>
        </Link>
      }
    </div>
  );
}