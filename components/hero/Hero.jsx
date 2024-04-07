'use client';
import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import Backgroundcircle from './Backgroundcircle';
import Link from 'next/link';
const Hero = () => {
     const [text, count] = useTypewriter({
         words: [
                "Hi,my Name is abdullatif",
                "Iam a developer",
             "programmer",
                "Frontend developer"
         ],
         loop: true,
         delaySpeed:2000,
         
     })
    
    return (
        <div className='h-screen flex  flex-col space-y-8 justify-center items-center text-center overflow-hidden'>
              <Backgroundcircle />
            <img
                className='relative rounded-full h-40 w-40 mx-auto object-cover     '
                src='abd22.jpg'
              
            />
            <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-1 tracking-[5px]'>software engeneering</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold  px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='blue'/>
                </h1>
                <div className='pt-4'>
                    <Link href="#abouts" >
                        <button className='heroButton'>about</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'> experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>projects</button>
                    </Link>
               </div>
           </div>
        </div>
  )
}

export default Hero
