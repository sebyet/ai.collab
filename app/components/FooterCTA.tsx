"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { CalEmbed } from "../talk-to-us/components/CalEmbed";
import { useRef } from "react";

export function FooterCTA() {
  const call = useRef(null);
  return (
    <div id="call" ref={call} className="gap-10 border border-border rounded-xl text-center px-10 py-20 mt-10 md:mt-32 flex items-center flex-col bg-brand text-onBrand">
      <Typography variant="heading3" className="text-6xl lg:text-8xl font-medium text-pretty">
        Missing AI Capacity?
        <br />
        Book a Free Call
      </Typography>
      <CalEmbed calLink="sebyet/30min" />
    </div>
  
  );
}