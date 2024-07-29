/* eslint-disable react/no-unescaped-entities */

'use client'
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { data, data2 } from "@/data/home";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import RotatingLogo from "./components/RotatingLogo";

export default function Home() {
  return (
    <>
    <div className="flex flex-col max-w-6xl mx-auto gap-20 relative px-0">
      <div className="absolute right-0 top-0">
      <RotatingLogo/>
      </div>
      
      <div className="flex flex-col gap-10">
        <Typography className="max-w-4xl text-brand" variant="heading1">
          AI <Link href={"/consulting"}><span className="underline cursor-pointer hover:text-brandVariant">consulting</span></Link> and <Link href={"/consulting"}><span className="underline cursor-pointer hover:text-brandVariant">products</span></Link> that,
          <br />
          brings Humans & AI, Together, 
          <br />
          Forward.
        </Typography>
        <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
          {data.map((card, index) => (
            <Card className="border border-brand rounded-3xl flex flex-col p-4 justify-between" key={index}>
              <CardHeader className='gap-5'>
                <div className='w-full flex flex-col gap-3'>
                  <Typography className="text-brand" variant='heading4'>{card.title}</Typography>
                  <Typography variant="paragraph">{card.description}</Typography>
                </div>
              </CardHeader>
              <CardContent>
                <Link href={card.href}>
                  <Button className="w-full" variant={index === 0 ? "default" : "outline"}>{card.callToAction}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Typography variant="heading2">Vision</Typography>
        <div className=" bg-muted p-10 rounded-xl flex flex-col gap-3">
          <Typography className="text-lg" variant="blockquote">
            "We don't just implement AI—we forge partnerships between human ingenuity and artificial intelligence. 
            Our consulting services and products are designed with one goal in mind: to propel both people and technology towards a brighter future.
            We believe that when humans and AI work in harmony, the possibilities are limitless. Join us in shaping a world where innovation knows no bounds."
          </Typography>
          <Typography className="font-semibold ml-auto" variant="large">Sébastien</Typography>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Typography variant="heading2">Latest Project</Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          <Image
          className="mt-auto"
          unoptimized
          priority
          src={"/demo.png"}
          height={1500}
          width={1500}
          alt="thumbnail" />
          <div className="flex flex-col gap-5 my-auto">
            <Typography variant="heading3">Problem</Typography>
            <Typography variant="paragraph">Born in La Réunion, my journey into the digital world started with a focus on marketing and sales.<br/> A few years later, my interest in digital product development transformed into a passion for creating and solving problems with great user experiences.</Typography>
            <Button className="w-fit" >Discover</Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}