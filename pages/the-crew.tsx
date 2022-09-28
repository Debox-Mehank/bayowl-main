import React from 'react'
import Link from 'next/link'
import varun from "../public/Crew/Varun.jpg"
import percy from "../public/Crew/Percy.jpeg"
import Image from "next/image"
import Banner from '../components/reusable/Banner'
import Heading from '../components/reusable/Heading'
// import Asma from '../public/Crew/Asma.jpg'
import Shubham from '../public/Crew/Shubham.jpeg'
import Krishna from '../public/Crew/Krishna.jpg'
import Rishabh from '../public/Crew/Rishabh.jpg'
import Sarvesh from '../public/Crew/Sarvesh.jpg'
import Niruji from '../public/Crew/Niruji.jpeg'
import Asma01 from '../public/Crew/Asma01.png'
// import Niruji from '../components/reusable/Rishabh.jpg'

const people = [
    {
        name: 'Varun Parikh',
        role: 'Founder & Engineer',
        image: varun,
        bio: 'Bay Owl Studios was conceptualised and founded from Varun’s passion for audio engineering and music. Between sessions you’ll usually find him near the coffee machine, avidly discussing sports or having a casual geopolitical debate!',
    },
    {
        name: 'Percy Lima',
        role: 'Engineer',
        image: percy,
        bio: 'Genuinely one of the nicest people you’ll meet, Percy will often go way beyond the scope of work to help you out. Ever dependable, don’t let his usual quiet demeanour in the studio fool you, he will almost always be on point with what’s required for your project. Challenge Percy to a game of table tennis or FIFA after your session and watch his competitive side come to the fore!',
    },
    {
        name: 'Asma Shaikh',
        role: 'Studio Manager',
        image: Asma01,
        bio: "Affable, amiable and a true people’s person, Asma is our manager in more ways than she knows. The cog that adds coherence to our effervescent studio, she goes above and beyond to take care of everyone in our little Bay Owl family. It’s no different with clients, as she always goes out of her way to accommodate every request as much as possible!",
    },
    {
        name: 'Shubham Patil',
        role: 'Junior Engineer',
        image: Shubham,
        bio: "Shubham's love for the studio comes from a keen sense of belonging in the room. Quick and adept on the console, he'll make your recording sessions a breeze, probably saving you hours of editing time with his speed. He's found a love for recording rap, hip-hop, and other solo artists, and in his short career he's already worked with several big name artists such as Divine, Mc Altaf, KSHMR, etc. Outside the control room, away from the seriousness, you'll often catch him goofing around with others in the studio. His one liners are sure to put a smile on your face and brighten up your day :) ",
    },
    {
        name: 'Krishna Karambelkar',
        role: 'Support Staff',
        image: Krishna,
        bio: "Our go to man for absolutely anything, Krishna always says yes, and always with a smile! Having worked various roles in this industry over the last 25 years or so, he is an asset unlike any other. Whatever your requirement, small or big, Krishna has you covered, and even when he doesn’t, he’ll find a way to make it happen! Always helpful, always smiling, Krishna is the Alfred to our Bay Owl cave!",
    },
    {
        name: 'Rishabh Brahmabhatt',
        role: 'Assistant Engineer',
        image: Rishabh,
        bio: "Rishabh has only been with us a short while so far, but in just a few months has shown tremendous potential to go far in this line. Already a step ahead of most of his peers with his knowledge of music, Rishabh is also a passionate musician and keyboard player. Always helpful to others no questions asked, he's seamlessly become a part of our Bay Owl family.",
    },
    {
        name: 'Niruji Solanki',
        role: 'Support Staff',
        image: Niruji,
        bio: "The senior-most member of our little clad, Niruji is also the most introvert of our lot. But with a little push, she loves to have conversations over chai. Her love for her family is always evident from her conversations, and it’s a privilege to have a soul as gentle and warm as hers a part of Bay Owl! ",
    },
    {
        name: 'Sarvesh Dhamorikar',
        role: 'Assistant Engineer',
        image: Sarvesh,
        bio: "Sarvesh too has been with us for just a few months, and has also in those few months shown tremendous potential. He's a talented musician and singer, but of late has shown great promise working with with audio for film. Sarvesh is someone who always speaks his mind, which is a rare quality. Ever ready to help others, he's one of the friendliest souls you'll meet.",
    },
    // More people...
]

function TheCrew() {
    return (
        <>
            <Banner title='The Crew' />
            <div className="bg-darkBlue text-white">
                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
                        <div className="lg:col-span-2">
                            <ul
                                role="list"
                                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                            >
                                {people.map((person) => (
                                    <li key={person.name}>
                                        <div className="space-y-4">
                                            <div className="aspect-w-3 aspect-h-1 overflow-clip h-64 w-48">
                                                {person.image && (
                                                    <Image className="shadow-lg rounded-lg" src={person.image} objectFit="cover" />
                                                )}
                                            </div>
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <h3>{person.name}</h3>
                                                <p className="text-primary font-bold">{person.role}</p>
                                            </div>
                                            <div className="text-lg">
                                                <p className="text-white text-justify">{person.bio}</p>
                                            </div>
                                            {/* Socials */}
                                            {/* <ul role="list" className="flex space-x-5">
                                        <li>
                                            <a href={person.twitterUrl} className="text-gray-400 hover:text-white">
                                                <span className="sr-only">Twitter</span>
                                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={person.linkedinUrl} className="text-gray-400 hover:text-white">
                                                <span className="sr-only">LinkedIn</span>
                                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul> */}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TheCrew