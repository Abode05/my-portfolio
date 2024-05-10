'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const About = () => {
  return (
    <section>
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
        className=' uppercase tracking-[20px] text-gray-500 text-2xl text-center mt-12 '> About</motion.h3>
      
     <div className=' flex flex-col relative text-center md:text-left md:flex-row
      max-w-7xl justify-evenly mx-auto items-center gap-15 py-4
      '>
    
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
        className=' md:mb-0  h-44 w-44  rounded-full flex-shrink-0  object-contain
         md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] xl:object-contain xl:mt-12
        '
          src="/abab.jpg"
         
          />
        
      <div className='space-y-10 py-4 px-0 md:px-10 '>
        <h4 className='text-4xl font-semibold'>Here's a <span className='underline decoration-[#f7abba]/50'>profile </span> {""} of me.</h4>
        <p className='text-base'>
          I am Abdul Latif Salus I started studying in 2021 at the Arab International University (AIU)  in Syria,
          Now that I am in the third year, I started learning to develop the web and I loved this field and I want to develop myself more ,
          I have already learned to develop the fronent (react js) and it is time to publish my work and build my personal site,
          The next step will be more exciting.
        </p>
      </div>
     
      </div>
      </section>
  )
}

export default About
