import type { Metadata } from "next";
import { Cutive, Inter, Roboto_Mono, Noto_Serif, Domine } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { FooterCTA } from "./components/FooterCTA";
import { Footer } from "./components/Footer";
import { ViewTransitions } from "next-view-transitions";

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
  title: "apprendrai",
  description: "Ai courses to supercharge your skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${domine.variable} ${roboto_mono.variable}`}>
        <body className="bg-background flex flex-col min-h-screen overflow-x-hidden text-pretty container">
          <Navbar />
          <main className="flex-1 flex flex-col overflow-hidden md:overflow-visible pt-10">
            {children} 
            <Toaster />  
          </main>
          <div className="container mx-auto px-4 overflow-hidden md:overflow-visible">
            <FooterCTA/>
            <Footer/>  
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
