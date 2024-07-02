import type { Metadata } from "next";
import { Cutive, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const cutive = Cutive({
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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cutive.variable} ${roboto_mono.variable}`}>
        <body className="bg-background min-h-screen overflow-x-hidden text-pretty">
          <Navbar />
          <main className="container mx-auto px-4 overflow-hidden md:overflow-visible pt-5">
            {children}   
          </main>
          <div className="container mx-auto px-4 overflow-hidden md:overflow-visible pb-5">
          <footer className="flex justify-end items-center">
              <Button className="flex flex-row items-center justify-center" size="link" variant="link">
                <Linkedin className="pr-1 h-6"/> a sebyet company
              </Button> 
            </footer>
          </div>
        </body>
      </html>
  );
}
