import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Autoplay } from "swiper";

import I1 from "../assets/homescroll/bayowl-studios-homescroll-01.jpg"
import I2 from "../assets/homescroll/bayowl-studios-homescroll-02.jpg"
import I3 from "../assets/homescroll/bayowl-studios-homescroll-03.jpg"
import I4 from "../assets/homescroll/bayowl-studios-homescroll-04.jpg"
import I5 from "../assets/homescroll/bayowl-studios-homescroll-05.jpg"
import I6 from "../assets/homescroll/bayowl-studios-homescroll-06.jpg"
import I7 from "../assets/homescroll/bayowl-studios-homescroll-07.jpg"
import I8 from "../assets/homescroll/bayowl-studios-homescroll-08.jpg"
import I9 from "../assets/homescroll/bayowl-studios-homescroll-09.jpg"
import I10 from "../assets/homescroll/bayowl-studios-homescroll-10.jpg"
import I11 from "../assets/homescroll/bayowl-studios-homescroll-11.jpg"
import I12 from "../assets/homescroll/bayowl-studios-homescroll-12.jpg"
import I13 from "../assets/homescroll/bayowl-studios-homescroll-13.jpg"
import I14 from "../assets/homescroll/bayowl-studios-homescroll-14.jpg"
import I15 from "../assets/homescroll/bayowl-studios-homescroll-15.jpg"
import I16 from "../assets/homescroll/bayowl-studios-homescroll-16.jpg"
import I17 from "../assets/homescroll/bayowl-studios-homescroll-17.jpg"
import I18 from "../assets/homescroll/bayowl-studios-homescroll-18.jpg"
import I19 from "../assets/homescroll/bayowl-studios-homescroll-19.jpg"
import I20 from "../assets/homescroll/bayowl-studios-homescroll-20.jpg"
import I21 from "../assets/homescroll/bayowl-studios-homescroll-21.jpg"
import I22 from "../assets/homescroll/bayowl-studios-homescroll-22.jpg"
import I23 from "../assets/homescroll/bayowl-studios-homescroll-23.jpg"
import I24 from "../assets/homescroll/bayowl-studios-homescroll-24.jpg"
import I25 from "../assets/homescroll/bayowl-studios-homescroll-25.jpg"

const imgs = [
    I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11, I12, I13, I14, I15, I16, I17, I18, I19, I20, I21, I22, I23, I24, I25
]

function AutoPlayCarousel() {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
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
                    },
                    750: {
                        slidesPerView: 5,
                    },
                    900: {
                        slidesPerView: 8,
                    },

                }}
            >
                {imgs.map((img, idx) => (
                    <SwiperSlide key={idx} className=''>
                        <div className='h-full -mb-2'>

                            <Image key={idx} src={img} className="h-full w-full" height={400} width={400} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default AutoPlayCarousel