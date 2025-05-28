"use client";
import React from 'react'
import { useInView } from 'react-intersection-observer';

const ProSkills = ({ data }) => {

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    return (
        <div ref={ref} className={`bg-gray-800 border border-gray-600 text-white text-center p-5 rounded-xl space-y-2 transition-all delay-400 duration-700 ease-out transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className='font-medium'>{data.name}</h1>
            <p className='text-gray-300 text-sm'>{data.desc}</p>
        </div>
    )
}

export default ProSkills