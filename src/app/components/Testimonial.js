import Image from 'next/image'
import React from 'react'

export default function Testimonial() {
  return (
    <div className='container section__margin'>
    <div className='mb-8 text-center'>
    <h2>Our Testimonials</h2>
    <p className='subheading'>Read some awesome feedback from our students all over the world. We are giving the best to our students</p>
    </div>
    <div className='grid grid-cols-3 gap-6 md:grid-flow-row'>
    <div className='border border-[#E0DADA] pl-[26px] pr-[26px] pt-[52px] pb-[52px] rounded-md col-span-3 md:col-span-1'>
        <p className='text-[#69697B]'>Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
        <div className='flex mt-[29px]'>
            <Image src="/client.svg" width={58} height={58} alt='client'  />
            <div className='ml-2'>
            <h3>BILLY ROOT</h3>
            <h5>Torest</h5>
            </div>
        </div>
    </div>
    <div className='border border-[#E0DADA] pl-[26px] pr-[26px] pt-[52px] pb-[52px] rounded-md col-span-3 md:col-span-1'>
        <p className='text-[#69697B]'>Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
        <div className='flex mt-[29px]'>
            <Image src="/client.svg" width={58} height={58} alt='client'  />
            <div className='ml-2'>
            <h3>BILLY ROOT</h3>
            <h5>Torest</h5>
            </div>
        </div>
    </div>
    <div className='border border-[#E0DADA] pl-[26px] pr-[26px] pt-[52px] pb-[52px] rounded-md col-span-3 md:col-span-1'>
        <p className='text-[#69697B]'>Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
        <div className='flex mt-[29px]'>
            <Image src="/client.svg" width={58} height={58} alt='client'  />
            <div className='ml-2'>
            <h3>BILLY ROOT</h3>
            <h5>Torest</h5>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
