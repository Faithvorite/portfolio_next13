import React from 'react'
import { motion } from "framer-motion"
import myPic from "../public/meUT.jpg"

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute  top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        
        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            opacity: 1,
            x:0,
        }}
        viewport={{
            once: true,
        }}
        src="https://media.licdn.com/dms/image/C5603AQGBsFBC9ZJAwA/profile-displayphoto-shrink_200_200/0/1663455980451?e=1678320000&v=beta&t=HeIfb8UFIU6tW7954XDEgyAREPKpGPIkv-VThFVlF70"
        alt="profile pic"
        className="-mb-20 md:mb-0 flex-shrink-0 w-50 h-50 rounded-full object-cover md:rounded-lg md:w-64 md:h-95"
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl lg:text-4xl font-semibold'>Here is a <span className='underline decoration-green-50/50'>little</span> background</h4>
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda repellendus numquam repudiandae tempore eaque vel libero sed, temporibus eveniet laudantium. Tempore ducimus laborum magnam quo molestiae animi atque nemo!</p>
        </div>
            </motion.div>
  )
}

export default About