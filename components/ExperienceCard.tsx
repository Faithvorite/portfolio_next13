import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[600px] xl:w-900px snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.3 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] object-cover object-center'
        src='https://media.licdn.com/dms/image/C5603AQGBsFBC9ZJAwA/profile-displayphoto-shrink_800_800/0/1663455980451?e=1678320000&v=beta&t=LG-dob0BXjR-C8xh-8roo8qsFZIV8POPWJ5e_v-Evz4'
        alt='image'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light'>CEO of Nguyen Arts</h4>
            <p className='font-bold text-2xl mt-1'>FRN Arts</p>
            <div className='flex space-y-2 my-2'>
                <img
                className='h-10 w-10 rounded-full'
                src="https://media.licdn.com/dms/image/C5603AQGBsFBC9ZJAwA/profile-displayphoto-shrink_800_800/0/1663455980451?e=1678320000&v=beta&t=LG-dob0BXjR-C8xh-8roo8qsFZIV8POPWJ5e_v-Evz4"
                alt=""
                />
                {/* Stack */}
                {/* Stack */}
                {/* Stack */}
            </div>
            <p className='uppercase py-5 text-gray-300'>started... - ended</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nam atque odit, corporis beatae provident deserunt labore error eaque ratione expedita molestias officiis asperiores, rerum laudantium cupiditate iste necessitatibus placeat.</li>
                <li>Summary points Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nam atque odit, corporis beatae provident deserunt labore error eaque ratione expedita molestias officiis asperiores, rerum laudantium cupiditate iste necessitatibus placeat.</li>
                <li>Summary points Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nam atque odit, corporis beatae provident deserunt labore error eaque ratione expedita molestias officiis asperiores, rerum laudantium cupiditate iste necessitatibus placeat.</li>
                <li>Summary points Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nam atque odit, corporis beatae provident deserunt labore error eaque ratione expedita molestias officiis asperiores, rerum laudantium cupiditate iste necessitatibus placeat.</li>
                <li>Summary points Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nam atque odit, corporis beatae provident deserunt labore error eaque ratione expedita molestias officiis asperiores, rerum laudantium cupiditate iste necessitatibus placeat.</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard