import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div className='container section__margin'>
        <div className='grid md:grid-flow-row gap-[79px] md:grid-cols-2'>
            <div className='relative col-span-2 md:col-span-1'>
                <Image src="/office.png" alt='office' height={568} width={568} className=''/>
                <div className='md:min-w-[303px] md:min-h-[225px] min-w-[200px] min-h-[163px]  rounded-[5px] bg-primary md:right-[-43px] right-[-14px] bottom-[-29px] absolute flex justify-center items-center flex-col'>
                    <div className='flex items-center'>
                    <h1 className='text-white md:text-[70px] text-[53px] font-[400]'>68%</h1>
                    <div className='h-[38px] w-[38px] bg-white flex items-center ml-2 justify-center rounded-full'>
                    <Image src="/toparrow.svg" height={24} width={24}  />
                    </div>
                    
                    </div>
                    <p className='text-white md:text-[24px] text-[20px] font-[200] md:leading-[36px] leading-[26px] mt-2'>Extra growth for <br/> your company.</p>
                    
                </div>
            </div>
            <div className='flex flex-col justify-center col-span-2 md:col-span-1'>
            <h4 className='uppercase text-secondary'>About</h4>
            <h1>Creating, Communicating & Delivering</h1>
            <p className='my-[28px]'>Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips.</p>
            <Link href={"/"}>Learn More</Link>
            </div>
        </div>
    </div>
  )
}
