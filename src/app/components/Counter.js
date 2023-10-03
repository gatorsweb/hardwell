"use client"
import React from 'react';
import CountUp from 'react-countup';

export default function Counter() {
  return (
    <div className='container section__margin'>
      <div className='grid grid-cols-3 gap-20 md:grid-flow-row'>
        <div className='flex flex-col items-center justify-center col-span-3 py-10 border rounded-md md:col-span-1'>
          <div className='flex text-[56px] text-[#9CD161] font-[700]'>
            <CountUp end={4.200} decimals={3} enableScrollSpy />
            <h1 className='text-[#9CD161] text-[40px]'>%</h1>
          </div>
          <div>
            <p className='text-[20px] text-[#9CD161] font-[400]'>Revenue</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center col-span-3 py-10 border rounded-md md:col-span-1 '>
          <div className='flex text-[56px] text-[#F5AD0D] font-[700]'>
            <CountUp end={73} enableScrollSpy />
            <h1 className='text-[#F5AD0D] text-[40px]'>%</h1>
          </div>
          <div>
            <p className='text-[20px] text-[#F5AD0D] font-[400]'>Projects</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center col-span-3 py-10 border rounded-md md:col-span-1'>
          <div className='flex text-[56px] text-[#FB690C] font-[700]'>
            <CountUp end={99.5} decimals={2} enableScrollSpy />
            <h1 className='text-[#FB690C] text-[40px]'>%</h1>
          </div>
          <div>
            <p className='text-[20px] text-[#FB690C] font-[400]'>Uptime</p>
          </div>
        </div>
      </div>
    </div>
  );
}
