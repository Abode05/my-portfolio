'use client';
import React from 'react'
import { motion  } from 'framer-motion'

const Projects = () => {
  const projects =
    [{id:1,pr:1,name:"chatgpt"},
        {id:2,pr:2,name:"chatgpt2"},
        {id:3,pr:3,name:"chatgpt3"},
        
      ]
  return (
    <motion.div
      initial={{
        opacity:0
      }}
      whileInView={{ opacity: 1 }}
      transition={{duration:1.3}}
      
      className='h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full
           justify-evenly mx-auto items-center z-0
    '>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Project</h3>
          
          <div className=' flex relative w-full overflow-x-scroll overflow-y-hidden  scrollbar-thin
          snap-x snap-mandatory z-20   scrollbar-track-gray-400/20 scrollbar-thumb-[#f7abba]/80
          '>
              {projects.map((project,i) => 
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
                  items-center 
                  justify-center p-20 
                  md:p-44 h-screen
                  ">
                  <motion.img
                  
                     initial={{
                      y: -300,
                       opacity:0
                        }}
                        whileInView={{ opacity: 1,y:0 }}
                    transition={{ duration: 1.3 }}
                    viewport={{once:true}}
                    
                    src='gpt.png' alt='gpt' className='h-64 w-64 mt-24 rounded-full' />
                  
                      <div className='space-y-10 px-10 md:px-10 max-w-6xl ' >
                          <h4 className='text-4xl font-semibold text-center'>
                              <span  className='underline decoration-[#f7abba]/50' key={i}>case study{i + 1} of {projects.length}:</span>{ " "}{project.name}
                          </h4>
                  </div>
                  <p className='text-lg text-center md:text-left'>chat gpt is the king Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit.
                    Expedita quia molestiae libero animi aut accusantium saepe quidem vero consectetur officiis
                    , repudiandae, reprehenderit beatae. Iusto, esse enim modi dolorum repellat quod.</p>
                  
                  </div>

         )}
              
            </div>

          <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects
