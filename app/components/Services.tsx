import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  alignItems: string;
}

function ServiceCard({
  imageSrc,
  imageAlt,
  title,
  description,
  alignItems,
}: ServiceCardProps) {
  return (
    <>
      <div className="flex flex-col gap-3 md:hidden">
        <AspectRatio ratio={16 / 9} className="bg-gray-50 rounded-xl md:hidden">
          <Image
            unoptimized
            priority
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-xl object-cover"
          />
        </AspectRatio>
        <div className="w-full text-brand bg-background rounded-xl flex flex-col gap-3">
          <Typography variant="heading3">{title}</Typography>
          <Typography variant="paragraph">{description}</Typography>
          <Link className="w-full" href="/talk-to-us">
            <Button className="w-full" variant="default">
              Learn more via a free call
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <AspectRatio ratio={16 / 9} className="bg-gray-50 rounded-xl">
          <Image
            unoptimized
            priority
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-xl object-cover"
          />
          <div
            className={`flex flex-col justify-end ${alignItems} relative z-10 bg-black bg-opacity-50 rounded-xl p-5 md:p-10 h-full`}
          >
            <div className="w-full text-brand bg-background rounded-xl p-5 flex flex-col gap-3">
              <Typography variant="heading3">{title}</Typography>
              <Typography variant="paragraph">{description}</Typography>
              <Link href="/talk-to-us">
                <Button className="w-fit" variant="default">
                  Learn more via a free call
                </Button>
              </Link>
            </div>
          </div>
        </AspectRatio>
      </div>
    </>
  );
}

export default function Services() {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-32">
      <Typography variant="heading3">Services</Typography>
      <div className="flex flex-col gap-10">
        <ServiceCard 
          imageSrc="./personalised.jpg"
          imageAlt="Personalized customer experience"
          title="Personalise customer experience"
          description="Our AI solution analyzes customer data in real-time to create personalized experiences that truly connect with your customers. Whether it's recommending products, offering customized services, or creating targeted marketing visuals, we ensure each interaction is perfectly suited to their needs."
          alignItems="items-start"
        />
        <ServiceCard 
          imageSrc="./integration.jpg"
          imageAlt="Strategic AI integration"
          title="Integrate AI strategically"
          description="Enhancing customer satisfaction with AI is not just about using the latest tools—it's about applying them where they matter most. To truly make an impact, we help you strategically integrate AI into the areas of your business that directly influence customer experiences."
          alignItems="items-end"
        />
        <ServiceCard 
          imageSrc="./automation.jpg"
          imageAlt="Automated customer interactions and support"
          title="Automate customer interactions & support"
          description="In today's global market, your customers are always online, and we are too. Our AI chatbots and virtual assistants are available 24/7, making sure every question gets answered, no matter the time zone."
          alignItems="items-start"
        />
      </div>
    </div>
  );
}