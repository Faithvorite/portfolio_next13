import React from 'react'
import { motion } from "framer-motion"
type Props = {}

function BackgroundCircles({}: Props) {
  return (
     <motion.div className='relative flex justify-center items-center'>
        <div className='absolute border border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-red-500 rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className='absolute border border-red-500 rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
        <div className='rounded-full border border-green opacity-20 h-[650px] w-[650px] absolute mt-52' />
        <div className='rounded-full border border-green  h-[800px] w-[800px] absolute mt-52' />
     </motion.div>
  )
}

export default BackgroundCircles