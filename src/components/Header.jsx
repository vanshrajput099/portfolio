import { headerData } from '@/data/data'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='flex sticky top-0 z-50 justify-between w-full py-6 bg-gray-800 lg:px-10 text-white'>
            <div className='flex w-full mx-auto items-center gap-2 justify-between px-10 lg:mx-0'>
                <div className='lg:hidden'>
                    <MenuIcon />
                </div>
                <div className='flex text-2xl font-bold'>
                    &lt; <span className='text-blue-400'>Vansh</span> <span className='' style={{ color: 'crimson' }}>Rajput</span> /&gt;
                </div>
            </div>
            <div className='hidden lg:flex'>
                {
                    headerData.map((ele, index) => {
                        return (
                            <div key={index} className='px-5'>
                                <Link href={`${ele.href}`}>{ele.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Header