import { Typography } from "@/components/ui/typography";
import { Zap, Search, Lightbulb, Brain } from 'lucide-react';
import { NewsletterForm } from "./components/NewsletterForm";

export default function Page() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto gap-10 relative px-0">
       <div className="flex flex-col gap-3">
          <Typography className="max-w-3xl mx-auto text-center" variant="heading2">
            Lets think about AI together!
          </Typography>
          <Typography className="text-center mx-auto max-w-xl" variant="large">
            Whether you just want to have a chat or explore a potential collaboration, do not hesitate to get in touch with us.         
          </Typography>
        </div>
        <NewsletterForm/>
    </div>
  );
}