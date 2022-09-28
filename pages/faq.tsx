import type { NextPage } from 'next'
import Link from 'next/link'

import Banner from '../components/reusable/Banner'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Heading from '../components/reusable/Heading'

const faqs = [
    {
        question: "How many Recording Rooms does Bay Owl have?",
        answer() {
            return (
                <>
                    <div>
                        {"Studios A & B each have their own control room with an attached isolated recording room. "}
                    </div>
                    <div>
                        {"Studio C, our third and most versatile space, is a stand alone recording room!"}
                    </div>
                </>
            )
        }
    },
    {
        question: "How many hours is a typical booking session for the Recording Rooms?",
        answer() {
            return (
                <>
                    <h5>{"The length of a typical session differs based on your requirement, but from our experience these our the usual averages:"}</h5>
                    <ul className='flex flex-col gap-3 mt-3 mx-auto w-11/12'>
                        <li>{"Vocals: 2-4 hours"}</li>
                        <li>{"Drums: 6-10 hours"}</li>
                        <li>{"Other Instruments: 1-4 hours"}</li>
                        <li>{"Post production: 8-12 hours"}</li>
                        <li>{"Rehearsals: 4-8 hours"}</li>
                    </ul>
                </>
            )
        }
    },
    {
        question: "What kind of Eqipment does each Recording Room have?",
        answer() {
            return (
                <>
                    <h5>{"Both controls rooms have the API Box II Recording Console."}</h5>
                    <h5>Check out our <Link href={"/#gear"}><span className='text-primary cursor-pointer'>gear</span></Link> page for a full list!</h5>
                </>
            )
        }
    },
    {
        question: "How large is the Live Room?",
        answer() {
            return (
                <div className='space-y-3'>
                    <h5>{"We have three live rooms!"}</h5>
                    <div>
                        <span className='font-bold'> Studio A </span> – Can comfortably fit a full sized drum kit and is a great room for close micing drums. Our most common use of this room is for vocals and solo instrument over dubs.
                    </div>
                    <div>
                        <span className='font-bold'> Studio B </span> – Smaller live room than Studio A, great for solo instruments. Can comfortably fit 4-5 vocalists in together for a small choir. Our most common use of this room is for post-production foley, voice overs, vocals and solo acoustic guitar.
                    </div>
                    <div>
                        <span className='font-bold'> Studios C </span> – The largest of our live rooms, and completely standalone. Comfortably fit a full five piece band in to record live together. Great room for drums. Our most common use of this room is for full band recordings and group rehearsals, the largest of which was an 18 piece ensemble.
                    </div>
                </div>
            )
        }
    },
    {
        question: "How many Engineers does Bay Owl Have?",
        answer() {
            return (
                <div className='space-y-3'>

                    <div>
                        {"We have two senior engineers, each of who have over a decade of experience!"}
                    </div>
                    <div>
                        {"We also have several freelance engineers on our roster that we work with if our senior engineers aren’t free."}
                    </div>
                </div>
            )
        }
    },
    {
        question: "Can we bring our own Engineers?",
        answer() {
            return (
                <div className='space-y-3'>

                    <div>
                        {"Yes, we do allow freelance engineers to work at our studio, but due to the high end nature of our studio equipment, we do not allow freelance assistants, inexperienced and junior engineers to conduct sessions."}
                    </div>
                    <div>
                        {"Please inform us beforehand if you will be bringing your own engineer."}
                    </div>
                </div>
            )
        }
    },
    {
        question: "What are the events that the Live Room can handle?",
        answer() {
            return (
                <div className='space-y-5'>
                    <h5>{"We have three live rooms!"}</h5>
                    <ul className='space-y-3 list-disc mx-auto w-11/12'>
                        <li>Livestreams</li>
                        <li>Video and photo shoots</li>
                        <li>Small workshops</li>
                        <li>Private classes</li>
                        <li>Client presentations</li>
                        <li>{"Auditions & casting"}</li>
                        <li>{"Composers looking to setup a base for long term projects such as background scores."}</li>
                    </ul>
                </div>
            )
        }
    },
    {
        question: "Does the Live Room have its own equipment?",
        answer() {
            return (
                <div className='space-y-3'>

                    <div>
                        {"Studios A & B have their own headphone amps and televisions to enable ADR and post sync."}
                    </div>
                    <div>
                        {"The Studio C live room comes fully equipped with a JBL PA System, PreSonus mixer, Mapex drumkit, and Marshal, Fender and Hartke amps."}
                    </div>
                </div>
            )
        }
    },
    {
        question: "Is it possible to pay for a session by credit card?",
        answer() {
            return (
                <div className='space-y-3'>
                    <div>
                        {"No, we do not accept credit cards at this point, but we do accept Google Pay."}
                    </div>
                </div>
            )
        }
    },
    {
        question: "What are your cancellation charges?",
        answer() {
            return (
                <div className='space-y-3'>
                    <div>
                        {"Cancellation charges are applicable in full for both studio and engineer for confirmed bookings."}
                    </div>
                </div>
            )
        }
    },
    {
        question: "Is Bay Owl fully COVID compliant?",
        answer() {
            return (
                <div className='space-y-3'>
                    <h1 className='font-bold'>
                        {"Yes."}
                    </h1>
                    <ul className='space-y-3 list-disc mx-auto w-11/12'>
                        <li>All rooms are sanitised and cleaned before and after every session. </li>
                        <li>Temperature check for everyone before entering.</li>
                        <li>No mask, no entry.</li>
                    </ul>
                </div>
            )
        }
    },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const FAQ: NextPage = () => {
    return (
        <div className="bg-darkBlue text-white">

            <Banner title='Contact' />

            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <Heading title='Frequently Asked Questions' />

                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6 ">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                                <span className="font-medium text-white">{faq.question}</span>
                                                <span className="ml-6 h-7 flex items-center">
                                                    <ChevronDownIcon
                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 duration-200 transition-transform')}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-4 pr-12 transition-all duration-300">
                                            <p className="text-base">{faq.answer()}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default FAQ