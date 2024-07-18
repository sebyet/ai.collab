/* eslint-disable react/no-unescaped-entities */

'use client'
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { NewsletterForm } from "./components/NewsletterForm";
import { BubbleChat } from 'flowise-embed-react'

export default function Home() {
  return (
    <>
    <div className="flex flex-col mt-auto mb-auto gap-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-20">
        <Image
          className="mt-auto"
          unoptimized
          priority
          src={"/demo.png"}
          height={1000}
          width={1000}
          alt="thumbnail" />
        <div className="flex flex-col gap-5 justify-center">
          <Typography variant="heading1">
            Learn to use AI tools like ChatGPT to elevate your business operations.
          </Typography>
          <Typography className="mx-auto" variant="large">
            We bridge the gap between AI technologies and your business operations. Our personalised online coaching empowers you to understand, use and integrate AI into your daily tasks and strategic plans.
          </Typography>
          <div className="flex flex-row gap-3 flex-wrap">
            <span className="border-brand bg-background border rounded-full text-md text-brand p-3"><Typography variant="base">Boost productivity</Typography></span>
            <span className="border-brand bg-background border rounded-full text-brand p-3"><Typography variant="base">Explore new business opportunities</Typography></span>
            <span className="border-brand bg-background border rounded-full text-brand p-3"><Typography variant="base">Enhance creativity</Typography></span>
            <span className="border-brand bg-background border rounded-full text-brand p-3"><Typography variant="base">Improve decision making</Typography></span>
            <span className="border-brand bg-background border rounded-full text-brand p-3"><Typography variant="base">Decrease costs</Typography></span>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </div>
    </>
  );
}