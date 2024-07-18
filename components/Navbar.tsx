
'use client';

import React, { useEffect } from 'react';
import Image from "next/image";

const Navbar: React.FC = () => {

    return (
        <>
            <nav className="flex flex-col mx-auto max-w-4xl py-5 md:px-0">
                <ul className="flex justify-center items-center">
                    <li className='cursor pointer'>
                        <a className='flex flex-col hover:bg-muted px-3 py-2 rounded-lg items-center transition active:scale-[.95]' href='/'>
                            <span className='flex flex-row gap-1 items-center'>
                                <Image
                                className="mt-auto"
                                unoptimized
                                priority
                                src={"/logo.png"}
                                height={30}
                                width={30}
                                alt="thumbnail" />
                                <span className='text-2xl text-onBackground font-bold'>apprendrai</span>
                            </span>
                            <span className='text-sm text-onBackground font-normal'>AI Coaching to superchage your skills</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;


