import React from 'react'
import SkillsBar from './SkillsBar'
import { professionalSkills, skillsData } from '@/data/data'
import ProSkills from './ProSkills'

const Skills = () => {
    return (
        <div id='skills' className='w-full bg-gray-900 py-20 flex justify-center'>
            <div className='text-white flex flex-col items-center gap-5 w-full'>
                <h1 className='text-4xl font-bold'>My <span className='text-blue-400'>Skills</span></h1>
                <div className='flex flex-col gap-5 w-full lg:flex-row'>
                    <div className='w-full lg:w-1/2 px-5 mt-5'>
                        <h1 className='font-bold'>Technical Skills</h1>
                        <div className='flex flex-col gap-2 justify-between mt-5'>
                            {
                                skillsData.map((ele, index) => <SkillsBar data={ele} key={index} />)
                            }
                        </div>
                    </div>
                    <div className='w-full px-5 mt-5 lg:w-1/2'>
                        <h1 className='font-bold'>Professional Skills</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 mt-2 gap-5'>
                            {
                                professionalSkills.map((ele, idx) => <ProSkills data={ele} key={idx} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills