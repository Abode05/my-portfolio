'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { myProjects } from './myProjects'

const Project = () => {
  const [currentActive, setcurrentActive] = useState('all')
  const [arr, setArr] = useState(myProjects)

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory)

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory
      })

      return ZZZ === buttonCategory
    })

    setArr(newArr)
  }

  return (
    <main className="flex flex-col items-center gap-10 mt-8 top-6 bg-zinc-800 px-4 relative mb-4">
      <h3 className="absolute text-center top-16 uppercase tracking-[15px] text-[#8b4ad4] font-bold font-serif text-2xl ">
        Projects
      </h3>
      <section className="flex flex-col md:flex-row items-start gap-2.5 md:ml-16 z-10 mt-32">
        <button
          onClick={() => {
            setcurrentActive('all')
            setArr(myProjects)
          }}
          className={`bg-[#24252E] w-44 py-3 text-center text-lg capitalize opacity-50 rounded-md transition duration-300 text-beige ${
            currentActive === 'all'
              ? 'opacity-100 font-bold border border-[#7251a8] py-3.5'
              : 'hover:opacity-100 hover:text-[#ccc1dd]'
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => handleClick('js')}
          className={`bg-[#24252E] w-44 py-3 text-center text-lg capitalize opacity-50 rounded-md transition duration-300 text-beige ${
            currentActive === 'js'
              ? 'opacity-100 font-bold border border-[#7251a8] py-3.5'
              : 'hover:opacity-100 hover:text-[#ccc1dd]'
          }`}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleClick('react')}
          className={`bg-[#24252E] w-44 py-3 text-center text-lg capitalize opacity-50 rounded-md transition duration-300 text-beige ${
            currentActive === 'react'
              ? 'opacity-100 font-bold border border-[#7251a8] py-3.5'
              : 'hover:opacity-100 hover:text-[#ccc1dd]'
          }`}
        >
          React & UI
        </button>
      </section>

      <section className="flex flex-wrap justify-center gap-4 mt-10 md:mt-20 w-full">
        <AnimatePresence>
          {arr.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-[30%] p-3">
              <motion.article
                layout
                initial={{ transform: 'scale(0.4)' }}
                animate={{ transform: 'scale(1)' }}
                transition={{ type: 'spring', damping: 8, stiffness: 50 }}
                className="card bg-gradient-to-r
                 from-[#ffffff0d] to-[#ffffff0d] shadow-md border
                  border-[#6b61c296] rounded-md transition duration-300
                   hover:border-blue-500 hover:rotate-1 hover:scale-105 cursor-pointer"
              >
                <img
                  src={item.imgPath}
                  alt=""
                  className="object-fill  w-full h-56 rounded-t-md"
                />
                <div className="p-4 flex flex-col justify-between h-52 text-white">
                  <div>
                    <h1 className="text-xl capitalize">{item.projectTitle}</h1>
                    <p className="text-sm mt-2 mb-4 w">{item.desc}</p>
                  </div>
                  <Link
                    href={item.url}
                    className="text-blue-600 text-lg  hover:underline "
                  >
                    Visit Website
                  </Link>
                </div>
              </motion.article>
            </div>
          ))}
        </AnimatePresence>
      </section>
    </main>
  )
}

export default Project
