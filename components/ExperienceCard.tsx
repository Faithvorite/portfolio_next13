import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard() {
    const educationInfo=[
        { 
          id: 1,
          title: "Introductory JavaScript",
          uni: "Scrimba",
          img: "https://scrimba.com/static/art/scrimba-og-image.png",
          stack: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          period: "2021",
          summary: ["172 Lessons, 8 hours and 21 minutes", "Learned the fundamentals of JavaScript", "Built passenger counter app, Blackjack game,  and Chrome Extension, "],
    
        },
        { 
          id: 2,
          title: "REACT Certificate",
          uni: "freeCodeCamp",
          img: "https://scrimba.com/static/art/scrimba-og-image.png",
          stack: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          period: "2021",
          summary: ["172 Lessons, 8 hours and 21 minutes", "Learned the fundamentals of JavaScript", "Built passenger counter app, Blackjack game,  and Chrome Extension, "],
    
        },
        // {
        //   title: ,
        //   uni: ,
        //   img: ,
        //   period: ,
        //   summary: ,
    
        // },
        // {
        //   title: ,
        //   uni: ,
        //   img: ,
        //   period: ,
        //   summary: ,
    
        // },
        // {
        //   title: ,
        //   uni: ,
        //   img: ,
        //   period: ,
        //   summary: ,
    
        // }
      ]
  return (
    <div className='flex-row'>
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
            <div className='flex space-y-2 my-2'>
                <img
                className='h-10 w-10 rounded-full'
                src={education.stack}
                alt=""
                />
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
  )
}

export default ExperienceCard