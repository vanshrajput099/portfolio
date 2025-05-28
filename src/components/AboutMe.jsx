"use client"
import Image from 'next/image'
import React from 'react'
import laptop from "@/assets/laptop.jpg"
import { Button } from './ui/button'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const AboutMe = () => {

    const { ref: imageRef, inView: imageInView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const { ref: rowRef, inView: rowInView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const { ref: rowSRef, inView: rowSInView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    return (
        <div id='about' className='w-full flex justify-center text-white py-20' style={{ background: " #0a0a0a" }}>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='font-bold text-2xl lg:text-4xl xl:text-5xl'>About <span className='text-blue-400'>Me</span> </h1>
                <div className='flex flex-col gap-2 lg:flex-row lg:items-center'>
                    <div className='w-full lg:w-1/2'>
                        <Image ref={imageRef} className={`h-[450px] object-cover transition-all delay-1000 duration-700 ease-out transform ${imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} src={laptop} alt='laptop.png' />
                    </div>
                    <div className='w-full lg:w-1/2 p-2 flex flex-col justify-between lg:h-full lg:justify-evenly gap-5'>
                        <h1 className='font-bold text-2xl'>Who Am I ?</h1>
                        <p ref={rowSRef} className={`text-sm transition-all delay-500 duration-700 ease-out transform ${imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Full Stack Web Developer with expertise in Next.js, React.js, Node.js, Express.js, and MongoDB, along with experience in Neo4j and SQL. Proficient in building scalable web applications, implementing authentication, and optimizing performance. Passionate about creating efficient and user-friendly applications.</p>
                        <div className='flex justify-between'>
                            <div className='grid grid-cols-1 gap-y-3 text-sm xl:grid-cols-2 xl:gap-x-10'>
                                <div ref={rowRef} className={`transition-all delay-500 duration-700 ease-out transform ${imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    <h1 className='font-bold'>Name</h1>
                                    <p>Vansh Rajput</p>
                                </div>
                                <div ref={rowRef} className={`transition-all delay-500 duration-700 ease-out transform ${imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    <h1 className='font-bold'>Location</h1>
                                    <p>Delhi, India</p>
                                </div>
                                <div ref={rowSRef} className={`transition-all delay-500 duration-700 ease-out transform ${rowSInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    <h1 className='font-bold'>Email</h1>
                                    <p>vanshrajput099@gmail.com</p>
                                </div>
                                <div ref={rowSRef} className={`transition-all delay-500 duration-700 ease-out transform ${rowSInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    <h1 className='font-bold'>Available</h1>
                                    <p className='text-green-500'>Freelance And Full-Time</p>
                                </div>
                            </div>
                        </div>
                        <Link href={"#contact"}>
                            <Button className={'bg-blue-400 w-full hover:cursor-pointer'}>Get In Touch</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe