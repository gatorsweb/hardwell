import React from 'react'

export default function Howwework() {
  return (
    <div className='relative mt-[220px] section__margin'>
    
      
    

        <div className='text__container bg-[#F3F7F5] md:min-h-[576px] top-10 z-30'>

        <div className='absolute w-[100%] flex justify-center top-[-20%]'>
        <video controls className='md:h-[400px] md:w-[848px]'>
        <source src="https://www.youtube.com/watch?v=tS7upsfuxmo" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>

        <div className='container'>
        <div className='grid grid-cols-2 content md:grid-flow-row md:max-w-[970px] m-auto md:pt-[380px] pt-[100px] pb-10'>
        <div className='col-span-2 md:col-span-1'> <h2 className='text-[40px] font-[700]'>How We Work</h2> </div>
        <div className='col-span-2 md:col-span-1'> <p className='text-[Black]'>Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips.</p> </div>
        </div>
      </div>
        </div>
    </div>
  )
}
