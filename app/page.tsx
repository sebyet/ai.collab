/* eslint-disable react/no-unescaped-entities */

'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { Mail, Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col mt-auto mb-auto gap-10 px-5 md:px-0">
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
            AI tools like ChatGTP have multiple benefits when they are used effectively. Take part in a personalized learning path and close the gap between these revolutionary technologies and your business operations.
          </Typography>
          <div className="flex flex-row gap-3 flex-wrap">
            <span className="border-brand bg-background border rounded-full text-md text-brand p-3"><Typography variant="base">Boost productivity</Typography></span>
            <span className="border-brand bg-background border rounded-full text-brand p-3"><Typography variant="base">Explore new business opportunities</Typography></span>
            <span className="border-brand bg-background border rounded-full text-brand p-3"><Typography variant="base">Enhance Creativity</Typography></span>
            <span className="border-brand bg-background border rounded-full text-brand p-3"><Typography variant="base">Improve Decision Making</Typography></span>
            <span className="border-brand bg-background border rounded-full text-brand p-3"><Typography variant="base">Decrease Costs</Typography></span>
          </div>
          <Input placeholder="sebastien.payet@gmail.com" onClearClick={() => {}} startIcon={<Mail />} type='text'/>
          <Button className="w-fit" variant="default">Get more informations</Button>
      </div>


      </div>
    </div>
  );
}