'use client';
import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link'


const Project = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };
  
  return (
    <main className="flex relative top-20 ">
      <h3 className='absolute text-center   w-screen uppercase tracking-[15px] text-gray-500 text-2xl font-bold'>projects</h3>
      <section className="flex  left-section mt-16 md:ml-16  z-10  flex-wrap ">
        
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={`${currentActive === "all" ? "active" : null} `}
        >
          all projects
        </button>

      

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={`${currentActive === "react" ? "active" : null}`}
        >
          React & UI
        </button>
   
      </section>
   <div className='w-full absolute top-16 bg-[#f7abba]/10 left-0 h-[500px] -skew-y-12 ' />
      <section className=" flex right-section mt-10 md:mt-20">
        <AnimatePresence>
          {arr.map((item,index) => {
            return (
              <Link href={item.url}>
                <motion.article
                layout
                
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={index}
                className=" card "
               
              >
                <img width={266}  src={item.imgPath} alt="" className="h-[14rem] object-contain" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    {item.desc}
                  </p>

                </div>
                </motion.article>
              </Link>
            );
          })}
        </AnimatePresence>
      </section>
  
    </main>
  );
};

export default Project;
