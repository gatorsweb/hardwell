"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
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
    <div className='container'>
    <div className='text-center'>
        <h2>Latest From Blog</h2>
    </div>
    <div className=''>



    <Slider {...settings}>
    <div className="p-10">
    <div className='card max-w-[350px] bg-white rounded-md border border-[#c2c2c2]'>
    <div>
        <Image src="/blog01.png" height={250} width={350} className='rounded-tl-md rounded-tr-md' />
    </div>
    <div className='p-4'>
    <div className='py-3'>
        <h4 className='font-[700] text-[20px] tracking-normal leading-[-0.66px] font-[DM Sans] mb-[15px]'>Build prototypes with thousands of components.</h4>
        <p className='font-[DM Sans]'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.</p>
    </div>
    <div className='mb-2'>
        <Link href={"/"} className='text-[#F5AD0D] text-[18px] underline underline-offset-4'>Read more</Link>
    </div>
    </div>
    
        </div>
    </div>

    <div className="p-10">
    <div className='card max-w-[350px] bg-white rounded-md border border-[#c2c2c2]'>
    <div>
        <Image src="/blog02.png" height={250} width={350} className='rounded-tl-md rounded-tr-md' />
    </div>
    <div className='p-4'>
    <div className='py-3'>
        <h4 className='font-[700] text-[20px] tracking-normal leading-[-0.66px] font-[DM Sans] mb-[15px]'>Build prototypes with thousands of components.</h4>
        <p className='font-[DM Sans]'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.</p>
    </div>
    <div className='mb-2'>
        <Link href={"/"} className='text-[#F5AD0D] text-[18px] underline underline-offset-4'>Read more</Link>
    </div>
    </div>
    
        </div>
    </div>

    <div className="p-10">
    <div className='card max-w-[350px] bg-white rounded-md border border-[#c2c2c2]'>
    <div>
        <Image src="/blog03.png" height={250} width={350} className='rounded-tl-md rounded-tr-md' />
    </div>
    <div className='p-4'>
    <div className='py-3'>
        <h4 className='font-[700] text-[20px] tracking-normal leading-[-0.66px] font-[DM Sans] mb-[15px]'>Build prototypes with thousands of components.</h4>
        <p className='font-[DM Sans]'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.</p>
    </div>
    <div className='mb-2'>
        <Link href={"/"} className='text-[#AADF39] text-[18px] underline underline-offset-4'>Read more</Link>
    </div>
    </div>
    
        </div>
    </div>

    <div className="p-10">
    <div className='card max-w-[350px] bg-white rounded-md border border-[#c2c2c2]'>
    <div>
        <Image src="/blog01.png" height={250} width={350} className='rounded-tl-md rounded-tr-md' />
    </div>
    <div className='p-4'>
    <div className='py-3'>
        <h4 className='font-[700] text-[20px] tracking-normal leading-[-0.66px] font-[DM Sans] mb-[15px]'>Build prototypes with thousands of components.</h4>
        <p className='font-[DM Sans]'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.</p>
    </div>
    <div className='mb-2'>
        <Link href={"/"} className='text-[#FB690C] text-[18px] underline underline-offset-4'>Read more</Link>
    </div>
    </div>
    
        </div>
    </div>
   
    
  </Slider>



       

       

        
    </div>
    </div>
  )
}
