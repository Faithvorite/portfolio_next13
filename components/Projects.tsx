import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function Projects({}: Props) {
   const projects = [
    {
        id: 1,
        title: "Modern Blog",
        stack: "NEXT.js 13 | Sanity | TypeScript | Tailwind CSS",
        img: "https://cdn.dribbble.com/userupload/4253479/file/original-917b64e2c8c52f700a68fde5568e243c.png?compress=1&resize=1024x768",
        description: "Fully responsive blog. Static and Dynamic data handling, preview mode with Sanity v.3, "
    },
    {
        id: 2,
        title: "Modern Blog",
        stack: "NEXT.js 13 | Sanity | TypeScript | Tailwind CSS",
        img: "https://cdn.dribbble.com/userupload/4262070/file/original-9079888940f90226cc8b0396895c9c82.png?compress=1&resize=1024x768",
        description: "lorem"
    },
    {
        id: 3,
        title: "Modern Blog",
        stack: "NEXT.js 13 | Sanity | TypeScript | Tailwind CSS",
        img: "https://cdn.dribbble.com/userupload/4221657/file/original-47c6fe97504f4a60f4392c7ce183453f.png?compress=1&resize=1024x576",
        description: "lorem"
    },
    {
        id: 4,
        title: "Modern Blog",
        stack: "NEXT.js 13 | Sanity | TypeScript | Tailwind CSS",
        img: "https://cdn.dribbble.com/userupload/4221657/file/original-47c6fe97504f4a60f4392c7ce183453f.png?compress=1&resize=1024x576",
        description: "lorem"
    },
    {
        id: 5,
        title: "Modern Blog",
        stack: "NEXT.js 13 | Sanity | TypeScript | Tailwind CSS",
        img: "https://cdn.dribbble.com/userupload/4221657/file/original-47c6fe97504f4a60f4392c7ce183453f.png?compress=1&resize=1024x576",
        description: "lorem"
    },
];

  return (
    <div className='h-screen min-h-[500px] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 py-10'>
        <h3 className='md:absolute top-28 uppercase tracking-[15px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full h-11/12 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(107,43,43)]/80 mb-[15px] px-5 '>
            {/* projects */}
            {projects.map((project, i)=> (
                <div key={i} className='lg:flex-row w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-24'>
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
                       src={project.img}
                       className='xs:max-w-[400px] md:max-w-[400px] lg:max-w-[500px] max-h-[400px]'
                       />
                    <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-xl xl:text-xl font-light text-center flex flex-col'>
                            <span className='text-4xl uppercase font-bolder pb-2 tracking-widest underline decoration-[rgb(107,43,43)]'>{project.title}</span> {project.stack}
                        </h4>

                        <p className='text-lg text-center md:text-left '>
                            {project.description} 
                        </p>
                        <p className='text-xs text-gray-500 pb-5'>Case Study {i + 1} of {projects.length}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[rgb(107,43,43)]/10 left-0 h-[300px] -skew-y-12'></div>
    </div>
  )
}

export default Projects