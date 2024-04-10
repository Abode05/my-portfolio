'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const About = () => {
  return (
     <div className='h-screen   flex flex-col relative text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center top-14
      '>
      <motion.h3
         initial={{
         
          opacity:0
        }}
        transition={{
          duration:1.4
        }}
        whileInView={{
         
          opacity:1 
        }}
        className='absolute top-8  uppercase tracking-[20px] text-gray-500 text-2xl sm:top-8  xl:top-20 '> About</motion.h3>
      
      <motion.img
        initial={{
          x: -200,
          opacity:0
        }}
        transition={{
          duration:1.2
        }}
        whileInView={{
          x: 0,
          opacity:1 
        }}
        viewport={{once:false}}
        className='-mb-20 md:mb-0  h-56 w-56   flex-shrink-0  rounded-full object-cover
         md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] xl:object-cover xl:mt-12
        '
      src="abd22.jpg"
      />
      <div className='space-y-10 px-0 md:px-10 '>
        <h4 className='text-4xl font-semibold'>Here's a <span className='underline decoration-[#f7abba]/50'>profile </span> {""} of me.</h4>
        <p className='text-base'>
          I am Abdul Latif Salus I started studying in 2021 at the Arab International University (AIU)  in Syria,
          Now that I am in the third year, I started learning to develop the web and I loved this field and I want to develop myself more ,
          I have already learned to develop the fronent (react js) and it is time to publish my work and build my personal site,
          The next step will be more exciting.
        </p>
      </div>
     
    </div>
  )
}

export default About
