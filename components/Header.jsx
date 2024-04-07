'use client';
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
const Header = () => {
    return (
        <div className='sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.6
                }}
                className='flex flex-row items-center'>
     
                <SocialIcon url="https://facebook.com" bgColor="transparent" fgColor="gray" />
                <SocialIcon url="https://github.com/Abode05" bgColor="transparent" fgColor="gray" />
                <SocialIcon url="https://linkedin.com/in/couetilc" bgColor="transparent" fgColor="gray" />
                <SocialIcon url="www.instagram.com" bgColor="transparent" fgColor="gray" />
            </motion.div>

                <Link href="#contact">
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.6
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'
            >
                <img src="hotmail.svg" alt="" className='h-8  w-8  '/>
                {/* <SocialIcon className='cursor-pointer' network='email' bgColor="transparent" fgColor="gray" /> */}
                <p className=' uppercase hidden md:inline-flex text-sm text-gray-400' >get in toutch</p>
            </motion.div>
                </Link>
        </div>
    );
};

export default Header
