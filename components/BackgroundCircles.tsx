import React from 'react'
import { motion } from "framer-motion"
type Props = {}

function BackgroundCircles({}: Props) {
  return (
     <motion.div 
     initial={{
      opacity: 0,
     }}
     animate={{
      scale: [1,2,3,1],
      opacity: [0.1, 0.2, 0.4,  .5],
      borderRadius: ["20%", "20%", "50%", "80%", "20%"]
     }}
     transition={{
      duration: 5.5,
     }}
     className='relative flex justify-center items-center top-7'
     >
        <div className='absolute border border-gray-500/50 rounded-full h-[200px] w-[200px] mt-52 animate-pulse'/>
        <div className='absolute border border-gray-500/50 rounded-full h-[300px] w-[300px] mt-52 animate-pulse'/>
        <div className='absolute border border-[rgb(160,64,64)] rounded-full h-[500px] w-[500px] mt-52 animate-pulse'/>
        {/* <div className='rounded-full border border-green opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse' /> */}
        <div className='rounded-full border border-[rgb(199,78,78)]  h-[800px] w-[800px] absolute mt-52 animate-pulse' />
     </motion.div>
  )
}

export default BackgroundCircles