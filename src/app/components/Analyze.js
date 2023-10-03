import React from 'react';
import Image from 'next/image';

export default function Analyze() {
  return (
    <div className='container'>
      <div className='grid grid-cols-2 md:grid-flow-row'>
        <div className='flex flex-col justify-center col-span-2 md:col-span-1'>
          <h1>Analyze & Improve</h1>
          <p>Web designer is responsible for creating the design and layout of a website or web pages. It can mean working on a brand new website.</p>
        
          <ul className='text-[#333] list-none mt-[16px] analyze-list'>
            <li>Well Planned Architecture</li>
            <li>Accessible to All Users</li>
            <li>Mobile Compatibility</li>
          </ul>
        </div>
        <div className='col-span-2 md:col-span-1'>
          <Image src="/analyze.png" alt='analyze' height={408} width={544}/>
        </div>
      </div>
    </div>
  );
}
