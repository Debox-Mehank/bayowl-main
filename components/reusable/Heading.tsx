import React from 'react'

type HeadingProps = {
    title: string;
}

function Heading(props: HeadingProps) {
    return (
        <h3 className='text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange1 via-orange2 to-orange3'>
            {props.title}
        </h3>
    )
}

export default Heading