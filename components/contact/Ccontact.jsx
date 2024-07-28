'use client'

import React from 'react'
import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
  })

  const onSubmit = (data) => {
    window.location.href = `mailto:abdullatifsalaas@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.firstName} ${data.lastName}. ${data.message} (${data.email})`
  }

  return (
    <div className="flex flex-col relative top-12 lg:top-24  text-center md:text-left md:flex-row max-w-6xl justify-evenly mx-auto items-center z-0 pt-20 pb-8 px-4  mb-52 mt-20 lg:mt-8">
      <h3 className="absolute top-16 md:top-14 uppercase tracking-[20px] text-[#7251a8]  font-serif text-2xl font-bold">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-8 mt-28 md:mt-32 text-[#bcb5c7]">
        <h4 className="text-3xl font-semibold text-center">
          I have just what you need.{' '}
          <span className="decoration-[#f7abba]/50 underline">Let's talk</span>
        </h4>
        <div className="space-y-8">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7abba] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">+963 946 443 679</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7abba] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">abdullatifsalaas@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="text-[#f7abba] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">Syria, Damascus</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 mx-auto w-full max-w-md px-4"
        >
          <input
            {...register('firstName', { required: true, maxLength: 20 })}
            placeholder="First Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
            placeholder="Last Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register('email', { required: true })}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
          <textarea
            {...register('message', { required: true })}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#7251a8] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
