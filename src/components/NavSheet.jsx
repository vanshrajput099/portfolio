"use client";
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { headerData } from '@/data/data'
import Link from 'next/link'

const NavSheet = ({ children }) => {

    const [open, setOpen] = useState(false)

    const handleLinkClick = () => {
        setTimeout(() => {
            setOpen(false)
        }, 100)
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent side='left' className="w-[200px] bg-gray-800 border-none sm:w-[540px]">
                <div className="px-2 font-bold text-white tracking-widest min-h-[50vh] flex flex-col justify-between mt-5">
                    {
                        headerData.map((ele, index) => {
                            return (
                                <div onClick={handleLinkClick} key={index} className='p-5' style={{ borderBottom: '1px solid gray' }}>
                                    <Link href={`${ele.href}`}>{ele.name.toUpperCase()}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NavSheet