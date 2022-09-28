import React from 'react'
import Heading from './reusable/Heading'

const testimonials = [
    {
        name: "Brent Tauro",
        title: "Pianist & Music Producer",
        content: "I mainly use the rehearsal space at Bay Owl, primarily for it's space and location. It's accessible to people both in town and the suburbs. Varun and team are very accommodating to us musicians. Their waiting room is also very spacious and great for taking breaks in between sessions, meetings, etc.",
    },
    {
        name: "Kaizad Pardiwalla",
        title: "Founder, Spring Brand Solutions",
        content: "Bay Owl is one of the most state of the art music studios in the city today. In my 20 years of experience I haven't seen a better studio with more accomplished technicians than Bay Owl.",
    },
    {
        name: "Vasundhara Vee",
        title: "Singer & Vocal Coach",
        content: "Great studio. And the practice space is probably the best in the city. Bay Owl has become our go to place.",
    },
    {
        name: "Nush lewis",
        title: "Harpist & Singer",
        content: "One of the best rehearsal spaces in the city.",
    },
    {
        name: "Hansel Dias",
        title: "Bassist",
        content: "Great jam room, good folks running the place. First choice for all our rehearsals.",
    },
    {
        name: "Ritwick Das",
        title: "Singer Songwriter",
        content: "Incredible support team, warm ambience, great tech and an insanely amazing sound engineer who literally puts his heart and soul towards each and every project. Bay owl and Varun really make it happen!",
    },
    {
        name: "Karan Parikh",
        title: "Guitarist & Music Producer",
        content: "If you are a musician who wants to jam, a singer-songwriter who wants to produce your own album or you are a content creator who needs any kind of audio services, Bay Owl is the place to go. Varun the owner of the studio is very accommodating and always has his clients best interests. I feel at home when I’m at Bay Owl and I’m sure each one of you will feel the same",
    },
    {
        name: "Adil Kurwa",
        title: "Bassist & Producer",
        content: "Bay Owl Studios is exactly what every musician needs! A state of the art studio and rehearsal room with excellent technicians on board to set you up. The studio is also well located and is a great space to unwind in between sessions to meet and connect with other working musicians from the industry.",
    },
    {
        name: "Faisal Arab",
        title: "Artist",
        content: "I mainly use the rehearsal space at Bay Owl, primarily for it's space and location. It's accessible to people both in town and the suburbs. Varun and team are very accommodating to us musicians. Their waiting room is also very spacious and great for taking breaks in between sessions, meetings, etc.",
    },
    {
        name: "Shresth singal",
        title: "Singer",
        content: 'Lovely place. Nice studio. Well designed and the space and lightings are just great. Best place to put your minds into a whole new world of creativity. Enjoy and relax as you work',
    }
]

function Testimonial() {
    return (
        <div id='testimonials' className='-mt-10 bg-darkBlue pb-20 relative'>
            <div className='absolute overflow-hidden animation-delay-4000 top-[20%] left-[30%] w-24 md:w-80 h-80 bg-orange2 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob -z-0' />
            <div className='absolute overflow-hidden animation-delay-2000 top-[15%] right-[25%] w-24 md:w-96 h-96 bg-blueGradient-2 rounded-full mix-blend-screen filter blur-[80px] opacity-70 animate-blob -z-0' />
            <div className='max-w-7xl mx-auto'>
                <div className='text-center'>
                    <Heading title='Testimonials' />
                </div>
                <section className="bg-indigo-800/20 mt-10 rounded-xl backdrop-blur-md w-11/12 mx-auto">
                    <div className="max-w-7xl flex overflow-auto mx-auto md:px-6 lg:px-8 min-h-fit">

                        {
                            testimonials.map((review, idx) => (
                                <div key={review.name} className="min-w-[30rem] py-8 px-4 sm:px-6 md:flex md:flex-col md:py-12 md:pl-0 md:mx-4">
                                    <blockquote className="mt-4 md:flex-grow md:flex md:flex-col">
                                        <div className="relative text-lg font-medium text-white md:flex-grow">
                                            <svg
                                                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-900"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                            >
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                            <p className="relative">
                                                {review.content}
                                            </p>
                                        </div>
                                        <footer className="mt-8">
                                            <div className="flex items-start">
                                                <div className="ml-4">
                                                    <div className="text-base font-medium text-white">{review.name}</div>
                                                    <div className="text-base font-medium text-orange-400">{review.title}</div>
                                                </div>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </div>
                            ))
                        }



                    </div>
                </section>
            </div>


        </div>
    )
}

export default Testimonial