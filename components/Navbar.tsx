
'use client';

import React, { useEffect } from 'react';


const Navbar: React.FC = () => {

    return (
        <>
            <nav className="flex flex-col mx-auto max-w-4xl py-5 md:px-0">
                <ul className="flex justify-center items-center">
                    <li className='cursor pointer'>
                        <a className='flex flex-col hover:bg-muted px-3 py-2 rounded-lg items-center transition active:scale-[.95]' href='/'>
                            <span className='text-2xl text-onBackground font-bold'>apprendrai</span>
                            <span className='text-sm text-onBackground font-normal'>AI Courses to Superchage your Skills</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;


