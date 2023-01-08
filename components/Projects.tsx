import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
        <h3 className='md:absolute top-28 uppercase tracking-[15px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-11/12 h-11/12 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(107,43,43)]/80 mb-[15px] p-5 xl:px-[25px]'>
            {/* projects */}
            {projects.map((project, i)=> (
                <div key={i} className='lg:flex-row w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center px-5'>
                    <motion.img
                        initial={{
                            y:0,
                        }}
                        transition={{ duration: 1.4}}
                        whileInView={{y: 10}}
                    //    initial={{
                    //     y: -300,
                    //     opacity: 0,
                    //    }}
                    //    transition={{ duration: 1.2 }}
                    //    whileInView={{ opacity: 1, y: 0}}
                    //    viewport={{ once: true }}
                       src="https://miro.medium.com/max/786/1*NqRJpS6XN-DIlOjUlfM-WQ.webp"
                       className='xs:max-w-[400px] md:max-w-[400px] lg:max-w-[500px]'
                       />
                    <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-3xl xl:text-4xl font-semibold text-center'>
                            <span className='underline decoration-[rgb(107,43,43)]'>Case Study {i + 1} of {projects.length}</span>: UPS clone
                        </h4>

                        <p className='text-lg text-center md:text-left'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid iste enim nulla ab soluta laborum. Quibusdam, rem accusamus. Debitis nihil, sit ad saepe voluptatibus tempora natus praesentium enim sed! Nemo.
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[rgb(107,43,43)]/10 left-0 h-[300px] -skew-y-12'></div>
    </div>
  )
}

export default Projects