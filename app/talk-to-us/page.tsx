import { Typography } from "@/components/ui/typography";
import { Zap, Search, Lightbulb, Brain } from 'lucide-react';
import { NewsletterForm } from "./components/NewsletterForm";
import { CalEmbed } from "./components/CalEmbed";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-20">
      <div className="flex flex-col gap-3 text-brand">
          <Typography className="max-w-3xl mx-auto text-center" variant="heading2">
            Book a Free Call
          </Typography>
          <Typography className="text-center mx-auto max-w-xl" variant="large">
            Whether you just want to have a chat or explore a potential collaboration, we are happy to help!  
          </Typography>
        </div>
      <CalEmbed calLink="sebyet/30min" />
      
 
      <Separator  title="test"  />
  
      <div className="w-full md:w-[500px] mx-auto flex flex-col gap-5">
        <Typography className="text-center mx-auto max-w-xl" variant="large">
          If you prefer to be recontacted, please leave us your e-mail address.
        </Typography>
        <NewsletterForm/>
      </div>
    </div>
  );
}