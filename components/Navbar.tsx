
'use client';

import React, { useEffect } from 'react';


const Navbar: React.FC = () => {

    return (
        <>
            <nav className="flex flex-col mx-auto max-w-4xl py-2 px-5 md:px-0">
                <ul className="flex justify-center items-center">
                    <li className='cursor pointer'>
                        <a className='flex flex-col hover:bg-muted -ml-3 px-3 py-2 rounded-lg md:flex-row gap-1 md:gap-2 md:items-center transition active:scale-[.95]' href='/'>
                            <span className='text-2xl text-onBackground font-bold'>Apprendrai</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;


