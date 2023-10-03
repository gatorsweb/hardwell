import Image from 'next/image'
import React from 'react'

const ServicesItems = [
  {
    icon: "/service__icon__01.png",
    title: "Product Management",
    description: "Stay on top of your task lists and stay in touch with what's happening"
  },
  {
    icon: "/service__icon__02.png",
    title: "Product Management",
    description: "Stay on top of your task lists and stay in touch with what's happening"
  },
  {
    icon: "/services__icon__03.png",
    title: "Product Management",
    description: "Stay on top of your task lists and stay in touch with what's happening"
  },
]


export default function Services() {
  return (
    <div className='container section__margin'>
        <div className='flex flex-col items-center section__heading'>
        <h1>Explore Service</h1>
        <h3 className='subheading md:max-w-[470px]'>The sky was cloudless and of a deep dark blue spectacle before us was indeed sublime.</h3>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-flow-row'>
        
        {
          ServicesItems.map((item)=>(
            <div key={item} className='md:max-w-[293px]'>
            <div className='flex flex-col items-center justify-center col-span-3 text-center md:items-start md:text-left services__box md:col-span-1'>
            <Image src={item.icon} height={78} width={77}/>
            <h3> {item.title} </h3>
            <p>{item.description}</p>
          </div>
          </div>
          ))
          
        }
        
        </div>
        
        
        
    </div>
  )
}
