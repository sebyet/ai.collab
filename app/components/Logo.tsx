import * as React from "react";
import Image from "next/image";
const Logo = () => (
  <Image
    unoptimized
    width={200}
    height={200}
    src={"/logo.png"} 
    alt={""} />
);
export default Logo;
