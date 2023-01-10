import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(241,241,241)] absolute inset-0 text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thin scrollbar-track-gray-400/5 scrollbar-thumb-[rgb(107,43,43)]/80 xs:py-10 sm:p-5'>
      <Head>
        <title>Faith Nguyen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn.dribbble.com/users/2640075/screenshots/13973890/media/59e07df85c2654d586c8a9f1bdbec534.jpg?compress=1&resize=768x576&vertical=top" />
      </Head>
    <Header />

    <section id="hero" className='snap-center '>
      <Hero />

    </section>

    <section id='about' className=' snap-center'>
      <About />
    </section>

    {/* <section id="experience" className='snap-center'>
      <WorkExperience />
    </section>

    <section id="skills" className='snap-center'>
      <Skills />
    </section> */}
    
    <section id="projects" className='snap-center'>
      <Projects />
      </section> 

    <section id="contact" className='snap-center'>
      <Contact />
    </section>

    <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex justify-end px-5'>
          <img 
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            src="https://cdn.dribbble.com/users/2640075/screenshots/13973890/media/59e07df85c2654d586c8a9f1bdbec534.jpg?compress=1&resize=768x576&vertical=top"
            alt="profile pic"
            />
        </div>
      </footer>
    </Link>
    </div>
  )
}