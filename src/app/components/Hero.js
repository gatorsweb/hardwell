import Image from 'next/image'
import React from 'react'
import guy from './../../../public/guy.png'
import right_arrow from './../../../public/right_arrow.svg'

export default function Hero() {
  return (
    <div className='bg-[#F2F2F2] pt-11'>
        <div className='container'>
        <div className='grid grid-cols-2 gap-4 md:grid-flow-row'>
            <div className='relative flex flex-col justify-center col-span-2 md:col-span-1 '>
            <h3 className='text-black text-[25px] border-l-2 border-primary leading-5 pl-3 mb-6'>Ninad Creative Agency</h3>
            <h1 className='text-[#0E1017] md:text-[55px] md:leading-tight leading-[52px] text-[42px]'>Creative <span className='text-primary'> Mind</span> With Creative People</h1>
            <p className='text-[18px] text-[#7B7D84] mt-5 mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when at its layout.</p>
            <div className='absolute md:right-0 right-[111px] arrow'>
            <Image
            src="/arrow.svg" alt='arrow' height={110.035} width={110.035}
            />
            </div>
            <div>
            <button className='flex items-center rounded-md bg-primary py-[14px] px-[30px] text-white'> Read-More
            <span>
            <Image src={right_arrow} alt='arrow' height={16} width={16} className='ml-2'/>
            </span>
            </button>
            </div>
            
            </div>
            <div className='relative flex items-center justify-center col-span-2 md:col-span-1'>
            <Image  src="/stars.png" about='stars' height={45} width={69} className='absolute bottom-0 left-0'/>
            <Image src="/stroke.png" height={68} width={74} className='absolute md:right-[150px] right-[35px] top-[6rem] md:top-40'/>
            <Image
            src={guy} alt='guy' height={608} width={444}
            />
            
            </div>
        </div>
        </div>
    </div>
  )
}
