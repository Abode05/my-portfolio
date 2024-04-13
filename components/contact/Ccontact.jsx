'use client';
'ues server';
import React from 'react'
import { EnvelopeIcon, MapIcon, PhoneIcon, } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form';

const Contact = () => {
    let { register, handleSubmit } = useForm({
        mode: "onSubmit",
    });
    const onSubmit = (data) => {
        window.location.href = `mailto:abodesalaas@gmail.com ?subject=${data.subject}&body= hi my name is ${data.firstName}
       ${data.message} (${data.email})`
  }

  return (
    <div className='  flex flex-col  relative  text-center md:text-left md:flex-row max-w-6xl
    justify-evenly mx-auto items-center z-0  lg:top-20 top-16 max-sm:W-18 mb-8 '>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:top-20 '>
              contact me
          </h3>
          
          <div className='flex flex-col space-y-8 mt-28'>
              
              <h4 className='text-3xl font-semibold text-center mt-8  max-[620px]:text-2xl '>
                  Ihave just what you need.{""}
                  <span className='decoration-[#f7abba]/50 underline'>lets talk me</span>
              </h4>
              <div className='space-y-8'>
                  <div className='flex items-center space-x-5 justify-center'>
                      <PhoneIcon className='text-[#f7abba] h-7 w-7  animate-pulse' />
                      <p className='text-2xl'>+963 946 443 679</p>
                  </div>

                  <div className='flex items-center space-x-5 justify-center'>
                      <EnvelopeIcon className='text-[#f7abba] h-7 w-7  animate-pulse' />
                      <p className='text-2xl'>abdullatifsalaas@gmail.com</p>
                  </div>

                  <div className='flex items-center space-x-5 justify-center'>
                      <MapIcon className='text-[#f7abba] h-7 w-7  animate-pulse' />
                      <p className='text-2xl'>syria damascus</p>
                  </div>
                  
              </div>

              
      
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2  mx-auto md:w-fit  max-[620px]:w-screen  '>
                  <div className='flex space-x-2 max-[620px]:flex-col space-y-2' >
                      <input  {...register("firstName", { required: true, maxLength: 20 })}    placeholder='Name' className='contactInput  max-[620px]:row '    type='text' />
                         <input  {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder='last name' className='contactInput' type='text' />
                      
                  </div>
                 
                      <input  {...register("email", { min: 18, max: 99 })}   placeholder='Email'   className='contactInput'    type='email' />

                  <textarea placeholder='Message' className='contactInput' />
                  <button type='submit'  
                  className='bg-[#f7abba] py-5 px-10 rounded-md text-black  font-bold text-lg '>submit</button>

              </form>
    <div className="border-2  w-full my-8"></div>

          </div>
          
    </div>
  )
}

export default Contact
