/* eslint-disable react/no-unescaped-entities */

'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { Mail, Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 px-5 md:px-0">
      <div className="grid grid-cols-2 gap-20">
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
          <span className="border-brand bg-background border rounded-full text-md text-brand p-3">Boost your productivity</span>
          <span className="border-brand bg-background border rounded-full text-brand p-3">Explore new business opportunities</span>
          <span className="border-brand bg-background border rounded-full text-brand p-3">Superchage your work</span>
          <span className="border-brand bg-background border rounded-full text-brand p-3">Get the best from yourself</span>
        </div>
        <Input onClearClick={() => {}} startIcon={<Mail />} type='text'/>
        <Button className="w-fit" variant="default">Get more informations</Button>
      </div>


      </div>
    </main>
  );
}