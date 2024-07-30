"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Twitter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { links } from "@/components/Navbar";
import { Typography } from "@/components/ui/typography";

export function Footer() {
  const pathname = usePathname();

  if (pathname.includes("pitch")) {
    return null;
  }

  return (
    <footer className="max-w-6xl mx-auto border-t-[1px] border-border pt-10 md:pt-16">
      <div className="flex justify-between items-center border-border border-b-[1px] pb-10 md:pb-16 mb-12">
          <span className='text-5xl text-onBackground font-bold'>apprendrai</span> 
          <Typography variant="large">
            Humans & AI, Together, Forward.
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row w-full mb-10 md:mb-20">
          <div className="flex flex-row space-y-8 md:space-y-0 md:flex-row md:w-6/12 justify-between leading-8">
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
              <Button size="link" variant="link">
                <Linkedin/>
              </Button>
            </div>
            <div className="flex items-center">
              <Button size="default" variant="accent">
                Talk to us
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}