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
        description: "My personal art portfolio. Full stack e-commerce site with an admin dashboard and PayPal integration. Fully responsive with Framer Motion animation.",
        url: "https://faithnguyenart.vercel.app/",
        git:"https://github.com/Faithvorite/nextjspersonalwebsite"
    },
    {
        id: 2,
        
         title: "Modern Blog",
        stack: "NEXT.js 13 | Sanity | TypeScript | Tailwind CSS",
        img: "https://i.imgur.com/2CKj8q3.png",
        img2: "https://i.imgur.com/eQ6RWhw.png",
        description: "Fully responsive blog. Static and Dynamic data handling, preview mode and studio with Sanity v.3, ",
        url: "https://faithnguyenblog.vercel.app/",
        git:"https://github.com/Faithvorite/next13_blog_app"
    },
    {
        id: 3,
        title: "Meta Messenger App clone",
        stack: "NEXT.js 13 | Upstash | TypeScript | Tailwind CSS",
        img: "https://i.imgur.com/9C1AU4b.png",
        description: "Real time messenger app using Upstash, Pusher, and Redis. Pub/Sub backend enabling real-time sync.",
        url: "https://my-meta-messenger.vercel.app/",
        git:"https://github.com/Faithvorite/meta-messenger"
    },
    {
        id: 4,
        title: "Live News App ",
        stack: "NEXT.js 13 | TypeScript | StepZen | GraphQL | Tailwind CSS | Light/Dark Mode ",
        img: "https://i.imgur.com/h9PAqLq.png",
        description: "Live News App with Dynamic and Static data handling. Categories and search bar. Live news pulled optimally from Mediastack API. Responsive design and light/dark mode with Tailwind.",
        url: "https://nguyennews.vercel.app/",
        git:"https://github.com/Faithvorite/news_next13"
    },
    {
        id: 5,
        title: "DALLE-2.0 Clone",
        stack: "MERN stack | Tailwind CSS | Cloudinary",
        img: "https://i.imgur.com/VUTK2jx.png",
        description: "Full stack MERN AI Image Generation App",
        url: "https://dalle-clone-mern-nu.vercel.app/",
        git:"https://github.com/Faithvorite/dalle_clone_mern"
    },
       {
        id: 6,
        title: "Book Search",
        stack: "React | Tailwind CSS | Open Library API",
        img: "https://i.imgur.com/WVoznQ2.png",
        description: "Book search site with Open Library API. Colorful and responsive design.",
        url: "https://book-search-react.vercel.app/",
        git:"https://github.com/Faithvorite/dalle_clone_mern"
    },
];

  return (
    <div className=' h-screen min-h-[500px] relative flex overflow-hidden flex-col text-left lg:flex-row max-w-full justify-evenly mx-auto items-center z-0 py-4 sm:py-10 bg-gradient-to-b from-[rgb(107,43,43)]/0 via-[rgb(107,43,43)]/30 to-[rgb(107,43,43)]/0'>
        <h3 className='lg:absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full h-11/12 flex overflow-x-scroll overflow-y-hidden snap-x z-20 scrollbar scrollbar-track-white/60 scrollbar-thumb-[rgb(107,43,43)]/80 px-5 '>
            {/* projects */}
            {projects.map((project, i)=> (
                <div key={i} className='lg:flex-row   w-5/6 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center mx-2 sm:mx-12 xl:mx-24 px-6 mb-4 sm:mb-10 bg-slate-100 '>
                    <Link target="_blank" href={project.url} className="z-20">

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
                       className='shadow-xl hover:shadow-2xl sm:max-w-[400px] lg:max-w-[500px] max-h-[300px] md:max-h-[450px] sm:m-4 lg:pb-14'
                       />
                    </Link>
                
                    <div className='space-y-4 lg:py-7 md:mx-14 xl:mx-28'>
                        <h4 className='text-gray-800 text-xl xl:text-xl font-light text-center flex flex-col'>
                            <span className=' text-2xl sm:text-4xl uppercase font-semibold pb-2 tracking-widest'>{project.title}</span> {project.stack}
                        </h4>

                        <p className='text-md sm:text-lg text-center'>
                            {project.description} 
                        </p>
                        
                        
                        <div className='text-xs text-gray-500 flex justify-between items-center '>
                        <div className='text-sm items-center flex'>
                            {/* <p>
                                CASE STUDY {i + 1} of {projects.length} 
                                </p> */}
                                <SocialIcon
                            url={project.git}
                            fgColor="gray"
                            bgColor="transparent"
                        /> 
                        </div>
                        
                        <Link href={project.url} target="_blank" className='group text-right uppercase text-xs items-center flex flex-row space-x-2 hover:text-black duration-300 tracking-widest'>
                        Come visit<ArrowRightIcon className="h-6 w-6 pl-2 group-hover:scale-110"/>
                        </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {/* <div className='w-full absolute top-[30%] bg-[rgb(107,43,43)]/10 left-0 h-[300px] -skew-y-12'></div> */}
    </div>
  )
}

export default Projects
