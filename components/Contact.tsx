import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid"
import {useForm, SubmitHandler } from "react-hook-form"

type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function Contact({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href= `mailto:faithrnguyen@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

  return (
    <div className='h-screen min-h-[500px] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 py-10'>
    <h3 className='md:absolute top-24  uppercase tracking-[15px] text-gray-500 text-2xl'>
            Contact
        </h3>
        {/* <img 
            className='absolute h-1/2 w-90 rounded-full z-0 left-0 opacity-20'
            src="https://i.imgur.com/XbHhV15.png"
            alt="profile pic"
            /> */}
        <div className='relative flex flex-col md:flex-row space-y-10 xs:space-y-5 md:space-x-10 max-w-full justify-evenly mx-auto items-center'>
        
        <div className='z-20'>
            <h4 className='text-4xl font-semibold text-center pb-5'>
                <span className='decoration-[rgb(107,43,43)]/50 underline'>Let us talk.</span> 
            </h4>

            <div className='flex flex-col space-y-2 max-w-full'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[rgb(107,43,43)] h-7 w-7 animate-pulse'/>
                    <p>+12323412</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[rgb(107,43,43)] h-7 w-7 animate-pulse'/>
                    <p>faithrnguyen@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[rgb(107,43,43)] h-7 w-7 animate-pulse' />
                    <p>Austin, TX</p>
                </div>
            </div>
        </div>

            <form 
             onSubmit={handleSubmit(onSubmit)}
             className='flex flex-col space-y-2 w-full mx-auto px-2 z-20'>
                <div className='flex space-y-2 flex-col sm:flex-row sm:space-x-2 sm:space-y-0'>
                    <input {...register('name')} placeholder="Name" className='contactInput' type="text" />
                    <input {...register('email')} placeholder="Email" className='contactInput' type="email" />
                </div>

                <input {...register('subject')} placeholder="Subject" className='contactInput' type='text' />
                <textarea {...register('message')} placeholder="Message" className='contactInput'/>
                <button type="submit" className='bg-[rgb(107,43,43)] py-2 sm:py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>

    </div>
  )
}

export default Contact