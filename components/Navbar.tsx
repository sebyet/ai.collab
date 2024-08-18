
'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Logo from '@/app/components/Logo';
export const linksServices = [
    {
        title: "Discovery",
        path: "/services/discovery",
        name: "AI Discovery Services",
    },
    {
        title: "Coaching",
        path: "/services/coaching",
        name: "AI Coaching Services",
    },
    {
        title: "Conseil",
        path: "/services/conseil",
        name: "AI Conseil Services",
    },
    {
        title: "Development",
        path: "/services/development",
        name: "AI Developmennt Services",
    },
  ];

  export const links = [
    {
      title: "Our Story",
      path: "/story",
      name: "story",
    },
  ];

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const lastPath = pathname.split("/").filter(Boolean).pop() || '';

    return (
        <>
            <nav className="flex flex-col py-5 px-0">
                <ul className="flex w-full items-center justify-between">
                    <Link href={"/"}>
                        <li className='cursor pointer active:scale-[.95] transition-all'>
                            <Logo/>
                        </li>
                    </Link>
                    <ul className="gap-5 hidden md:flex mx-3 items-center bg-muted rounded-xl px-5 py-3">
                        {linksServices.map(({ path, name, title }) => {
                            const isActive = path.includes(lastPath) && pathname !== "/";

                            return (
                                <li key={name}>
                                    <Link href={path}>
                                        <Button size="link" variant="link" className={cn(isActive && "text-accent hover:text-accentVariant")}>{title}</Button>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="gap-5 hidden md:flex mx-3 items-center">
                    {links.map(({ path, name, title }) => {
                        const isActive = path.includes(lastPath);

                        return (
                            <li key={name}>
                                <Link href={path}>
                                    <Button size="link" variant="link" className={cn(isActive && "text-accent hover:text-accentVariant")}>{title}</Button>
                                </Link>
                            </li>
                        );
                    })}
                     <Link href="/talk-to-us">
                        <Button variant="accent">Talk to us</Button>
                    </Link>
           
                    </ul>
                   
              
                </ul>
            </nav>
        </>
    );
};

export default Navbar;


