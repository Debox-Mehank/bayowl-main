import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Banner from '../../components/reusable/Banner'
import studios from '../../data/studioData'
import Image from 'next/image'
import Img from "../../public/Services/1recording.jpg"
import Link from 'next/link'
import Heading from '../../components/reusable/Heading'
import SmallBtn from '../../components/reusable/SmallBtn'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'
SwiperCore.use([Navigation])

function StudioA() {

    const router = useRouter()
    const [activeGear, setactiveGear] = useState("Microphones")
    const studioData = studios.filter(studio => studio.route === router.pathname)[0]
    const otherPages = studios.filter(studio => studio.route !== router.pathname)


    return (
        <div className='bg-darkBlue text-white'>
            <Banner title={studioData.title} />
            <div className="relative">
                <div className='absolute overflow-hidden animation-delay-2000 top-[15%] left-[10%] w-24 md:w-96 h-96 bg-blueGradient-1 rounded-full mix-blend-screen filter blur-[80px] opacity-80 animate-blob -z-0' />
                <div className='absolute overflow-hidden animation-delay-4000 top-[20%] left-[30%] w-24 md:w-80 h-80 bg-orange2 rounded-full mix-blend-screen filter blur-[80px] opacity-80 animate-blob -z-0' />
                <div className='absolute overflow-hidden bottom-[1%] left-[5%] w-24 md:w-96 h-96 bg-blueGradient-1 rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob -z-0' />
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 place-items-center">
                    <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                        <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                            {/* <img
                                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                                                alt="Customer profile user interface"
                                            /> */}
                            <Image className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none' src={studioData.image} />
                        </div>
                    </div>
                    <div className="px-4 w-11/12 py-10 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                        <div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-extrabold tracking-tight text-primary">
                                    {studioData.title}
                                </h2>
                                <div className='text-lg mt-6 space-y-8'>
                                    {studioData.content()}
                                    <button className='flex justify-center items-center gap-2.5 text-white bg-gradient3/80 text-2xl font-bold py-2 px-4 rounded-2xl  hover:-translate-y-1 duration-300 transition-all hover:shadow-2xl hover:bg-primary/30'>
                                        <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Conditionally Rendering this section if the page has gear */}
            {studioData.hasGear &&
                <div className='bg-gradient3/30 py-10 '>
                    <div className='mx-auto max-w-7xl space-y-10 w-11/12'>
                        <Heading title='Gear' />
                        <div className='flex flex-col md:flex-row gap-4'>
                            {studioData.gear.map(gear => (
                                <button className={`py-2 px-2 md:py-2.5 md:px-4 rounded-lg  text-md lg:text-lg font-bold hover:bg-gradient3/30 transition-colors duration-300 shadow-2xl shadow-white/10
                                ${activeGear === gear.type ? "bg-gradient3/80" : "bg-transparent"}`}
                                    key={gear.type}
                                    onClick={() => {
                                        setactiveGear(gear.type)
                                    }}
                                >
                                    {gear.type}
                                </button>
                            ))}
                        </div>

                        <div className='space-y-8'>

                            {
                                // Fetching the same array of gear as the selected state and mapping through it.
                                // @ts-ignore
                                studioData.gear.filter(gear => gear.type === activeGear)[0].subCat.map(subType => (
                                    // @ts-ignore
                                    <div key={subType.list}>
                                        {/* @ts-ignore */}
                                        <h5 className='text-xl font-bold pb-5' >{subType.title}</h5>
                                        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm md:text-lg'>
                                            {/* @ts-ignore */}
                                            {subType.list.map(gear => (
                                                <li key={gear}>{gear}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                            }



                        </div>

                    </div>
                </div>
            }
            <div className='bg-acc py-10'>
                <div>
                    <Heading title="Other Rooms" />
                </div>
                <div className='flex flex-wrap justify-center gap-10  py-10'>
                    {otherPages.map((studio, idx) => (
                        <div key={studio.title} className="max-w-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient3/40 rounded-lg text-center">
                            <Link href={studio.route}>
                                {/* <img className="rounded-t-lg" src={Swiper1} alt="" /> */}
                                <Image className='cursor-pointer rounded-t-lg' src={studio.image} />
                            </Link>
                            <div className="p-5 relative">
                                <Link href={studio.route}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{studio.title}</h5>
                                </Link>

                                <p className="mb-3 font-normal text-white">
                                    {studio.shortdesc}
                                </p>
                                <Link href={studio.route}>
                                    <span className='z-40'>
                                        <SmallBtn>
                                            <>
                                                Read More
                                            </>
                                        </SmallBtn>

                                    </span>

                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StudioA