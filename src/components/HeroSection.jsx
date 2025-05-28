"use client";
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import hero from "@/assets/hero.jpeg"
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {

    const { ref: helloRef, inView: helloView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const { ref: nameRef, inView: nameView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const { ref: imageRef, inView: imageInView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const handleResume = () => {
        window.open('https://drive.google.com/file/d/14D2LohT7XRXLuBWsO0ni5GRWLg4jeKbE/view?usp=sharing', '_blank');
    }

    return (
        <div id='home' className='w-full flex text-white' style={{ background: " #0a0a0a" }}>

            <div className='min-h-[90vh] flex flex-col-reverse gap-10 lg:flex-row lg:justify-center h-full lg:items-center lg:gap-0' style={{ background: 'radial-gradient(circle, rgba(255, 0, 80, 0.4) 0%, transparent 70%)' }}>
                <div className='w-full text-center lg:w-[40%] lg:mx-auto flex flex-col gap-5 px-2'>
                    <h1 ref={helloRef} className={`text-2xl transition-all duration-700 ease-out transform ${helloView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `} style={{ color: 'crimson' }}>Hello I'm</h1>
                    <div ref={nameRef} className={`transition-all delay-200 duration-700 ease-out transform ${nameView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className={`text-2xl lg:text-4xl xl:text-6xl font-bold`}>Vansh Rajput</h1>
                        <h1 className='text-2xl text-blue-400 lg:text-4xl xl:text-5xl font-bold'>Full Stack Developer</h1>
                    </div>
                    <p className={`text-sm xl:text-lg transition-all delay-500 duration-700 ease-out transform ${nameView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Enthusiastic and detail-oriented Software Engineer with a passion for building efficient and scalable web
                        applications. Proficient in full-stack development with expertise in JavaScript and databases. Keen to apply
                        technical skills in a fast-paced, innovative environment.</p>
                    <div className={`flex gap-5 mx-auto lg:mt-3 transition-all delay-900 duration-700 ease-out transform ${nameView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Button className={'bg-blue-400'}>View Projects</Button>
                        <Button onClick={handleResume} variant={'outline'} className={'bg-black'}>Resume</Button>
                    </div>
                    <div className={`flex gap-2 mx-auto transition-all delay-900 duration-700 ease-out transform ${nameView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Link href={'/'}>
                            <Github />
                        </Link>
                        <Link href={'/'}>
                            <Linkedin />
                        </Link>
                        <Link href={'/'}>
                            <Mail />
                        </Link>
                    </div>
                </div>

                <div className='mt-5 w-[90%] lg:w-fit flex justify-center mx-auto h-[500px] xl:h-[600px] relative'>
                    <Image ref={imageRef} alt='vansh.jpg' className={`object-contain border h-full border-gray-700 rounded-xl w-fit transition-all delay-100 duration-700 ease-out transform ${imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} src={hero} />
                    <div ref={imageRef} className={`absolute w-fit p-3 text-center border bg-gray-900 rounded-lg border-gray-700 -bottom-[5%] left-1/2 -translate-x-1/2 transition-all delay-1000 duration-700 ease-out transform ${imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>✅ Available For Work</div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection