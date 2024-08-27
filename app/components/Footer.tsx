"use client";

import { usePathname } from "next/navigation";
import { Linkedin, Twitter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { linksServices } from "@/components/Navbar";
import { Typography } from "@/components/ui/typography";
import { Link } from "next-view-transitions";

export function Footer() {
  const pathname = usePathname();

  if (pathname.includes("pitch")) {
    return null;
  }

  return (
    <footer className="border-t-[1px] border-border pt-10 md:pt-16 mt-10 md:mt-20">
      <p className="text-xs text-[#B3B3B2] dark:text-[#3E3E3E] mb-12">
          Cal.com® is a registered trademark by Cal.com, Inc. All rights
          reserved. Apple.com® is a registered trademark by Apple.com, Inc. All
          rights reserved. Discord.com® is a registered trademark by
          Discord.com, Inc. All rights reserved. Github.com® is a registered
          trademark by Github.com, Inc. All rights reserved. Notion.com® is a
          registered trademark by Notion.com, Inc. All rights reserved.
        </p>
    </footer>
  );
}