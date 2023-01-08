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
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
    <h3 className='md:absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col md:flex-row space-y-10 md:space-x-10 max-w-full justify-evenly mx-auto items-center'>
            <div>
                
            <h4 className='text-4xl font-semibold text-center p-5'>
                <span className='decoration-green-100/50 underline'>Let us talk.</span> 
            </h4>

            <div className='flex flex-col space-y-5 max-w-full'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-green-500 h-7 w-7 animate-pulse'/>
                    <p>+12323412</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-green-500 h-7 w-7 animate-pulse'/>
                    <p>faithrnguyen@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-green-500 h-7 w-7 animate-pulse' />
                    <p>Austin, TX</p>
                </div>
            </div>
            </div>

            <form 
             onSubmit={handleSubmit(onSubmit)}
             className='flex flex-col space-y-2 w-full mx-auto px-2'>
                <div className='flex space-y-2 flex-col sm:flex-row sm:space-x-2 sm:space-y-0'>
                    <input {...register('name')} placeholder="Name" className='contactInput' type="text" />
                    <input {...register('email')} placeholder="Email" className='contactInput' type="email" />
                </div>

                <input {...register('subject')} placeholder="Subject" className='contactInput' type='text' />
                <textarea {...register('message')} placeholder="Message" className='contactInput'/>
                <button type="submit" className='bg-green-500 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>

    </div>
  )
}

export default Contact