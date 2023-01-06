import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -200: 200,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="data:image/png;base64,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"
            className='rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill