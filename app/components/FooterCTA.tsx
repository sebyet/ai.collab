"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export function FooterCTA() {
  const pathname = usePathname();
  if (pathname.includes("talk-to-us")) return null;
  return (
    <div className="gap-10 border border-border rounded-xl text-center px-10 py-20 mt-10 md:mt-32 flex items-center flex-col bg-brand text-onBrand">
      <Typography variant="heading3" className="text-6xl lg:text-8xl font-medium text-pretty">
        Start with AI Now
        <br />
        Book a Free Call
      </Typography>
     
        <Link href="/talk-to-us">
          <Button size="lg" variant="accent">
            Book a Free Call
          </Button>
        </Link>
    
    </div>
  
  );
}