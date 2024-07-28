"use client";

import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export function FooterCTA() {
  const pathname = usePathname();

  if (pathname.includes("pitch")) {
    return null;
  }

  return (
    <div className=" max-w-6xl mx-auto border border-border rounded-2xl container text-center px-4 py-14 md:px-24 md:py-20 mb-32 mt-24 flex items-center flex-col bg-brand text-onBrand">
      <span className="text-6xl	md:text-8xl font-medium">
        Better Products
        <br />
        One Audit at a Time.
      </span>
      <p className="mt-6">
        We provide you with greater insight into your digital product experiences,
        <br />
        taking over the boring testing tasks, and allowing you to focus on what you love to do instead.
      </p>

      <div className="mt-10 md:mb-8">
        <div className="flex items-center space-x-5">
          <Link href="/talk-to-us">
            <Button size="lg" variant="accent">
              Talk to us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}