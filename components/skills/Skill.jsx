'use client';

import React from 'react'
import { motion  } from 'framer-motion'
// import { IoLogoReact } from "react-icons/io5";

const Skill = ({ directionLeft,items,image,myskill }) => {
  
  return (
    <div className='group relative flex cursor-pointer  '>
          <motion.img
              initial={{
                  x: directionLeft ? -200 : 200,
                  opacity:0
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={image}
              className='h-24 w-24 rounded-full border border-gray-600 object-cover xl:w-32 xl:h-32 filter group-hover:grayscale
              transition duration-300 ease-out md:w-40  md:h-40 
              
              '
      />
      
          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white h-24 w-24 
          md:h-full md:w-full xl:w-32 xl:h-32 rounded-full z-0
          '>
        <h6 className='absolute left-0 top-0 right-0 bottom-0 -mt-8 flex justify-center'>{myskill }</h6>
              <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'> {items}</p>
        
              </div>
      </div>
     
          
    </div>
  )
}

export default Skill
