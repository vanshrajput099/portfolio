import React from 'react'
import ProjectCards from './ProjectCards'
import { projectsData } from '@/data/data'

const Projects = () => {

    return (
        <div id='projects' className={`w-full flex justify-center text-white py-10 overflow-hidden`} style={{ background: " #0a0a0a" }}>
            <div className='flex flex-col items-center gap-5 w-full'>
                <h1 className='font-bold text-4xl'>My <span className='text-blue-400'>Projects</span> </h1>
                <div className='w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[90%] mx-auto gap-y-3 gap-x-5'>
                        {
                            projectsData.map((ele, index) => <ProjectCards data={ele} key={index} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects