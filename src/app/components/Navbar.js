'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';  // Imported SiMenu from react-icons/si

const MenuItem = [
    {
        label: "Home",
        url: "/"
    },
    {
        label: "About Us",
        url: "/about"
    },
    {
        label: "Services",
        url: "/services"
    },
    {
        label: "Project",
        url: "/projects"
    },
    {
        label: "Contact Us",
        url: "/contact"
    },
];

export default function Navbar() {
    const [mobileNav, setMobileNav] = useState(null)

    const HandleMobileNav = () =>{
        setMobileNav(!mobileNav)
    }

    return (
        <div>
            <nav>
                <div className='container max-w-[1200px] mx-auto'>
                    
                    <div className='flex items-center justify-between py-6 navContainer'>
                    <div className='block mobile__menu md:hidden' onClick={HandleMobileNav}>
                            <FaBars />
                        </div>
                        <div className='Logo'>
                            <Link href={"/"}>
                                <Image
                                    src="/Logo.svg"
                                    alt='logo'
                                    width={139}
                                    height={25}
                                />
                            </Link>
                        </div>
                        
                        <div className=' main__nav md:block'>
                            <ul className={`md:flex md:space-x-8 absolute md:left-auto ${mobileNav? 'left-0  duration-300': 'left-[-100%]' }  top-[99px] md:top-auto bg-white h-[100%] md:h-auto  w-[50%] md:w-auto pl-5 pr-5 md:p-0 z-10 md:bg-inherit drop-shadow-md md:relative md:text-[16px] text-[18px] divide-y md:divide-none font-[400]`}>
                                {MenuItem.map((item, index) => (
                                    <li key={index} className='py-3 pl-2 md:pl-0 md:py-0'>
                                        <Link href={item.url}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='getStarted__btn'>
                            <button className='btn__primary text-white bg-[#0E1017] rounded-[5px] py-[12px] px-[20px] text-[18px]'>Get Started</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
