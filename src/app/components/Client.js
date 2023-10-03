import Image from 'next/image'
import React from 'react'

export default function Client() {
  return (
    <div className='container section__margin'>
    <div className='text-center mb-7'>
    <h3>Our Famous Clients</h3>
    </div>
    <div className='md:max-w-[920px] m-auto'>
    <div className='grid justify-center grid-cols-5 gap-6 md:grid-flow-row'>
        <div className='flex justify-center col-span-5 md:col-span-1'>
        <Image src="/clientlogo01.png" height={42} width={155} />
        </div>
        <div className='flex justify-center col-span-5 md:col-span-1'>
        <Image src="/clientlogo02.png" height={42} width={147} />
        </div>
        <div className='flex justify-center col-span-5 md:col-span-1'>
        <Image src="/clientlogo03.png" height={40} width={108} />
        </div>
        <div className='flex justify-center col-span-5 md:col-span-1'>
        <Image src="/clientlogo04.png" height={47} width={119} />
        </div>
        <div className='flex justify-center col-span-5 md:col-span-1'>
        <Image src="/clientlogo05.png" height={38} width={86} />
        </div>
    </div>
    </div>
    
    

    </div>
  )
}
