import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
type Props = {}

function WorkExperience({}: Props) {
  const educationInfo=[
    { 
      id: 1,
      title: "Introductory JavaScript",
      uni: "Scrimba",
      img: "https://scrimba.com/static/art/scrimba-og-image.png",
      stack: ["https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"],
      period: "2021",
      summary: ["172 Lessons, 8 hours and 21 minutes", "Learned the fundamentals of JavaScript", "Built passenger counter app, Blackjack game,  and Chrome Extension, "],

    },
    { 
      id: 2,
      title: "JavaScript Algorithms and Data Structures | Front End Development Libraries Cerification",
      uni: "freeCodeCamp",
      img: "https://i.pcmag.com/imagery/reviews/01tPXClg2WjLamQzScplH3y-15.fit_scale.size_760x427.v1627670281.png",
      stack: ["https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"],
      period: "2021",
      summary: ["More than 200 lessons completed", "Learned the fundamentals of JavaScript and React"],

    },
    {    id: 3,
    title: "TExtbook",
    uni: "freeCodeCamp",
    img: "https://scrimba.com/static/art/scrimba-og-image.png",
    stack: ["https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"],
    period: "2021",
    summary: ["172 Lessons, 8 hours and 21 minutes", "Learned the fundamentals of JavaScript", "Built passenger counter app, Blackjack game,  and Chrome Extension, "],

  },
  {    id: 4,
    title: "30 Projects in 1 Month",
    uni: "JS30",
    img: "https://javascript30.com/images/JS3-social-share.png",
    stack: ["https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"],
    period: "2021",
    summary: ["Built 30 vanilla JavaScript projects in one month", "Worked with DOM, interface, audio and video", "No frameworks or libraries, just browser APIs"],

  },

  ]
  return (
    <motion.div
     initial={{ opacity: 0}}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 1.5 }}
     className='h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>
        Education
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(107,43,43)]/80'>
       
        {educationInfo.map((education,id) => (
            <article key={id} className='h-full flex flex-col text-white rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100 sm:opacity-90 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.3 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] object-cover object-center'
        src={education.img}
        alt='image'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light'>{education.title}</h4>
            <p className='font-bold text-2xl mt-1'>{education.uni}</p>
            <div className='flex p-2 gap-2 items-center'>
                {education.stack.map((img,i)=>
                (<img
                key={i}
                className='h-10 w-10 rounded-full'
                src={img}
                alt=""
                />))}
            </div>
            <p className='uppercase py-5 text-gray-300'>{education.period}</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                {education.summary.map((sum,id) => (
                    <li key={id}>{sum}</li>
                ))}
            </ul>
        </div>
            </article>
        ))}
        </div>
        </motion.div>
  )
}

export default WorkExperience