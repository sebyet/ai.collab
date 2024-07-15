import type { Metadata } from "next";
import { Cutive, Inter, Roboto_Mono, Noto_Serif, Domine } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

const domine = Domine({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: "400"
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
export const metadata: Metadata = {
  title: "Apprendrai",
  description: "Ai courses to supercharge your skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${domine.variable} ${roboto_mono.variable}`}>
        <body className="bg-background flex flex-col min-h-screen overflow-x-hidden text-pretty">
          <Navbar />
          <main className="container flex-1 flex flex-col mx-auto px-4 xs:pt-0 overflow-hidden md:overflow-visible sm:pt-5">
            {children} 
            <Toaster />  
          </main>
          <div className="container mx-auto px-4 overflow-hidden md:overflow-visible pt-5 pb-5">
            <footer className="flex justify-end items-center flex-wrap">
              <Button className="flex flex-row items-center justify-center text-wrap" size="link" variant="link">
                <a target="blank" href="https://sebyet.com">Sébastien Payet</a>
              </Button> 
            </footer>
          </div>
        </body>
      </html>
  );
}
