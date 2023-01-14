import React from 'react'
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid';
type Props = {}

function Projects({}: Props) {
   const projects = [
    {
        id: 1,
       title: "E-Commerce Art Site",
        stack: "NEXT.js | MongoDB | Axios | ",
        img: "https://i.imgur.com/SQJgpm7.png",
        img2: "https://i.imgur.com/HQMebwS.png",
        description: "Full stack e-commerce site with admin dashboard and PayPal integration. Fully responsive with framer motion animation.",
        url: "https://faithnguyenart.vercel.app/",
        git:""
    },
    {
        id: 2,
        
         title: "Modern Blog",
        stack: "NEXT.js 13 | Sanity | TypeScript | Tailwind CSS",
        img: "https://i.imgur.com/2CKj8q3.png",
        img2: "https://i.imgur.com/eQ6RWhw.png",

        description: "Fully responsive blog. Static and Dynamic data handling, preview mode and studio with Sanity v.3, ",
        url: "https://faithnguyenblog.vercel.app/",
        git:""
    },
    {
        id: 3,
        title: "Meta Messenger App clone",
        stack: "NEXT.js 13 | Sanity | TypeScript | Tailwind CSS",
        img: "https://i.imgur.com/o8ZG7RG.png",
        description: "lorem",
        url: "",
        git:""
    },
    {
        id: 4,
        title: "live news app ",
        stack: "NEXT.js 13 | TypeScript | StepZen | Tailwind CSS | Dark Mode | GraphQL",
        img: "https://cdn.dribbble.com/userupload/4221657/file/original-47c6fe97504f4a60f4392c7ce183453f.png?compress=1&resize=1024x576",
        description: "lorem",
        url: "",
        git:""
    },
    {
        id: 5,
        title: "META Messenger clone",
        stack: "NEXT.js 13 | Sanity | TypeScript | Tailwind CSS",
        img: "https://cdn.dribbble.com/userupload/4221657/file/original-47c6fe97504f4a60f4392c7ce183453f.png?compress=1&resize=1024x576",
        description: "lorem",
        url: "https://my-meta-messenger.vercel.app/",
        git:""
    },
];

  return (
    <div className='h-screen min-h-[500px] relative flex overflow-hidden flex-col text-left lg:flex-row max-w-full justify-evenly mx-auto items-center z-0 py-10'>
        <h3 className='lg:absolute top-28 uppercase tracking-[15px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full h-11/12 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(107,43,43)]/80 mb-[15px] px-5 '>
            {/* projects */}
            {projects.map((project, i)=> (
                <div key={i} className='lg:flex-row w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-24 bg-gradient-to-b from-[rgb(107,43,43)]/40 '>
                    <Link href={project.url} className="z-20">

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
                       className=' sm:max-w-[400px] lg:max-w-[500px] max-h-[400px] lg:pb-14'
                       />
                    </Link>
                
                    <div className='space-y-5 lg:py-7 md:mx-14 xl:mx-28'>
                        <h4 className='text-xl xl:text-xl font-light text-center flex flex-col'>
                            <span className='text-4xl uppercase font-semibold pb-2 tracking-widest'>{project.title}</span> {project.stack}
                        </h4>

                        <p className='text-lg text-center'>
                            {project.description} 
                        </p>
                        
                        
                        <p className='text-xs text-gray-500 pb-5 flex justify-between items-center'>Case Study {i + 1} of {projects.length} 
                        <Link href={project.url} className='group text-right uppercase text-xs items-center flex flex-row space-x-2 hover:text-black duration-300 tracking-widest'>
                        Come visit<ArrowRightIcon className="h-6 w-6 pl-2 group-hover:-rotate-45"/>
                        </Link></p>
                    </div>
                </div>
            ))}
        </div>
        {/* <div className='w-full absolute top-[30%] bg-[rgb(107,43,43)]/10 left-0 h-[300px] -skew-y-12'></div> */}
    </div>
  )
}

export default Projects