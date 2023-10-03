import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#111] mt-36 py-20'>
        <div className='container'>

            <div className='grid grid-cols-4 md:grid-flow-row'>

                <div className='flex items-center col-span-4 footer__logo md:col-span-1'>
                    <Image src="/WD.png" alt='footer-logo' width={65.045} height={46.138} />
                </div>


                <div className='col-span-4 footer__menu md:col-span-1'>
                <h5 className='uppercase text-[#adadad] tracking-widest mb-5'>Menu</h5>
                <ul className='text-white  text-[16px] leading-[32px] font-Epilogue footer__menu__item'>
                    <li className='transition duration-300 hover:text-primary'><Link href={"/"}>About</Link></li>
                    <li className='transition duration-300 hover:text-primary'><Link href={"/"}>Portfolio</Link></li>
                    <li className='transition duration-300 hover:text-primary'><Link href={"/"}>Blog</Link></li>
                    <li className='transition duration-300 hover:text-primary'><Link href={"/"}>Contact</Link></li>
                </ul>
                </div>


                <div className='col-span-4 footer__menu md:col-span-1'>
                <h5 className='uppercase text-[#adadad] tracking-widest mb-5'>Service</h5>
                <ul className='text-white text-[16px] leading-[32px] font-Epilogue footer__menu__item'>
                    <li className='transition duration-300 hover:text-primary'><Link href={"/"}>User Experience</Link></li>
                    <li className='transition duration-300 hover:text-primary'><Link href={"/"}>User Interface</Link></li>
                    <li className='transition duration-300 hover:text-primary'><Link href={"/"}>Logotype</Link></li>
                    <li className='transition duration-300 hover:text-primary'><Link href={"/"}>See More</Link></li>
                </ul>
                </div>

                <div className='flex items-center justify-end col-span-4 gap-3 md:col-span-1'>
                    <Link href={"/"}>
                    <div className='facebook bg-[#242424] hover:bg-primary  transition duration-500 h-[48.03px] w-[48.03px] rounded-full flex justify-center items-center'>
                       <Image src="/facebook.svg" alt='facebook' width={15.38} height={9.34} />
                    </div>
                    </Link>
                    
                    <Link href={"/"}>
                    <div className='facebook bg-[#242424] hover:bg-primary  transition duration-500 h-[48.03px] w-[48.03px] rounded-full flex justify-center items-center'>
                       <Image src="/twitter.svg" alt='instagram' width={16.011} height={12.5} />
                    </div>
                    </Link>
                    
                    <Link href={"/"}>
                    <div className='facebook bg-[#242424] hover:bg-primary  transition duration-500 h-[48.03px] w-[48.03px] rounded-full flex justify-center items-center'>
                       <Image src="/instagram.svg" alt='instagram' width={16.01} height={15.379} />
                    </div>
                    </Link>
                    
                </div>


            </div>
            <div className='grid grid-cols-2 copyright md:grid-flow-row mt-[114px]'>
            <div className='col-span-2 md:col-span-1'> <p className='text-[#878787]'>Copyright © 2020 Laaqiq. All Rights Reserved.</p> </div>
            <div className='flex justify-end gap-6 text-white'>
            <Link href={"/"} className='hover:text-primary'>Terms of Use</Link>
            <Link href={"/"}  className='hover:text-primary'>Privacy Policy</Link>
            </div>
            </div>
        </div>
    </div>
  )
}
