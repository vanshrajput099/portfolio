"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const ProjectCards = ({ data }) => {

    const handleClick = () => {
        window.open(data.link, '_blank');
    }

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    return (
        <div ref={ref} onClick={() => handleClick()} className={`hover:cursor-pointer space-y-5 flex flex-col justify-between border border-gray-600 bg-gray-900 rounded-xl overflow-hidden transition-all delay-100 duration-600 ease-out transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img className='h-[100px] lg:h-[200px] object-cover mx-auto w-full' src={data.image} alt="" />
            <div className='py-1 px-2 space-y-2'>
                <div className='space-y-1'>
                    <h1 className='text-xl lg:text-2xl font-medium line-clamp-1'>{data.name}</h1>
                    <p className='text-xs lg:text-sm line-clamp-5'>{data.desc}</p>
                </div>
                <div className='flex flex-wrap space-x-2 pb-4'>
                    <p className='text-xs text-[#50a2ff]'>Tech Stack:</p>
                    {
                        data.tech.split(",").map((ele, idx) => {
                            return (
                                <p key={idx} className='text-xs rounded-xl'>
                                    {ele},
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCards