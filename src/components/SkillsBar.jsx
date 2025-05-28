"use client";
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

const SkillsBar = ({ data }) => {

    const [percentage, setPercentage] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const { ref: divRef, inView: divInView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    useEffect(() => {
        let interval;
        if (inView) {
            interval = setInterval(() => {
                const p = data.percentage.split("%")[0]
                setPercentage(prev => {
                    if (prev >= p) {
                        clearInterval(interval);
                        return p;
                    }
                    return prev + 1
                });
            }, 20)
        }

        return () => interval && clearInterval(interval);
    }, [inView]);

    return (
        <div ref={divRef} className={`transition-all delay-100 duration-700 ease-out transform ${divInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='flex justify-between'>
                <h1 className='text-sm'>{data.name}</h1>
                <h1>{percentage}%</h1>
            </div>
            <div className='w-full overflow-hidden bg-white rounded-2xl'>
                <div
                    ref={ref}
                    className={`bg-blue-400 py-1 transition-all delay-400 duration-700 ease-out transform ${inView ? 'opacity-100 ' : 'opacity-0 translate-x-0'}`}
                    style={{ width: inView && data.percentage || '0%' }}
                ></div>
            </div>
        </div >
    )
}

export default SkillsBar