import React from 'react'
import { motion } from "framer-motion"
import myPic from "../public/meUT.jpg"

type Props = {}

function About({}: Props) {
  return (
    <div className='h-screen lg:px-36 xl:px-56 min-h-[500px] '>

    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen md:space-x-5 space-y-2 text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='md:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        
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
        // viewport={{
            //     once: true,
            // }}
        src="https://media.licdn.com/dms/image/C5603AQGBsFBC9ZJAwA/profile-displayphoto-shrink_800_800/0/1663455980451?e=1678320000&v=beta&t=LG-dob0BXjR-C8xh-8roo8qsFZIV8POPWJ5e_v-Evz4"
        alt="profile pic"
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-80"
        />

        <div className='space-y-10 px-0 md:px-10 '>
            <h4 className='text-2xl lg:text-4xl tracking-widest font-semibold'>A <span className='underline decoration-[rgb(107,43,43)]/50'>little</span> background...</h4>
            <p className='text-lg px-5'>I graduated Cum Laude from UT Austin in 2019, with a B.S. in English and minor in Creative Writing. While English and art have long been my outlets for expression, in 2021 I began studying web development as well. Despite changes in my career path, my goal in life has remained the same - to better my ability to create and communicate.</p>
        </div>
            </motion.div>
            </div>
  )
}
export default About