"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Twitter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { links } from "@/components/Navbar";

export function Footer() {
  const pathname = usePathname();

  if (pathname.includes("pitch")) {
    return null;
  }

  return (
    <footer className="border-t-[1px] border-border pt-10 md:pt-16">
        <div className="flex justify-between items-center border-border border-b-[1px] pb-10 md:pb-16 mb-12">
      
          <span className="font-bold text-2xl text-right">
            Unlock Digital Product Improvements.
          </span>
        </div>

        <div className="flex flex-col md:flex-row w-full mb-10 md:mb-20">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:w-6/12 justify-between leading-8">
            <div>
              <ul>
                {links.map(link => (
                  <li key={link.name} >
                    <Link href={link.path}><Button size="link" variant="link">{link.title}</Button></Link>
                  </li>
                ))}
              </ul>
            </div>
                  
        </div>

            

          <div className="md:w-6/12 flex mt-8 md:mt-0 md:justify-end">
            <div className="flex justify-between md:items-end flex-col space-y-14">
              <div className="flex items-center">
                <Link href="/talk-to-us">
                    <Button size='default' variant="accent"> Request an audit</Button>
                </Link>
              </div>
              <div className="md:mr-0 mt-auto mr-auto flex flex-row gap-5 items-center">
                <Button size="link" variant="link">
                  <Twitter/>
                </Button>
                <Button size="link" variant="link">
                  <Linkedin/>
                </Button>
              </div>
            </div>
          </div>
        </div>

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