import React from 'react'
import Heading from '../components/reusable/Heading'
import Banner from '../components/reusable/Banner'
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/solid'

const tiers = [
    {
        name: 'Studio A',
        href: '#',
        description: 'Centered around the gorgeous API Box II console, Bay Owl Studio A has plenty of space and a great vibe for multiple artists to jam up ideas and can even track full bands.'
    },
    {
        name: 'Studio B',
        href: '#',
        description: "The cosier studio, Bay Owl's Studio B still houses the API Box II Console and can comfortably track upto two artists together.",
    },
    {
        name: 'Studio C',
        href: '#',
        description: "Bay Owl's Studio C is perfect for your next rehearsal, whether just a trio or a large bollywood band. Alternatively this room is great for livestreams, shoots, workshops and intimate sets.",
    },
]
const sections = [
    {
        name: 'Audio Recording',
        features: [
            { name: 'Commercial Rate', tiers: { "Studio A": "₹2,450", "Studio B": "₹1,950", "Studio C": "₹1,500" } },
            { name: 'Independent Artist Rate*', tiers: { "Studio A": "₹1,250", "Studio B": "₹1,000", "Studio C": "₹1,000" } },
            { name: 'Engineer', tiers: { "Studio A": "₹900", "Studio B": "₹900", "Studio C": "₹900" } },
        ],
    },
    {
        name: 'Video / Photo Shoots*',
        features: [
            { name: 'Phone Camera', tiers: { "Studio A": "₹2,450", "Studio B": "₹1,950", "Studio C": "₹1,250" } },
            { name: 'Other Cameras (No Lighting)', tiers: { "Studio A": "₹5,000", "Studio B": "₹4,000", "Studio C": "₹2,000" } },
            { name: 'Other Cameras (Lighting)', tiers: { "Studio A": "₹7,500", "Studio B": "₹6,000", "Studio C": "₹3,000" } },
            { name: 'Studio Engineer', tiers: { "Studio A": "₹1,500", "Studio B": "₹1,500", "Studio C": "₹1,500" } },
        ],
    },
    {
        name: 'Rehearsals / Jams',
        features: [
            { name: 'Less than 10 people', tiers: { "Studio A": false, "Studio B": false, "Studio C": "₹700" } },
            { name: 'More than 10 people', tiers: { "Studio A": false, "Studio B": false, "Studio C": "₹1250" } },
            { name: 'Extra SM58 mic', tiers: { "Studio A": false, "Studio B": false, "Studio C": "₹50" } },

        ],
    },
    {
        name: 'Livestreams',
        features: [
            { name: '1080p Single Webcam', tiers: { "Studio A": "₹2,450", "Studio B": "₹1,950", "Studio C": "₹1,500" } },
            { name: 'Engineer', tiers: { "Studio A": "₹900", "Studio B": "₹900", "Studio C": "₹900" } },
            { name: 'Add: Multitrack audio', tiers: { "Studio A": "₹1,000", "Studio B": "₹1,000", "Studio C": "₹1,000" } },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function pricing() {
    return (
        <div>
            <Banner title='Pricing' />
            <div className="bg-darkBlue text-white relative">
                <div className='absolute animation-delay-2000 top-[10%] left-[36%] w-36 md:w-96 h-56 bg-blueGradient-0 rounded-full mix-blend-screen filter blur-[80px] animate-blob overflow-hidden' />
                <div className='absolute animation-delay-4000 top-[5%] right-[18%] w-36 md:w-96 h-56 bg-blueGradient-2 rounded-full mix-blend-screen filter blur-[80px] animate-blob overflow-hidden' />
                {/* <div className='absolute top-[42%] left-[40%] w-36 md:w-80 h-72 bg-orange3 rounded-full mix-blend-screen filter blur-[80px] animate-blob overflow-hidden' /> */}
                <div className="max-w-7xl mx-auto py-16 sm:py-24 sm:px-6 lg:px-8">
                    {/* xs to lg // SMALLER SCREENS */}

                    <div className="max-w-2xl mx-auto space-y-16 lg:hidden">
                        {tiers.map((tier, tierIdx) => (
                            <section key={tier.name}>
                                <div className="px-4 mb-8">
                                    <h2 className="text-lg leading-6 font-medium">{tier.name}</h2>
                                    <p className="mt-4 text-sm text-white">{tier.description}</p>
                                </div>
                                {sections.map((section) => (
                                    <table key={section.name} className="w-full">
                                        <caption className="py-3 px-4 font-bold text-md text-white text-left">
                                            {section.name}
                                        </caption>
                                        <thead>
                                            <tr>
                                                <th className="sr-only" scope="col">
                                                    Feature
                                                </th>
                                                <th className="sr-only" scope="col">
                                                    Included
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gradient1">
                                            {section.features.map((feature) => (
                                                <tr key={feature.name} className="border-t border-gray-200">
                                                    <th className="py-5 px-4 text-sm font-normal text-white text-left" scope="row">
                                                        {feature.name}
                                                    </th>
                                                    <td className="py-5 pr-4">
                                                        {typeof feature.tiers[tier.name] === 'string' ? (
                                                            <span className="block text-sm text-right">{feature.tiers[tier.name]}</span>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[tier.name] === true ? (
                                                                    <CheckIcon className="ml-auto h-5 w-5 text-green-500" aria-hidden="true" />
                                                                ) : (
                                                                    <MinusIcon className="ml-auto h-5 w-5 text-gradient1" aria-hidden="true" />
                                                                )}

                                                                <span className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                                                            </>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ))}

                                <div
                                    className={classNames(
                                        tierIdx < tiers.length - 1 ? 'py-5 border-b' : 'pt-5',
                                        'border-t border-gray-200 px-4'
                                    )}
                                >

                                </div>
                            </section>
                        ))}
                    </div>

                    {/* lg+ / LARGER SCREENS*/}
                    <div className="hidden lg:block">
                        <table className="w-full h-px table-fixed">
                            <caption className="sr-only">Pricing plan comparison</caption>
                            <thead>
                                <tr>
                                    <th className="pb-4 px-6 text-md font-medium text-left" scope="col">
                                        <span>Studios</span>
                                    </th>
                                    {tiers.map((tier) => (
                                        <th
                                            key={tier.name}
                                            className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-left"
                                            scope="col"
                                        >
                                            {tier.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="border-t border-gray-200 divide-y divide-blueGradient-2">
                                <tr>
                                    <th className="py-8 px-6 text-sm font-medium text-left align-top" scope="row">

                                    </th>
                                    {tiers.map((tier) => (
                                        <td key={tier.name} className="h-full py-2 px-6 align-top">
                                            <div className="relative h-full table">
                                                <p className="mt-4 mb-16 text-sm text-white">{tier.description}</p>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                                {sections.map((section) => (
                                    <Fragment key={section.name}>
                                        <tr>
                                            <th
                                                className="bg-gradient3 text-white py-3 pl-6 text-sm font-bold text-left"
                                                colSpan={4}
                                                scope="colgroup"
                                            >
                                                {section.name}
                                            </th>
                                        </tr>
                                        {section.features.map((feature) => (
                                            <tr key={feature.name}>
                                                <th className="py-5 px-6 text-sm font-normal text-white text-left" scope="row">
                                                    {feature.name}
                                                </th>
                                                {tiers.map((tier) => (
                                                    <td key={tier.name} className="py-5 px-6">
                                                        {typeof feature.tiers[tier.name] === 'string' ? (
                                                            <span className="block text-sm text-white">{feature.tiers[tier.name]} / hr</span>
                                                        ) : (
                                                            <>
                                                                {feature.tiers[tier.name] === true ? (
                                                                    <CheckIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                                                                ) : (
                                                                    <MinusIcon className="h-5 w-5 text-gradient1" aria-hidden="true" />
                                                                )}

                                                                <span className="sr-only">
                                                                    {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                                                </span>
                                                            </>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pricing