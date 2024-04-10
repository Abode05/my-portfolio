'use client';
import React from 'react'
import{motion} from 'framer-motion'
const Backgroundcircle = () => {
    return (
        <motion.div
            initial={{
                opacity:0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius:["20%","20%","50%","80%","20%"]
            }}
            transition={{
                duration:2.5,
            }}
            className='relative flex justify-center items-center mt-12'>
        <div className='absolute border border-zinc-800  rounded-full  h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-zinc-800  rounded-full  h-[300px] w-[300px] mt-52  ' />
        <div className='absolute border border-zinc-800  rounded-full  h-[500px] w-[500px] mt-52 ' />
        <div className='absolute rounded-full  border border-[#aca5a5]  h-[600px] w-[600px] mt-80 animate-pulse opacity-20 ' />
        <div className='absolute rounded-full  border border-zinc-800   h-[800px] w-[800px] mt-52   ' />
 
        </motion.div>
    
  )
}

export default Backgroundcircle
