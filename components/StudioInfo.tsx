import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import Heading from './reusable/Heading'
import { Container } from '../components/reusable/Container'
import Link from 'next/link'
import SmallBtn from './reusable/SmallBtn'
import CTAButton from './reusable/CTAButton'
import studios from '../data/studioData'



export default function StudioInfo() {
    const horizontalScrollDiv = useRef<HTMLHeadingElement>(null)
    let [tabOrientation, setTabOrientation] = useState('horizontal')

    useEffect(() => {
        let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

        function onMediaQueryChange({ matches }: any) {
            setTabOrientation(matches ? 'vertical' : 'horizontal')
        }

        onMediaQueryChange(lgMediaQuery)
        lgMediaQuery.addEventListener('change', onMediaQueryChange)

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange)
        }
    }, [])

    return (
        <section
            id="facilities"
            aria-labelledby="studios-title"
            className="relative overflow-hidden text-white pt-20 pb-28 sm:py-16 bg-darkBlue"
        >
            <div className='absolute top-[20%] left-[1%] w-96 h-96 bg-blueGradient-1 rounded-full mix-blend-screen filter blur-[80px] animate-blob overflow-hidden' />
            {/* <div className='absolute top-1/3 right-[24%] w-80 h-80 bg-orange2 rounded-full mix-blend-screen filter blur-[100px] opacity-90 animate-blob' /> */}
            <div className='absolute top-[40%] left-[20%] w-96 h-96 animation-delay-2000 bg-blueGradient-2 rounded-full mix-blend-screen filter blur-[80px] animate-blob overflow-hidden' />
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-[42%]">
                <Image
                    src={backgroundImage}
                    alt=""
                    width={2245}
                    height={1636}
                    layout="fixed"
                    unoptimized
                />
            </div> */}
            <Container className="">

                <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">

                    <Heading title='The Studios' />

                </div>
                <Tab.Group
                    as="div"
                    className="mt-16 grid grid-cols-1 items-center justify-center place-items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0 mb-5"
                    vertical={tabOrientation === 'vertical'}
                >
                    {({ selectedIndex }) => (
                        <>
                            <div ref={horizontalScrollDiv} className="-mx-4 flex overflow-x-scroll pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5 scrollbar-hide">
                                <Tab.List className="relative z-10 flex space-x-4 whitespace-nowrap w-screen sm:w-auto px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal">
                                    {studios.map((feature, featureIndex) => (
                                        <div
                                            onClick={() => {
                                                horizontalScrollDiv.current?.scroll({
                                                    top: 0,
                                                    left: feature.mobScrollValue,
                                                    behavior: 'smooth'
                                                })
                                            }}
                                            key={feature.title}
                                            className={clsx(
                                                'group relative rounded-full py-1 px-4 lg:rounded-xl lg:p-6',
                                                {
                                                    'bg-gradient1 lg:bg-white/10':
                                                        selectedIndex === featureIndex,
                                                    'hover:bg-primary/10 lg:hover:bg-primary/5':
                                                        selectedIndex !== featureIndex,
                                                }
                                            )}
                                        >
                                            <h3>
                                                <Tab
                                                    className={clsx(
                                                        'font-display font-bold text-lg focus:outline-none [&:not(:focus-visible)]:focus:outline-none',
                                                        {
                                                            'text-white lg:text-white':
                                                                selectedIndex === featureIndex,
                                                            'text-white ':
                                                                selectedIndex !== featureIndex,
                                                        }
                                                    )}
                                                >
                                                    <span className="absolute inset-0 rounded-full lg:rounded-xl" />
                                                    {feature.title}
                                                </Tab>
                                            </h3>

                                            <div className='space-y-4'>
                                                <p
                                                    className={clsx('mt-2 hidden text-sm lg:block', {
                                                        ' text-white': selectedIndex === featureIndex,
                                                        'text-white ':
                                                            selectedIndex !== featureIndex,
                                                    })}
                                                >
                                                    {feature.description}
                                                </p>
                                                <Link href={feature.route}>

                                                    <span className='z-40 hidden relative w-28 lg:block text-xs cursor-pointer'>
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
                                </Tab.List>
                            </div>
                            <Tab.Panels className="lg:col-span-7 self-center">
                                {studios.map((feature) => (
                                    <Tab.Panel key={feature.title} unmount={false}>
                                        <div className="relative text-center sm:px-6 lg:hidden">
                                            <div className="absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-accent/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                                            <p className="relative mx-auto max-w-2xl text-base pt-8 sm:text-center">
                                                {feature.description}
                                            </p>
                                            <Link className='' href={feature.route}>
                                                {/* <button className='relative lg:hidden mx-auto text-xs bg-primary/70 text-white py-2 px-3 rounded-lg mt-3
                                                hover:bg-primary transition-colors duration-300 z-40'>
                                                    Read More
                                                </button> */}
                                                <span className='z-40 relative w-28 lg:hidden inline-block mt-4 mb-6 text-xs cursor-pointer w-'>
                                                    <SmallBtn>

                                                        <>
                                                            Read More
                                                        </>

                                                    </SmallBtn>
                                                </span>
                                            </Link>
                                        </div>
                                        {/* relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[70.8125rem] transition-all duration-300 cursor-pointer */}
                                        <div className="relative  self-center h-full w-full shadow-xl ">
                                            <Image
                                                src={feature.image}
                                                alt=""
                                                // layout="fill"
                                                className='rounded-xl'
                                                objectFit="contain"
                                                priority
                                                sizes=""
                                            // (min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem
                                            />
                                        </div>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </>
                    )}
                </Tab.Group>
                {/* <div className="flex justify-center max-w-2xl md:mx-auto md:text-center xl:max-w-none pt-5">

                    <CTAButton>
                        <a className='' href="tel:+918691972282">
                            <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            Book Now
                        </a>
                    </CTAButton>

                </div> */}
            </Container>
        </section>
    )
}

{/* <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
</svg>
Book Now */}