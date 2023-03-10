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
      transition={{ duration: 1 }}
      viewport={{
        once: true,
    }}
      className='flex flex-col relative h-screen md:space-x-5 text-center md:text-left md:flex-row max-w-7xl px-5 sm:px-10 justify-evenly mx-auto items-center py-10 '>
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
        viewport={{
                once: true,
            }}
        src="https://i.imgur.com/TvNJGQk.jpg"
        alt="profile pic"
        className=" md:mb-0 flex-shrink-0 w-40 h-40 my-10 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-80"
        />

        <div className='space-y-10 px-0 md:px-10 '>
            <h4 className='text-2xl sm:text-4xl tracking-widest font-semibold'>A little background...</h4>
            <p className='text-md px-5 sm:text-lg'>I graduated Cum Laude from UT Austin, with a B.S. in English and minor in Creative Writing. While English and art have long been my outlets for expression, in 2021 I began studying web development as well. Despite changes in my career path, my goal in life has remained the same - to better my ability to create and communicate.</p>
            <hr className='w-48 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-[rgb(107,43,43)]/50'/>
        </div>
        <div className='w-screen absolute top-[30%] bg-[rgb(107,43,43)]/10 h-[300px] -skew-y-12 -z-20'></div>
            </motion.div>
            </div>
  )
}
export default About