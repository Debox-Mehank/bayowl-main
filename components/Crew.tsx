import Link from "next/link"

import varun from "../public/Crew/Varun.jpg"
import percy from "../public/Crew/Percy.jpeg"
import Image from "next/image"
import Heading from "./reusable/Heading"

const people = [
    {
        name: 'Varun Parikh',
        role: 'Founder & Engineer',
        image: varun,
        bio: "Bay Owl Studios was conceptualised and founded from Varun’s passion for audio engineering and music. Varun has worked on albums and songs with a host of stellar artists, and has international credits with artists such as Karsh Kale, Warren Mendonsa, Benny Dayal, Apeksha Dandekar, Ankur Tiwari, Divine, MC Altaf and more. In the film space, he's worked on well over a thousand projects, ranging from ads, shorts, features, ott, podcasts and more. Between sessions you’ll usually find him near the coffee machine, avidly discussing sports or having a casual geopolitical debate!",
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Percy Lima',
        role: 'Engineer',
        image: percy,
        bio: "Genuinely one of the nicest people you’ll meet, Percy will often go way beyond the scope of work to help you out. Ever dependable, don’t let his usual quiet demeanour in the studio fool you, he will almost always be on point with what’s required for your project. Percy is the go to engineer for artists such as Rajakumari. He's also extremely experienced with audio for film, with his eye for sound design and visual cues for music arrangement some of his strongest skillsets. Challenge Percy to a game of table tennis or FIFA after your session and watch his competitive side come to the fore!",
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    // More people...
]

export default function Crew() {
    return (
        <div className="bg-darkBlue text-white">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 relative">
                <div className='absolute overflow-hidden animation-delay-2000 top-[15%] left-[35%] w-24 md:w-96 h-96 bg-blueGradient-2 rounded-full mix-blend-screen filter opacity-40 blur-[80px] animate-blob' />
                <div className='absolute overflow-hidden top-1/3 right-[24%] w-24 md:w-80 h-80 bg-orange2 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob' />
                <div className='absolute overflow-hidden animation-delay-4000 bottom-[12%] sm:right=[20%    ] xl:left-[55%] w-24 md:w-96 h-96 bg-blueGradient-1 rounded-full mix-blend-screen filter blur-[80px] animate-blob' />
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 ">
                    <div className="space-y-5 sm:space-y-4">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-orange1 via-orange2 to-orange3">The Crew</h2>
                        <p className="text-xl text-white">
                            Who we are.
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <ul
                            role="list"
                            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                        >
                            {people.map((person) => (
                                <li className="" key={person.name}>
                                    <div className="space-y-4">
                                        <div className="aspect-w-3 aspect-h-1 h-64 w-48">
                                            <Image className="shadow-lg rounded-lg" src={person.image} objectFit="cover" />
                                        </div>
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                            <h3 className="font-bold">{person.name}</h3>
                                            <p className="text-primary font-bold">{person.role}</p>
                                        </div>
                                        <div className="text-lg">
                                            <p className="text-gray-100 text-justify">{person.bio}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <Link href={"/the-crew"}>
                            <button className=' border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 mt-12 lg:mt-8 flex mx-auto justify-center items-center gap-2.5 text-gray-300 bg-white text-2xl font-bold py-2 px-4 rounded-2xl  hover:-translate-y-1 duration-300 transition-all hover:shadow-2xl hover:bg-primary hover:text-white '>
                                Meet the whole crew
                            </button>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    )
}
