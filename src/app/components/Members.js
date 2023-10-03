"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Members() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className='container section__margin'>
        <div className='text-center'>
        <h1 className=''>Team Members</h1>
        <p className='subheading'>Combine text with sounds, pictures, graphics and video clips.</p>
        </div>
        <div className='members'>
        <Slider {...settings}>


      <div className=" w-[100%] flex items-center justify-center p-5">
        <Image src="/employee01.png" alt='employee' width={270} height={224} className='rounded-md' />
        <div className='mt-[25px]'>
        <h2 className='text-[24px] text-[#333] font-[700] leading-[32px]'>Bernarr Dominik</h2>
        <p className='leading-[32px]'>Founder</p>
        </div>
      </div>

      <div className="p-5">
        <Image src="/employee02.png" alt='employee' width={270} height={224} className='rounded-md' />
        <div className='mt-[25px]'>
        <h2 className='text-[24px] text-[#333] font-[700] leading-[32px]'>Bernarr Dominik</h2>
        <p className='leading-[32px]'>Account Manager</p>
        </div>
      </div>

      <div className="p-5">
        <Image src="/employee03.png" alt='employee' width={270} height={224} className='rounded-md' />
        <div className='mt-[25px]'>
        <h2 className='text-[24px] text-[#333] font-[700] leading-[32px]'>Bernarr Dominik</h2>
        <p className='leading-[32px]'>Designer</p>
        </div>
      </div>

      <div className="p-5">
        <Image src="/employee04.png" alt='employee' width={270} height={224} className='rounded-md' />
        <div className='mt-[25px]'>
        <h2 className='text-[24px] text-[#333] font-[700] leading-[32px]'>Bernarr Dominik</h2>
        <p className='leading-[32px]'>Developer</p>
        </div>
      </div>

      
      <div className="p-5">
        <Image src="/employee01.png" alt='employee' width={270} height={224} className='rounded-md' />
        <div className='mt-[25px]'>
        <h2 className='text-[24px] text-[#333] font-[700] leading-[32px]'>Bernarr Dominik</h2>
        <p className='leading-[32px]'>Founder</p>
        </div>
      </div>

      <div className="p-5">
        <Image src="/employee02.png" alt='employee' width={270} height={224} className='rounded-md' />
        <div className='mt-[25px]'>
        <h2 className='text-[24px] text-[#333] font-[700] leading-[32px]'>Bernarr Dominik</h2>
        <p className='leading-[32px]'>Account Manager</p>
        </div>
      </div>

      <div className="p-5">
        <Image src="/employee03.png" alt='employee' width={270} height={224} className='rounded-md' />
        <div className='mt-[25px]'>
        <h2 className='text-[24px] text-[#333] font-[700] leading-[32px]'>Bernarr Dominik</h2>
        <p className='leading-[32px]'>Designer</p>
        </div>
      </div>

      <div className="p-5">
        <Image src="/employee04.png" alt='employee' width={270} height={224} className='rounded-md' />
        <div className='mt-[25px]'>
        <h2 className='text-[24px] text-[#333] font-[700] leading-[32px]'>Bernarr Dominik</h2>
        <p className='leading-[32px]'>Developer</p>
        </div>
      </div>

      
      
      
    </Slider>
        </div>
    </div>
  )
}
