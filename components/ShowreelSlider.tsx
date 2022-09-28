import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Heading from "./reusable/Heading";
import clientImages from "./clientsImages";
import brandImages from "./brandImages";

// import required modules
import { EffectFade, Navigation, Autoplay } from "swiper";

function ShowreelSlider() {
  useEffect(() => {
    //
    // console.log(Array.from(clientImages))
  });
  return (
    <div
      id="clients-brands"
      className="text-white mx-auto text-center py-10 w-full bg-darkBlue"
    >
      <Heading title={"Clients & Brands"} />

      <p className="py-2 text-xl">{"We've worked with"}</p>

      <div className="space-y-10">
        {/* Brand Carousel */}
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 1,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay]}
          breakpoints={{
            510: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            750: {
              slidesPerView: 5,
              spaceBetween: 12,
            },
            900: {
              slidesPerView: 7,
              spaceBetween: 15,
            },
          }}
          className=""
        >
          {brandImages.map((img: any, idx: any) => (
            <SwiperSlide
              key={idx}
              className="self-center flex justify-center items-center"
            >
              <div className="w-40 p-4">
                <Image
                  key={idx}
                  src={img}
                  className="h-full w-full aspect-w-3 aspect-h-1"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Client Carousel */}
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 1,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay]}
          breakpoints={{
            510: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            750: {
              slidesPerView: 5,
              spaceBetween: 12,
            },
            900: {
              slidesPerView: 7,
              spaceBetween: 15,
            },
          }}
          className="flex justify-center"
        >
          {clientImages.map((img: any, idx: any) => (
            <SwiperSlide
              key={idx}
              className="self-center flex justify-center items-center"
            >
              <div className="w-40">
                <Image
                  key={idx}
                  src={img}
                  className="h-full w-full aspect-w-3 aspect-h-1"
                />
              </div>
            </SwiperSlide>
          ))}
          {/* {
                        // @ts-ignore
                        clientImages.map((img, idx) => {
                            <SwiperSlide>
                                <div className='self-center flex justify-center items-center'>

                                    <Image src={img} />

                                </div>
                            </SwiperSlide>
                        })
                    } */}
        </Swiper>
      </div>
    </div>
  );
}

export default ShowreelSlider;
