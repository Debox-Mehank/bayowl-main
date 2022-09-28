import React from 'react'
import Heading from '../components/reusable/Heading'
import Banner from '../components/reusable/Banner'
import YouTube from 'react-youtube';

function showreel() {
    return (
        <div className='bg-darkBlue'>
            <Banner title='Showreel' />
            <div className='mx-auto max-w-7xl py-14 space-y-8'>
                <div className='relative'>
                    <div className='absolute animation-delay-2000 top-[1%] left-[36%] w-36 md:w-96 h-56 bg-blueGradient-0 rounded-full mix-blend-screen filter blur-[80px] animate-blob overflow-y-hidden' />
                    <Heading title='Discography' />
                    <div className='py-6 grid md:grid-cols-2 mx-auto text-center gap-12 relative px-4'>
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='shSUDi4b2y8' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='Oaau0-ZOvPA' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='hU0zN6u5iHQ' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='mJIETKAxGAo' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='CVDvmN13t1E' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='gZbSgIxRg3U' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='w5Aioq5VYF0' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='3Et9-uTeUzM' />
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute animation-delay-2000 top-[1%] left-[36%] w-36 md:w-96 h-56 bg-pink-700 rounded-full mix-blend-screen filter blur-[80px] animate-blob overflow-y-hidden' />
                    <Heading title='Filmography' />
                    <div className='py-6 grid md:grid-cols-2 mx-auto text-center gap-12 relative px-4'>
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='PtQcZiYd9ic' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='hiDtmXl-NeM' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='g65QeJUFQkc' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='Us0E2m-1DOE' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='99YCrTfOaFU' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='HYIw901NG8E' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='ExHnpDKIF-4' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='BAXAmSw7QXk' />
                        <YouTube className='mx-auto z-0 w-full' iframeClassName='rounded-xl w-full' videoId='iQeKCt9IvKM' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default showreel