// app/components/Hero.tsx
import { Typography } from "@/components/ui/typography";
import { data } from "@/data/home";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-20">
      <Typography className="max-w-5xl" variant="heading1">
        AI <Link href="/services"><span className="underline cursor-pointer hover:text-brandVariant">services</span></Link> and <Link href="/products"><span className="underline cursor-pointer hover:text-brandVariant">products</span></Link> that,
        <br />
        bring Humans & AI, Together, 
        <br />
        Forward.
      </Typography>
      <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
        {data.map((card, index) => (
          <Card className="border border-brand rounded-xl flex flex-col p-4 justify-between" key={index}>
            <CardHeader className='gap-5'>
              <div className='w-full flex flex-col gap-3'>
                <Typography variant='heading4'>{card.title}</Typography>
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
  );
}