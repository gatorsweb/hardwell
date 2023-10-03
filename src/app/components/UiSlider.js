"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


export default function UiSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
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
    <div className="container">
    
    <Slider {...settings}>
      <div className="p-10">
        <Image src="/ui__two.png" width={575} height={472} className="shadow-2xl shadow-[#fed7aa]" />
      </div>
      <div className="p-10">
        <Image src="/ui__three.png" width={575} height={472} className="shadow-2xl shadow-[#fed7aa]" />
      </div>
      <div className="p-10">
        <Image src="/ui__two.png" width={575} height={472} className="shadow-2xl shadow-[#fed7aa]" />
      </div>
      <div className="p-10">
        <Image src="/ui__three.png" width={575} height={472} className="shadow-2xl shadow-[#fed7aa]" />
      </div>
      <div className="p-10">
        <Image src="/ui__two.png" width={575} height={472} className="shadow-2xl shadow-[#fed7aa]" />
      </div>
      <div className="p-10">
        <Image src="/ui__three.png" width={575} height={472} className="shadow-2xl shadow-[#fed7aa]" />
      </div>
      <div className="p-10">
        <Image src="/ui__two.png" width={575} height={472} className="shadow-2xl shadow-[#fed7aa]" />
      </div>
      <div className="p-10">
        <Image src="/ui__three.png" width={575} height={472} className="shadow-2xl shadow-[#fed7aa]" />
      </div>
      
    </Slider>
    </div>
  );
}
