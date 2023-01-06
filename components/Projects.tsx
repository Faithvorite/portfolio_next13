import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {/* projects */}
            {projects.map((project, i)=> (
                <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-centr p-20 md:p-44 h-screen'>
                    <motion.img
                       initial={{
                        y: -300,
                        opacity: 0,
                       }}
                       transition={{ duration: 1.2 }}
                       whileInView={{ opacity: 1, y: 0}}
                       viewport={{ once: true }}
                       src="data:image/jpeg;base64,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"
                        />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-green-300'>Case Study {i + 1} of {projects.length}</span>: UPS clone
                        </h4>

                        <p className='text-lg text-center md:text-left'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid iste enim nulla ab soluta laborum. Quibusdam, rem accusamus. Debitis nihil, sit ad saepe voluptatibus tempora natus praesentium enim sed! Nemo.
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-gray-50/10 left-0 h-[300px] -skew-y-12'></div>
    </div>
  )
}

export default Projects