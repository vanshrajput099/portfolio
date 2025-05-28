"use client";
import { Github, Linkedin, Loader2, LocationEdit, Mail, PhoneCall } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { toast } from 'sonner';
import axios from 'axios';

const GetInTouch = () => {

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const { ref: contactRef, inView: contactInView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const { ref: formRef, inView: formInView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const addDatainForm = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const sendMail = async (e) => {
        e.preventDefault();
        let errors = 0;

        if (!formData.name) {
            toast.error("Enter Your Name")
            errors++;
        } else if (formData.name.length < 4) {
            toast.error("Name should be more than 3 characters.")
            errors++;
        }

        if (!formData.email) {
            toast.error("Enter Your Email");
            errors++;
        } else if (!(/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email))) {
            toast.error("Enter correct email address.");
            errors++;
        }

        if (!formData.projectInquiry) {
            toast.error("Enter Your Message");
            errors++;
        } else if (formData.projectInquiry.length < 5) {
            toast.error("Project Inquiry should be more than 10 characters.");
            errors++;
        }

        if (!formData.message) {
            toast.error("Enter Your Message");
            errors++;
        } else if (formData.message.length < 10) {
            toast.error("Message should be more than 10 characters.");
            errors++;
        }

        if (errors > 0) {
            return;
        }

        setLoading(true);

        try {
            const res = await axios.post("/api/send", formData);
            if (res?.status < 400) {
                toast(res.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }

    }


    return (
        <div id='contact' className='bg-gray-900 w-full flex justify-center text-white py-20'>

            <div className='w-full flex flex-col items-center'>
                <h1 className='text-2xl lg:text-4xl font-bold'>Get In <span className='text-blue-400'>Touch</span></h1>
                <div className='w-full flex flex-col gap-10 justify-between lg:flex-row lg:mt-10 lg:px-10'>
                    <div className='px-5 mt-5'>
                        <h1 className='font-bold text-2xl lg:text-3xl'>Contact Information</h1>
                        <div ref={contactRef} className={`flex flex-col gap-3 mt-5 lg:mt-15 transition-all delay-200 duration-500 ease-out transform ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                            <div className='flex items-center gap-5'>
                                <LocationEdit className='bg-blue-400 h-[40px] w-[40px] p-2 rounded-xl' />
                                <div className='text-sm'>
                                    <h1 className='font-bold'>Location</h1>
                                    <p>Delhi, India</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5'>
                                <Mail className='bg-blue-400 h-[40px] w-[40px] p-2 rounded-xl' />
                                <div className='text-sm'>
                                    <h1 className='font-bold'>Email</h1>
                                    <p>vanshrajput099@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5'>
                                <PhoneCall className='bg-blue-400 h-[40px] w-[40px] p-2 rounded-xl' />
                                <div className='text-sm'>
                                    <h1 className='font-bold'>Phone</h1>
                                    <p>+91-9266964007</p>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <h1 className='text-2xl lg:text-3xl font-bold'>Follow Us</h1>
                                <div className='flex gap-4 mt-1'>
                                    <Link href={'/'} className='p-1 bg-gray-500 rounded-lg' onClick={() => { window.open(GITHUB_URL, '_blank') }}>
                                        <Github />
                                    </Link>
                                    <Link href={'/'} className='p-1 bg-blue-400 rounded-lg' onClick={() => { window.open(GITHUB_URL, '_blank') }}>
                                        <Linkedin />
                                    </Link>
                                    <Link href={'/'} className='p-1 rounded-lg' style={{ backgroundColor: 'crimson' }} onClick={() => { window.location.href = MAIL_URL }}>
                                        <Mail />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div ref={formRef} className={`w-[95%] mx-auto lg:mx-0 lg:w-1/2 border border-gray-700 rounded-xl bg-slate-800 p-5 transition-all delay-200 duration-500 ease-out transform ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        <h1 className='text-2xl lg:text-3xl font-bold'>Send Me A Message</h1>
                        <form className='mt-5 flex flex-col gap-5' action="">
                            <div className='flex justify-between gap-5 text-sm'>
                                <div className='flex flex-col gap-3 w-full'>
                                    <label className='text-sm' htmlFor="">Name</label>
                                    <Input onChange={addDatainForm} name="name" placeholder={'Enter Your Name'} className={'placeholder:text-xs w-full bg-gray-700 border border-gray-600'} type={'text'} />
                                </div>
                                <div className='flex flex-col gap-3 w-full'>
                                    <label className='text-sm' htmlFor="">Email</label>
                                    <Input onChange={addDatainForm} name="email" placeholder={'Enter Your Email'} className={'placeholder:text-xs w-full bg-gray-700 border border-gray-600'} type={'email'} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-sm' htmlFor="">Project Inquiry</label>
                                <Input onChange={addDatainForm} name="projectInquiry" placeholder={'Enter Your Project Inquiry'} className={'placeholder:text-xs w-full bg-gray-700 border border-gray-600'} type={'text'} />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-sm' htmlFor="">Message</label>
                                <Textarea onChange={addDatainForm} name="message" placeholder={'Enter Your Message'} className={'placeholder:text-xs w-full bg-gray-700 border border-gray-600'} type={'email'} />
                            </div>
                            <Button disabled={loading} onClick={sendMail} className={'bg-blue-400 hover:cursor-pointer'}>{loading ? <><Loader2 className='animate-spin' /> Sending..</> : "Send"}</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch