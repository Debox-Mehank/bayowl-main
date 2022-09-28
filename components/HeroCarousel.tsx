
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

// import required modules
import { EffectFade, Navigation, Autoplay } from "swiper";

interface HeroSlide {
  title: string;
  desc: string;
  route: string;
}

const heroSlideList: HeroSlide[] = [
  {
    title: "Online Studio",
    desc: "Introducing bayowl.studio! From mixing & mastering to vocal cleanup & tuning, get all your audio requirements at just the click of a button from the comfort of your home!",
    route: "https://bayowl.studio"
  },
  {
    title: "Recording Studios",
    desc: "Three high-end professional recording studios for all your recording needs; whether a full band or just a simple cover, we've got you covered.",
    route: "/studio-services#Recordings"
  },
  {
    title: "Audio Post Production",
    desc: "From sound design to vocal tuning to mixing and mastering, our studios can provide any post production needs that you may have.",
    route: "/studio-services#Post_Production_Music"
  },
  {
    title: "Rehearsal Space",
    desc: "Equipped with a Mapex drum kit, Marshall, Fender & Hartke guitar amps, JBL speakers and a 16channel PreSonus mixer; this room can handle all your rehearsal, live streaming & perfomance needs!",
    route: "/studio-services#Rehearsals"
  },
  {
    title: "Indie Artist Specials!",
    desc: "Special rates for recording, mixing and mastering only for independent artists - enquire now!",
    route: "/pricing"
  },
]

function HeroCarousel() {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        autoplay={true}
        speed={500}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper relative text-white"
      >
        {heroSlideList.map((slide, idx) => (
          <SwiperSlide key={slide.title} className='h-screen relative'>

            <Link href={slide.route}>
              <span className="cursor-pointer">


                <div className={`bg-home-banner bg-hero-${idx + 1}`} />
                <div className='absolute top-1/2 md:top-1/2 px-8 md:px-20'>
                  <div className='md:w-1/2 space-y-3'>
                    <h3 className='text-2xl md:text-4xl font-bold'>{slide.title}</h3>
                    <p className='text-lg md:text-2xl'>{slide.desc}</p>
                  </div>
                </div>
              </span>
            </Link>


          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroCarousel