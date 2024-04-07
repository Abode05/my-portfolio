'use client';
import React from 'react'
import ExperienceCard from './ExperienceCard'
import { motion  } from 'framer-motion'

const WorkExperience = () => {
  return (
      <motion.div
       src='./abd4.jpg'    
          initial={{
          opacity:0
        }}
        transition={{
          duration:1.2
        }}
        whileInView={{
              opacity:1 
              }}
           
      
          className='flex relative overflow-hidden flex-col text-lft md:flex-row 
            max-w-full px-10 justify-evenly mx-auto items-center
    '>
          <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

      <div className='w-full flex space-x-5 overflow-scroll p-10 snap-x snap-mandatory overflow-x-scroll overflow-y-hidden
           scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7abba]/80'>
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard />
             </div>
    </motion.div>
  )
}

export default WorkExperience
