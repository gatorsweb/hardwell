
import Image from 'next/image'
import React from 'react'


export default function Discover() {
  return (
    <div className=''>
    <div className='container'>
    <div className='section__heading'>
    <h1 className='my-[26px]'>Discover Our Work</h1>
    <p className='subheading'>Web designer is responsible for creating the <br/> design and layout of a website.</p>
    </div>
    </div>
    <div className='bg-primary py-[86px]'>
        <div className='container md:max-w-[80%] mx-auto'>
            <div className='grid grid-cols-2 gap-[24px] md:gap-[124px] md:grid-flow-row'>
                <div className='flex flex-col justify-center col-span-2 text-white md:col-span-1'>
                <div className='my-[17px]'>User Interface</div>
                <h2 className='text-[40px] font-[700] leading-[48px] my-[15px] text-white'>Creative Agency & Portfolio</h2>
                <p className='text-white'>Web designers plan, create and code internet sites and web pages, text with sounds.</p>
                </div>
                <div className='col-span-2 md:col-span-1'>
                <Image src="/ui__one.png" height={320}  width={433}   />
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}
