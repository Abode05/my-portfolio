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
    <main className="flex relative top-24 ">
         <h3 className='absolute top-0 left-[43%] uppercase tracking-[20px] text-gray-500 text-2xl'>Project</h3>
      <section className="flex  left-section mt-16 ml-6   ">
        
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={`${currentActive === "all" ? "active" : null}`}
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
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={`${currentActive === "node" ? "active" : null}`}
        >
          Node & Express
        </button>
      </section>
   <div className='w-full absolute top-[32%] bg-[#f7abba]/10 left-0 h-[500px] -skew-y-12 ' />
      <section className=" flex right-section mt-20">
        <AnimatePresence>
          {arr.map((item,index) => {
            return (
              <motion.article
                layout
                
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={index}
                className=" card "
               
              >
                <img width={266}  src={item.imgPath} alt="" className="h-[14rem] object-fill" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                    tempore dolor in, accusantium laudantium accusamus.
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <a className="link flex" href={item.url}   >
                       visit website
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
  
    </main>
  );
};

export default Project;
