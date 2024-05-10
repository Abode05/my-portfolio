'use client';
import React from 'react'
import { motion  } from 'framer-motion'
import Skill from './Skill';
import { myskills } from './myskills';

const Skills = () => {
  
  return (
    <motion.div className=' flex flex-col relative text-center md:text-left md:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center xl:space-y-0-0'>
          
      <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl font-bold'>Skills</h3>
          
          <h3 className='absolute top-[125px]  uppercase tracking-[3px] text-gray-500 text-sm'>
              hovor over a skills to show skill  percent experince
          </h3>

      <div className='grid grid-cols-2 gap-8 mt-[180px] xl:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-2 xl:mt-20   '>
        {myskills.map((item,index) => (
          <div key={index}>
             <Skill items={item.percent} image={item.img} myskill={item.name}/> 
          </div>
        ))}
              
          </div>
            
    </motion.div>
  )
}

export default Skills
