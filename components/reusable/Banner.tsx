import React from 'react'

type BannerProps = {
    title: string;
}

function Banner(props: BannerProps) {
    return (
        <>
            <div className='h-[30vh] bg-banner' />
            <div className='absolute max-w-7xl top-28 md:top-32 font-bold left-0 right-0 mx-auto z-40 text-3xl md:text-4xl text-primary text-center'>
                {props.title}
            </div>
        </>
    )
}

export default Banner

