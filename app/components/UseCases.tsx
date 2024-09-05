import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Typography } from "@/components/ui/typography"
import Image from "next/image"
import { Link } from "next-view-transitions"
import { Button } from "@/components/ui/button"

const items = [
  { target: "For Marketing", text: "AI-powered sentiment analysis scans social media to gauge public opinion on campaigns, enabling real-time strategy adjustments." },
  { target: "For Sales", text: "AI chatbots engage potential clients 24/7, qualifying leads and scheduling meetings with representatives for promising opportunities." },
  { target: "For Human Resources", text: "AI algorithms analyze employee data to predict turnover risks, allowing proactive interventions to improve retention rates." },
  { target: "For Business Owners", text: "AI-driven forecasting tools process company data to predict performance trends, informing strategic business decisions." },
  { target: "For Customer Relations", text: "AI voice analysis detects customer emotions during calls, providing agents with real-time suggestions to enhance satisfaction." },
  { target: "For Product Development", text: "AI simulations rapidly test product ideas, accelerating innovation cycles and reducing physical prototyping time and costs." },
  { target: "For Supply Chain", text: "AI-powered inventory management optimizes stock levels, reducing carrying costs while ensuring product availability for customers." },
  { target: "For Financial Services", text: "AI algorithms analyze transaction patterns to provide personalized financial advice and product recommendations to clients." },
  { target: "For IT Services", text: "AI-driven network monitoring detects and resolves potential issues before they impact business operations, ensuring system reliability." },
  { target: "For Training Services", text: "AI creates personalized learning paths for employees, adapting course content based on individual progress and job requirements." }
]
export default function UseCases() {

  return (
    <Carousel className="w-full max-w-full mx-auto flex flex-col gap-10 mt-10 md:mt-32">
        <div className="flex items-center justify-between">
            <Typography variant="heading3">Use Cases</Typography>
            <div className="flex space-x-3">
            <CarouselPrevious />
            <CarouselNext />
            </div>
        </div>
        <CarouselContent>
            {items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                <CardContent className="bg-gray-200 flex flex-col min-h-[600px] rounded-xl p-10">
                    <Typography className="text-brand" variant="large">{item.target}</Typography>
                    <div className="w-full h-fit mt-auto text-brand bg-white rounded-xl p-5 flex flex-col">
                        <Typography variant="paragraph">{item.text}</Typography>
                    </div>
                </CardContent>
                </Card>
            </CarouselItem>
            ))}
        </CarouselContent>
    </Carousel>
  )
}