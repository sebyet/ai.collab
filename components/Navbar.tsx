
'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
export const links = [
    {
      title: "Consulting",
      path: "/consulting",
      name: "consulting",
    },
    {
      title: "Products",
      path: "/products",
      name: "products",
    },
    {
      title: "Story",
      path: "/story",
      name: "story",
    },
  ];

const Navbar: React.FC = () => {
    const pathname = usePathname();

  const lastPath = `/${pathname.split("/").pop()}`;

    return (
        <>
            <nav className="flex flex-col py-5 px-0">
                <ul className="flex w-full justify-between">
                    <li className='cursor pointer'>
                        <a className='flex flex-col hover:bg-muted py-2 rounded-lg items-center transition active:scale-[.95]' href='/'>    
                            <span className='text-2xl text-onBackground font-bold'>apprendrai</span> 
                        </a>
                    </li>
                    <ul className="gap-5 hidden md:flex mx-3 items-center">
                    {links.map(({ path, name, title }) => {
                        const isActive = path === lastPath;

                        return (
                            <li key={name}>
                                <Link href={path}>
                                    <Button size="link" variant="link" className={cn(isActive && "text-accent hover:text-accentVariant")}>{title}</Button>
                                </Link>
                            </li>
                        );
                    })}
                    <Link href="/talk-to-us">
                     <Button size='sm' variant="accent">Talk to us</Button>
                </Link>
                </ul>
              
                </ul>
            </nav>
        </>
    );
};

export default Navbar;


