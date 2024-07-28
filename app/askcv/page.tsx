/* eslint-disable react/no-unescaped-entities */

'use client'
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { BubbleChat } from 'flowise-embed-react'

export default function Home() {
  return (
    <>
    <div className="flex flex-col mb-auto gap-10">

        <div className="flex flex-col gap-5 justify-center max-w-3xl mx-auto text-center">
          <Typography variant="heading2">
            Get actionable insights from CV's.
          </Typography>
          <Typography className="mx-auto max-w-xl" variant="large">
            Accelerate recruitment with our AI CV assistant delivering deep analysis, resumé and qualification suggestions.
          </Typography>
        
        
        </div>

    </div>
    </>
  );
}