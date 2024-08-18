import { Typography } from "@/components/ui/typography";
import Benefit from "./components/Projects";
import Format from "./components/Format";

const data = [
  {
    title: "Discover",
    description: "We evaluate your organization's AI awareness level and talk about your needs.",
  },
  {
    title: "Act",
    description: "We act in three areas: teaching, integrating, or building AI solutions.",
  },
  {
    title: "Refine",
    description: "We engage in collaborative sessions to refine and improve the implemented AI initiatives.",
  },
];

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
        <Format data={data}/>
    </div>
  );
}