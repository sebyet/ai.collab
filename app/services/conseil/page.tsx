import { Typography } from "@/components/ui/typography";
import Benefit from "../components/Benefit";
import Format from "../components/Format";

export default function Page() {
  return (
    <div className="flex flex-col mt-10 md:mt-20">
        <div className="flex flex-col gap-3 py-20 bg-gray-100 text-brand rounded-xl">
          <Typography className="max-w-4xl mx-auto text-center" variant="heading2">
            Bridge the gap between AI technologies and your business. 
          </Typography>
          <Typography className="text-center mx-auto max-w-xl" variant="large">
            We help you understand, use and integrate AI into your daily tasks and strategic plans.
          </Typography>
        </div>
        <Benefit/>
        <Format data={[]}/>
    </div>
  );
}