/* eslint-disable react/no-unescaped-entities */

'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { Mail, Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col mt-auto gap-10 px-5 md:px-0 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <Image
          className="mt-auto"
          unoptimized
          priority
          src={"/demo.png"}
          height={1000}
          width={1000}
          alt="thumbnail"
        />
        <div className="flex flex-col gap-5 justify-center">
          <Typography variant="heading1">
            Unlock a better version of yourself.
          </Typography>
          <Typography className="mx-auto" variant="large">
            We create custom learning journeys to help managers integrate AI tools & prompting techniques effectively in their daily work.
          </Typography>
          <div className="flex flex-row gap-3 flex-wrap">
            <span className="border-brand bg-background border rounded-full text-md text-brand p-3"><Typography variant="base">Boost your productivity</Typography></span>
            <span className="border-brand bg-background border rounded-full text-brand p-3"><Typography variant="base">Explore new business opportunities</Typography></span>
            <span className="border-brand bg-background border rounded-full text-brand p-3"><Typography variant="base">Superchage your work</Typography></span>
            <span className="border-brand bg-background border rounded-full text-brand p-3"><Typography variant="base">Get the best from yourself</Typography></span>
          </div>
        
          <Input placeholder="sebastien.payet@gmail.com" onClearClick={() => {}} startIcon={<Mail />} type='text'/>
          <Button className="w-fit" variant="default">Get more informations</Button>
      </div>


      </div>
    </div>
  );
}